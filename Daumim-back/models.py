from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Category(db.Model):
    __tablename__ = 'category'
    
    category_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    category_name = db.Column(db.String, nullable=False)

class Location(db.Model):
    __tablename__ = 'location'
    
    location_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    location_name = db.Column(db.String, nullable=False)

class Product(db.Model):
    __tablename__ = 'product'
    
    product_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    product_name = db.Column(db.String, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.category_id'))
    description = db.Column(db.String)
    location_id = db.Column(db.Integer, db.ForeignKey('location.location_id'))
    picture = db.Column(db.String)  # URL to picture stored
    end_list_date = db.Column(db.DateTime)
    
    category = db.relationship("Category", backref="products")
    location = db.relationship("Location", backref="products")
