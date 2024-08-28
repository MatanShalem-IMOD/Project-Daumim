from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS
from config import Config
from models import db, Product, Category, Location
import psycopg2
import os
from datetime import datetime, timedelta

app = Flask(__name__)

CORS(app)

# Load the configuration from config.py
app.config.from_object(Config)

# Initialize the database with the Flask app
db.init_app(app)

with app.app_context():
    db.create_all()

def get_db_connection():
    # Establish a connection using psycopg2 with the values from config.py
    connection = psycopg2.connect(
        dbname="postgres",         # Use the database name
        user="team3",              # Use your PostgreSQL username
        password="Hashlama3",      # Use your PostgreSQL password
        host="team3-pg.postgres.database.azure.com",  # Azure PostgreSQL host
        port="5432",               # Default PostgreSQL port
        sslmode="require"          # Enforce SSL connection
    )
    connection.set_client_encoding('UTF8')
    return connection

@app.route('/locations', methods=['GET'])
def get_all_cities():
    try:
        # Connect to the PostgreSQL database
        connection = get_db_connection()
        cursor = connection.cursor()

        # Execute a SQL query to fetch product details, including the encoded image text
        cursor.execute('''
            SELECT * FROM doum_schema.locations 
        ''')
        locations = cursor.fetchall()

        # Close cursor and connection
        cursor.close()
        connection.close()

        # Process the results into JSON format
        location_list = [
            {
                "id": location[0],
                "name": location[1],
            }
            for location in locations
        ]
        
        return jsonify(location_list)

    except Exception as e:
        # Return an error message in case of exception
        return jsonify({"error": str(e)}), 500


@app.route('/categories', methods=['GET'])
def get_all_categories():
    try:
        # Connect to the PostgreSQL database
        connection = get_db_connection()
        cursor = connection.cursor()

        # Execute a SQL query to fetch product details, including the encoded image text
        cursor.execute('''
            SELECT * FROM doum_schema.categories 
        ''')
        categories = cursor.fetchall()

        # Close cursor and connection
        cursor.close()
        connection.close()

        # Process the results into JSON format
        category_list = [
            {
                "id": category[0],
                "name": category[1],
            }
            for category in categories
        ]
    
        return jsonify(category_list)

    except Exception as e:
        # Return an error message in case of exception
        return jsonify({"error": str(e)}), 500


def get_category_id(category_name):
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute('SELECT category_id FROM doum_schema.categories WHERE category_name = %s', (category_name,))
    result = cursor.fetchone()
    cursor.close()
    connection.close()
    return result[0] if result else None

def get_location_id(location_name):
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute('SELECT location_id FROM doum_schema.locations WHERE location_name = %s', (location_name,))
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
            DELETE FROM doum_schema.products
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

        # Execute a SQL query to fetch product details, including the encoded image text
        cursor.execute('''
            SELECT p.product_id, p.product_name, c.category_name, p.description, 
             l.location_name, pics.encoded_picture, p.date_of_publication
            FROM doum_schema.products p
        LEFT JOIN doum_schema.categories c ON p.category_id = c.category_id
        LEFT JOIN doum_schema.locations l ON p.location_id = l.location_id
        LEFT JOIN doum_schema.pictures pics ON p.picture_id = pics.picture_id;
        ''')
        products = cursor.fetchall()

        # Close cursor and connection
        cursor.close()
        connection.close()

        # Process the results into JSON format
        product_list = [
            {
                "id": product[0],
                "name": product[1],
                "category": product[2],
                "description": product[3],
                "location": product[4],
                "picture": product[5],
                "date": product[6]
            }
            for product in products
        ]

        return jsonify(product_list)

    except Exception as e:
        # Return an error message in case of exception
        return jsonify({"error": str(e)}), 500

@app.route('/product', methods=['POST'])
def add_product():
    try:
        # Get the data per category
        data = request.get_json()
        product_name = data.get('name')
        category_name = data.get('category')
        description = data.get('description')
        location_name = data.get('location')
        encoded_picture = data.get('picture')  # Assume this is provided as input
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

        # Insert the encoded picture first to get the picture ID
        insert_picture_query = '''
            INSERT INTO doum_schema.pictures (encoded_picture)
            VALUES (%s)
            RETURNING picture_id
        '''
        cursor.execute(insert_picture_query, (encoded_picture,))
        picture_id = cursor.fetchone()[0]

        # SQL query to insert a new product
        insert_product_query = '''
            INSERT INTO doum_schema.products (product_name, category_id, description, location_id, picture_id, date_of_publication)
            VALUES (%s, %s, %s, %s, %s, %s)
            RETURNING product_id
        '''
        cursor.execute(insert_product_query, (product_name, category_id, description, location_id, picture_id, date_of_publication))
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
