import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Replace with your API base URL
  timeout: 5000, // Set the timeout for requests (in milliseconds)
  headers: {
    "Content-Type": "application/json",
  },
});
