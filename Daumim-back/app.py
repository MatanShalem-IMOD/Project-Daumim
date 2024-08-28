from flask import Flask, jsonify, request
from config import Config
from models import db, Product, Category, Location
import psycopg2
import os
from datetime import datetime, timedelta

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

def get_category_id(category_name):
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute('SELECT category_id FROM category WHERE category_name = %s', (category_name,))
    result = cursor.fetchone()
    cursor.close()
    connection.close()
    return result[0] if result else None

def get_location_id(location_name):
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute('SELECT location_id FROM location WHERE location_name = %s', (location_name,))
    result = cursor.fetchone()
    cursor.close()
    connection.close()
    return result[0] if result else None

def delete_old_products():
    try:
        # Get the current date
        current_date = datetime.now().date()

        # Calculate the date one month ago
        one_month_ago = current_date - timedelta(days=30)

        # Establish the connection to the PostgreSQL database
        connection = get_db_connection()
        cursor = connection.cursor()

        # SQL query to delete products older than one month
        delete_query = '''
            DELETE FROM product
            WHERE date_of_publication < %s
        '''
        cursor.execute(delete_query, (one_month_ago,))

        # Commit the transaction
        connection.commit()

        # Close the cursor and connection
        cursor.close()
        connection.close()

        # Return a success message
        return jsonify({"message": "Old products deleted successfully!"}), 200

    except Exception as e:
        # Handle and return error message
        return jsonify({"error": str(e)}), 500

@app.route('/products', methods=['GET'])
def get_all_products():
    try:
        # Connect to the PostgreSQL database
        connection = get_db_connection()
        cursor = connection.cursor()

        # Execute a SQL query to fetch data
        cursor.execute('''
            SELECT p.product_id, p.product_name, c.category_name, p.description, 
                   l.location_name, p.picture, p.date_of_publication
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
                "date_of_publication": product[6]
            }
            for product in products
        ]

        return jsonify(product_list)

    except Exception as e:
        # Return an error message in case of exception
        return jsonify({"error": str(e)}), 500

@app.route('/products',methods = ['POST'])
def add_product():
    try:
        # Get the data per category 
        data = request.get_json()
        product_name = data.get('product_name')
        category_name = data.get('category_name')
        description = data.get('description')
        location_name = data.get('location_name')
        picture_url = data.get('picture_url')
        date_of_publication = datetime.now().date()

         # Get category ID based on category name
        category_id = get_category_id(category_name)
        if category_id is None:
            return jsonify({"error": f"Category '{category_name}' not found"}), 400

        # Get location ID based on location name
        location_id = get_location_id(location_name)
        if location_id is None:
            return jsonify({"error": f"Location '{location_name}' not found"}), 400

        # Establish the connection to the PostgreSQL database
        connection = get_db_connection()
        cursor = connection.cursor()

        # SQL query to insert a new product
        insert_query = '''
            INSERT INTO product (product_name, category_id, description, location_id, picture, date_of_publication)
            VALUES (%s, %s, %s, %s, %s, %s)
            RETURNING product_id
        '''
        cursor.execute(insert_query, (product_name, category_id, description, location_id, picture_url, date_of_publication))
        product_id = cursor.fetchone()[0]

        # Commit the transaction
        connection.commit()

        # Close the cursor and connection
        cursor.close()
        connection.close()

        # Return a success message with the new product ID
        return jsonify({
            "message": "Product added successfully!",
            "product_id": product_id
        }), 201

    except Exception as e:
        # Handle and return error message
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
