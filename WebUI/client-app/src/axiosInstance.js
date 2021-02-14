import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env === "PRODUCTION"
      ? process.env.API_URL
      : "https://localhost:5001/api",
  withCredentials: true
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (localStorage.user) {
      const { token } = JSON.parse(localStorage.user);
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
