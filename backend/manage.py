import os, datetime

from flask_script import Manager

from app import create_app, db

app = create_app(os.getenv('FLASK_CONFIG') or 'default')
manager = Manager(app)

@app.route('/')
def home():
    return 'LITTENTION'

@manager.command
def init_db():
    """Initialize the database."""
    db.drop_all()
    db.create_all()
    db.session.commit()

if __name__ == '__main__': 
    manager.run()