from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from models import db, Product, Category
import json

app = Flask(__name__)
CORS(app)

app.config.from_object(Config)

@app.route('/products', methods=['GET'])
def get_all_products():
    try:
        # Prepare the list of products with their details
        product_list = []

        # Add first product information to the list
        product_info = {
            "id": 1,
            "name": "כיסא",
            "catagory": "chairs",
            "description": "4 legged chair",
            "location": "herzliya",
            "picture": "something.com",
            "date": "30.04.2025"
        }
        product_list.append(product_info)

        # Add second product information to the list
        product_info = {
            "id": 2,
            "name": "כיסא",
            "catagory": "chairs",
            "description": "4 legged chair",
            "location": "herzliya",
            "picture": "something.com",
            "date": "30.04.2025"
        }
        product_list.append(product_info)

        # Return the list of products as JSON
        return jsonify(product_list)

    except Exception as e:
        # Handle exceptions and return an error message
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # Start the Flask server
    app.run(debug=True)
