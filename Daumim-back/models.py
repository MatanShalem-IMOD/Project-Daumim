from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Category(db.Model):
    __tablename__ = 'categories'
    
    category_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    category_name = db.Column(db.String, nullable=False)

class Location(db.Model):
    __tablename__ = 'locations'
    
    location_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    location_name = db.Column(db.String, nullable=False)

class Product(db.Model):
    __tablename__ = 'products'
    
    product_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    product_name = db.Column(db.String, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.category_id'))
    description = db.Column(db.String)
    location_id = db.Column(db.Integer, db.ForeignKey('locations.location_id'))
    picture = db.Column(db.String)  # URL to picture stored
    date_of_publication = db.Column(db.DateTime)
    
    category = db.relationship("Category", backref="products")
    location = db.relationship("Location", backref="products")
