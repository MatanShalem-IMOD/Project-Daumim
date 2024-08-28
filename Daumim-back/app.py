from flask import Flask, jsonify
from config import Config
from models import db, Product, Category, Location
import psycopg2
import os

app = Flask(__name__)

# Load the configuration from config.py
app.config.from_object(Config)

# Initialize the database with the Flask app
db.init_app(app)

@app.before_first_request
def create_tables():
    db.create_all()

def get_db_connection():
    # Establish a connection using psycopg2 with the values from config.py
    connection = psycopg2.connect(
        dbname="sample-db",         # Use the database name
        user="postgres",        # Use your PostgreSQL username
        password="Qazxsw2!q",  # Use your PostgreSQL password
        host="localhost",           # Host is localhost for local DB
        port="5432"                 # Default PostgreSQL port
    )
    return connection

@app.route('/products', methods=['GET'])
def get_all_products():
    try:
        # Connect to the PostgreSQL database
        connection = get_db_connection()
        cursor = connection.cursor()

        # Execute a SQL query to fetch data
        cursor.execute('''
            SELECT p.product_id, p.product_name, c.category_name, p.description, 
                   l.location_name, p.picture, p.end_list_date
            FROM product p
            JOIN category c ON p.category_id = c.category_id
            JOIN location l ON p.location_id = l.location_id
        ''')
        products = cursor.fetchall()

        # Close cursor and connection
        cursor.close()
        connection.close()

        # Process the results into JSON format
        product_list = [
            {
                "product_id": product[0],
                "product_name": product[1],
                "category_name": product[2],
                "description": product[3],
                "location_name": product[4],
                "picture_url": product[5],
                "end_list_date": product[6]
            }
            for product in products
        ]

        return jsonify(product_list)

    except Exception as e:
        # Return an error message in case of exception
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
