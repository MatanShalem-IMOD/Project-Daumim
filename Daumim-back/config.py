import os

class Config:
    SECRET_KEY = 'your_secret_key'
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Avoids SQLAlchemy event notification overhead

    # Default configuration for the local PostgreSQL database
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'postgresql+psycopg2://team3:Hashlama3@team3-pg.postgres.database.azure.com:5432/postgres'

# Config settings for other environments can be defined similarly
class DevelopmentConfig(Config):
    DEBUG = True

class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'

class ProductionConfig(Config):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'postgresql+psycopg2://team3:Hashlama3@team3-pg.postgres.database.azure.com:5432/postgres'
