from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://Aayush:Ajay@1968@localhost/inventory_db'
    app.config['JWT_SECRET_KEY'] ='5f76603e8d8362ad8de0c32ccc278bf8bf9bde8dd7a2407f9ca0c2eadd1e7063'

    db.init_app(app)
    JWTManager(app)

    with app.app_context():
        from . import routes
        db.create_all()

    return app
