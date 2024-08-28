import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your_secret_key'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'postgresql+psycopg2://<username>:<password>@<server>/<database>'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    COSMOS_DB_ENDPOINT = os.environ.get('COSMOS_DB_ENDPOINT') or 'https://your-cosmos-db-account.documents.azure.com:443/'
    COSMOS_DB_KEY = os.environ.get('COSMOS_DB_KEY') or 'your_cosmos_db_key'
    COSMOS_DB_CONTAINER = os.environ.get('COSMOS_DB_CONTAINER') or 'your_container_name'
