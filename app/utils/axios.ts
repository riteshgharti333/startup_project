// utils/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000",
  timeout: 30000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(
      `Making ${config.method?.toUpperCase()} request to: ${config.url}`,
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response:", response.data);
    return response;
  },
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error("Server error:", error.response.data);
      console.error("Status:", error.response.status);
      throw new Error(error.response.data.message || "Server error occurred");
    } else if (error.request) {
      // Request was made but no response
      console.error("No response from server:", error.request);
      throw new Error(
        "Cannot connect to server. Please check if backend is running.",
      );
    } else {
      // Something else happened
      console.error("Error:", error.message);
      throw error;
    }
  },
);

export default axiosInstance;
