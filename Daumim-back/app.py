from flask import Flask, jsonify
from config import Config
from models import db, Product, Category, Location
import psycopg2
import os

app = Flask(__name__)

# Check if we're in a testing environment
if os.environ.get('FLASK_ENV') == 'testing':
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'  # Use in-memory SQLite for testing
else:
    app.config.from_object(Config)

db.init_app(app)

@app.before_first_request
def create_tables():
    # Only create tables if not in testing mode
    db.create_all()

def get_db_connection():
    # Set up the PostgreSQL connection using psycopg2
    connection = psycopg2.connect(
        dbname="your_db_name",
        user="your_db_user",
        password="your_db_password",
        host="your_db_host",
        port="your_db_port"
    )
    return connection

@app.route('/products', methods=['GET'])
def get_all_products():
    try:
        # Establish the connection to the PostgreSQL database
        connection = get_db_connection()
        cursor = connection.cursor()

        # SQL query to fetch product details along with category and location names
        cursor.execute('''
            SELECT p.product_id, p.product_name, c.category_name, p.description, 
                   l.location_name, p.picture, p.end_list_date
            FROM product p
            JOIN category c ON p.category_id = c.category_id
            JOIN location l ON p.location_id = l.location_id
        ''')
        products = cursor.fetchall()

        # Close the cursor and connection
        cursor.close()
        connection.close()

        # Prepare the list of products with their details
        product_list = []
        for product in products:
            product_id, product_name, category_name, description, location_name, picture_url, end_list_date = product

            # Add product information to the list
            product_info = {
                "product_id": product_id,
                "product_name": product_name,
                "category_name": category_name,
                "description": description,
                "location_name": location_name,
                "picture_url": picture_url,  # Directly returning the picture URL
                "end_list_date": end_list_date
            }
            product_list.append(product_info)

        return jsonify(product_list)

    except Exception as e:
        # Handle exceptions and return an error message
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
