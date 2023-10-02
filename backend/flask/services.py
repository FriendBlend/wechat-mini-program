# services.py
from models import db, UserProfile, Party, Friendship
from flask import abort, jsonify
from datetime import datetime

def create_user(data):
    openid = data.get('openid')
    uid = abs(hash(openid)) % 10000000000

    existing_user = UserProfile.query.filter_by(user_id=uid).first()
    if existing_user:
        abort(400, 'Failed to generate unique UID.')

    user_profile = UserProfile(
        user_id=uid,
        avatar=data.get('avatar'),
        name=data.get('name'),
        age=data.get('age'),
        school=data.get('school'),
        photos=','.join(data.get('photos', [])),
        description=data.get('description'),
        room_id_list=','.join(data.get('room_id_list', [])),
        skin_id_list=','.join(data.get('skin_id_list', []))
    )
    db.session.add(user_profile)
    db.session.commit()

    return uid

def add_party(data):
    party_info_string = f"{data['member_num']}{''.join(data['seat_list'])}{data['time']}{data['location']}{data['cost']}{data['description']}{data['type']}"
    party_id = abs(hash(party_info_string)) % 10000000000
    party_id = int(str(party_id).zfill(10))

    existing_party = Party.query.filter_by(party_id=party_id).first()
    if existing_party:
        abort(400, 'Failed to generate unique party_id.')

    party = Party(
        party_id=party_id,
        party_name=data.get('party_name'),
        member_num=data.get('member_num'),
        seat_list=','.join(data.get('seat_list')),
        time=data.get('time'),
        location=data.get('location'),
        cost=data.get('cost'),
        description=data.get('description'),
        type=data.get('type')
    )
    db.session.add(party)
    db.session.commit()

    return party_id

def join_party(data):
    user_id = data.get('user_id')
    party_id = data.get('party_id')
    seat_index = data.get('seat_index')

    party = Party.query.filter_by(party_id=party_id).first()
    if not party:
        abort(400, 'Party not found.')

    if seat_index < 0 or seat_index >= party.member_num:
        abort(400, 'Invalid seat index.')

    seat_list = party.seat_list.split(',') if party.seat_list else [None] * party.member_num

    if seat_list[seat_index]:
        abort(400, 'Seat is already taken.')

    seat_list[seat_index] = str(user_id)
    party.seat_list = ','.join(seat_list)
    db.session.commit()

def exit_party(data):
    user_id = data.get('user_id')
    party_id = data.get('party_id')
    seat_index = data.get('seat_index')

    party = Party.query.filter_by(party_id=party_id).first()
    if not party:
        abort(400, 'Party not found.')

    seat_list = party.seat_list.split(',') if party.seat_list else [None] * party.member_num

    if seat_index < 0 or seat_index >= party.member_num or seat_list[seat_index] != str(user_id):
        abort(400, 'Invalid seat index or user not in the specified seat.')

    seat_list[seat_index] = None
    party.seat_list = ','.join(seat_list)
    db.session.commit()

def get_user_info(user_id):
    user = UserProfile.query.filter_by(user_id=user_id).first()
    if not user:
        abort(400, 'User not found.')
    return user

def get_party_info(party_id):
    party = Party.query.filter_by(party_id=party_id).first()
    if not party:
        abort(400, 'Party not found.')
    return party

def get_next_user_party(user_id):
    user = UserProfile.query.filter_by(user_id=user_id).first()
    if not user:
        abort(400, 'User not found.')
        
    # 获取该用户参加的所有Party，并按时间升序排序
    user_parties = Party.query.filter(Party.seat_list.contains(str(user_id))).order_by(Party.time.asc()).all()

    for party in user_parties:
        # time字段是字符串，需将其转换为datetime对象进行比较
        party_time = datetime.strptime(party.time, '%Y-%m-%d %H:%M:%S')
        if party_time > datetime.now():
            return party

    return None  # 没有找到Party,返回None

def send_friend_request(sender_id, receiver_id):
    existing_request = Friendship.query.filter_by(user_id=sender_id, friend_id=receiver_id).first()
    if existing_request:
        raise ValueError('Friend request already sent.')

    try:
        friend_request = Friendship(user_id=sender_id, friend_id=receiver_id)
        db.session.add(friend_request)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        raise e


def accept_friend_request(sender_id, receiver_id):
    existing_request = Friendship.query.filter_by(user_id=sender_id, friend_id=receiver_id).first()
    if not existing_request:
        raise ValueError('No friend request to accept.')

    try:
        # Create a mutual friendship record for the receiver
        mutual_friendship = Friendship(user_id=receiver_id, friend_id=sender_id)
        db.session.add(mutual_friendship)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        raise e

def delete_friend(user_id, friend_id):
    relation_1 = Friendship.query.filter_by(user_id=user_id, friend_id=friend_id).first()
    relation_2 = Friendship.query.filter_by(user_id=friend_id, friend_id=user_id).first()
    if not relation_1 or not relation_2:
        abort(400, 'Friendship does not exist.')
        
    db.session.delete(relation_1)
    db.session.delete(relation_2)
    db.session.commit()

def are_friends(user_id_1, user_id_2):
    relation_1 = Friendship.query.filter_by(user_id=user_id_1, friend_id=user_id_2).first()
    relation_2 = Friendship.query.filter_by(user_id=user_id_2, friend_id=user_id_1).first()
    return relation_1 is not None and relation_2 is not None

def common_friends(user_id_1, user_id_2):
    subquery_1 = db.session.query(Friendship.friend_id).filter(
        Friendship.user_id == user_id_1,
        Friendship.friend_id.in_(
            db.session.query(Friendship.user_id).filter(Friendship.friend_id == user_id_1)
        )
    )
    
    subquery_2 = db.session.query(Friendship.friend_id).filter(
        Friendship.user_id == user_id_2,
        Friendship.friend_id.in_(
            db.session.query(Friendship.user_id).filter(Friendship.friend_id == user_id_2)
        )
    )
    
    common_friends_ids = set(subquery_1).intersection(subquery_2)
    return list(common_friends_ids)

def get_received_friend_requests(user_id):
    subquery = db.session.query(Friendship.friend_id).filter(Friendship.user_id == user_id)
    received_requests = db.session.query(Friendship.user_id).filter(
        Friendship.friend_id == user_id,
        ~Friendship.user_id.in_(subquery)
    ).all()
    return [request.user_id for request in received_requests]
