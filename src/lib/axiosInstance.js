// utils/axiosConfig.js
import axios from 'axios';

// Create a new Axios instance
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // You can set the baseURL if all your requests are going to the same backend
    timeout: 5000, // Example timeout
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Retrieve authToken from cookies
        const authToken = document.cookie.split('; ').reduce((acc, current) => {
            const [key, value] = current.split('=');
            acc[key] = value;
            return acc;
        }, {})['authtoken'];

        // If authToken exists, set it in the headers
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }

        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // You can modify the response data here
        return response;
    },
    (error) => {
        // Handle response errors
        return Promise.reject(error);
    }
);

export default axiosInstance;
