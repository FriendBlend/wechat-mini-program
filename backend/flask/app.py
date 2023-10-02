# app.py
from flask import Flask
from models import db
from views import app

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'

db.init_app(app)

if __name__ == '__main__':
    db.create_all(app=app)
    app.run(debug=True, port=5000)
