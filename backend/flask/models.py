# models.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Party(db.Model):
    party_id = db.Column(db.BigInteger, primary_key=True, unique=True)
    party_name = db.Column(db.String(80))
    member_num = db.Column(db.Integer)
    seat_list = db.Column(db.String(200))
    time = db.Column(db.String(50))
    location = db.Column(db.String(100))
    cost = db.Column(db.String(50))
    description = db.Column(db.String(200))
    type = db.Column(db.String(50))

class UserProfile(db.Model):
    user_id = db.Column(db.BigInteger, primary_key=True, unique=True)
    avatar = db.Column(db.String(200))
    name = db.Column(db.String(50))
    age = db.Column(db.Integer)
    school = db.Column(db.String(100))
    photos = db.Column(db.String(500))  # 保存图片URL，用逗号分隔
    description = db.Column(db.String(200))
    room_id_list = db.Column(db.String(500))  # 房间ID，用逗号分隔
    skin_id_list = db.Column(db.String(200))  # 皮肤ID，用逗号分隔

class Friendship(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.BigInteger, db.ForeignKey('user_profile.user_id'), nullable=False)
    friend_id = db.Column(db.BigInteger, db.ForeignKey('user_profile.user_id'), nullable=False)
