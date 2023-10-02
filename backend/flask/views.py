# views.py
from flask import Flask, request, jsonify
from models import db
import services

app = Flask(__name__)

@app.route('/create_user', methods=['POST'])
def create_user():
    data = request.json
    uid = services.create_user(data)
    return jsonify(success=True, message='成功创建用户', user_id=uid)

@app.route('/add_party', methods=['POST'])
def add_party():
    data = request.json
    party_id = services.add_party(data)
    return jsonify(success=True, message='成功录入组局信息', party_id=party_id)

@app.route('/join_party', methods=['POST'])
def join_party():
    data = request.json
    services.join_party(data)
    return jsonify(success=True, message='Joined party successfully.')

@app.route('/exit_party', methods=['POST'])
def exit_party():
    data = request.json
    services.exit_party(data)
    return jsonify(success=True, message='Exited party successfully.')

@app.route('/get_user_info', methods=['GET'])
def get_user_info():
    user_id = request.args.get('user_id')
    if not user_id:
        return jsonify(success=False, message='user_id is required.')
    user = services.get_user_info(int(user_id))
    user_data = user.to_dict() 
    return jsonify(success=True, user=user_data)

@app.route('/get_party_info', methods=['GET'])
def get_party_info():
    party_id = request.args.get('party_id')
    if not party_id:
        return jsonify(success=False, message='party_id is required.')
    party = services.get_party_info(int(party_id))
    party_data = party.to_dict()
    return jsonify(success=True, party=party_data)

# views.py
@app.route('/get_next_party', methods=['GET'])
def get_next_party():
    user_id = request.args.get('user_id')
    if not user_id:
        return jsonify(success=False, message='user_id is required.')
        
    next_party = services.get_next_user_party(int(user_id))
    if next_party:
        return jsonify(success=True, next_party=next_party.to_dict())
    else:
        return jsonify(success=True, message='No upcoming parties found for this user.', next_party=None)

@app.route('/send_friend_request', methods=['POST'])
def send_friend_request():
    data = request.json
    sender_id = data.get('sender_id')
    receiver_id = data.get('receiver_id')
    
    try:
        services.send_friend_request(sender_id, receiver_id)
        return jsonify(success=True, message='Friend request sent successfully.')
    except Exception as err:
        return jsonify(success=False, message=str(err))


@app.route('/accept_friend_request', methods=['POST'])
def accept_friend_request():
    data = request.json
    sender_id = data.get('sender_id')  # Original sender of the friend request
    receiver_id = data.get('receiver_id')  # Person accepting the friend request
    
    try:
        services.accept_friend_request(sender_id, receiver_id)
        return jsonify(success=True, message='Friend request accepted successfully.')
    except Exception as err:
        return jsonify(success=False, message=str(err))

@app.route('/delete_friend', methods=['POST'])
def delete_friend():
    data = request.json
    user_id = data.get('user_id')
    friend_id = data.get('friend_id')
    
    if not user_id or not friend_id:
        return jsonify(success=False, message='user_id and friend_id are required.')

    try:
        services.delete_friend(user_id, friend_id)
        return jsonify(success=True, message='Friend deleted successfully.')
    except Exception as err:
        return jsonify(success=False, message=str(err))

@app.route('/are_friends', methods=['GET'])
def are_friends():
    user_id_1 = request.args.get('user_id_1')
    user_id_2 = request.args.get('user_id_2')
    
    if not user_id_1 or not user_id_2:
        return jsonify(success=False, message='user_id_1 and user_id_2 are required.')
    
    try:
        are_friends = services.are_friends(user_id_1, user_id_2)
        return jsonify(success=True, are_friends=are_friends)
    except Exception as err:
        return jsonify(success=False, message=str(err))

@app.route('/common_friends', methods=['GET'])
def common_friends():
    user_id_1 = request.args.get('user_id_1')
    user_id_2 = request.args.get('user_id_2')
    
    if not user_id_1 or not user_id_2:
        return jsonify(success=False, message='user_id_1 and user_id_2 are required.')
    
    try:
        common_friends_list = services.common_friends(user_id_1, user_id_2)
        return jsonify(success=True, common_friends=common_friends_list)
    except Exception as err:
        return jsonify(success=False, message=str(err))
    
@app.route('/get_received_friend_requests', methods=['GET'])
def get_received_friend_requests():
    user_id = request.args.get('user_id')
    
    if not user_id:
        return jsonify(success=False, message='user_id is required.')
    
    try:
        received_requests_list = services.get_received_friend_requests(user_id)
        return jsonify(success=True, received_requests=received_requests_list)
    except Exception as err:
        return jsonify(success=False, message=str(err))

if __name__ == '__main__':
    app.run(debug=True)
