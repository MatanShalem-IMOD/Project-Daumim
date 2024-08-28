from flask import Flask, jsonify, request
from config import Config
from models import db, Product
import requests
import psycopg2

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)

@app.before_first_request
def create_tables():
    db.create_all()

# Function to connect to PostgreSQL using psycopg2-binary
def get_db_connection():
    connection = psycopg2.connect(
        dbname="your_db_name",
        user="your_db_user",
        password="your_db_password",
        host="your_db_host",
        port="your_db_port"
    )
    return connection

# Function to fetch the picture from Cosmos DB
def fetch_picture_from_cosmos(picture_url):
    try:
        response = requests.get(picture_url)
        if response.status_code == 200:
            return response.content  # Return the binary content of the image
        else:
            return None
    except Exception as e:
        print(f"Error fetching image: {e}")
        return None

@app.route('/product/<int:product_id>', methods=['GET'])
def get_product(product_id):
    try:
        # Fetch product data from PostgreSQL using psycopg2-binary
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute('SELECT * FROM product WHERE product_id = %s', (product_id,))
        product_row = cursor.fetchone()
        cursor.close()
        connection.close()

        if product_row:
            product_id, product_name, category_id, description, location_id, picture_url, end_list_date = product_row
            # Fetch the picture using the Cosmos DB URL
            picture_data = fetch_picture_from_cosmos(picture_url)
            
            return jsonify({
                "product_id": product_id,
                "product_name": product_name,
                "category_id": category_id,
                "description": description,
                "location_id": location_id,
                "picture_url": picture_url,
                "end_list_date": end_list_date,
                "picture_data": picture_data  # Base64 encode this if needed for frontend display
            })
        else:
            return jsonify({"error": "Product not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
