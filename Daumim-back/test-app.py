import unittest
from unittest.mock import patch, MagicMock
from app import app

class TestProductAPI(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    @patch('app.get_db_connection')
    @patch('app.fetch_picture_from_cosmos')
    def test_get_all_products_success(self, mock_fetch_picture, mock_db_connection):
        # Mock the PostgreSQL connection and cursor
        mock_connection = MagicMock()
        mock_cursor = MagicMock()
        
        mock_db_connection.return_value = mock_connection
        mock_connection.cursor.return_value = mock_cursor

        # Mock the database rows returned
        mock_cursor.fetchall.return_value = [
            (1, "Test Product 1", "Category 1", "Description 1", "Location 1", "http://test-url.com/picture1.jpg", "2024-08-28"),
            (2, "Test Product 2", "Category 2", "Description 2", "Location 2", "http://test-url.com/picture2.jpg", "2024-08-29")
        ]
        
        # Mock fetching the picture from Cosmos DB
        mock_fetch_picture.return_value = b"fake_image_data"

        response = self.app.get('/products')
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertEqual(len(data), 2)
        self.assertIn("Test Product 1", data[0]['product_name'])
        self.assertIn("fake_image_data", data[0]['picture_data'].decode('latin1'))
        self.assertIn("Category 1", data[0]['category_name'])
        self.assertIn("Location 1", data[0]['location_name'])

    @patch('app.get_db_connection')
    def test_get_all_products_no_data(self, mock_db_connection):
        # Mock the PostgreSQL connection and cursor
        mock_connection = MagicMock()
        mock_cursor = MagicMock()
        
        mock_db_connection.return_value = mock_connection
        mock_connection.cursor.return_value = mock_cursor

        # Mock no rows returned
        mock_cursor.fetchall.return_value = []
        
        response = self.app.get('/products')
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertEqual(len(data), 0)

if __name__ == '__main__':
    unittest.main()
