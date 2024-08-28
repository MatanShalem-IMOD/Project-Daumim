import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://api.example.com', // Replace with your API base URL
    timeout: 5000, // Set the timeout for requests (in milliseconds)
    headers: {
        'Content-Type': 'application/json',
        // Set the content type for requests
        // Add any other headers you need
    },
});