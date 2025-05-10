import axios from "axios";

   

// Creating new axios instance
export const axiosInstance = axios.create({
  withCredentials: true, // Include credentials in requests
  baseURL: "http://localhost:5000", // Backend URL
});