import axios from "axios";

const token =
  typeof window !== "undefined" && localStorage.user
    ? JSON.parse(localStorage.user)?.token
    : "";
export default axios.create({
  baseURL:
    process.env === "PRODUCTION"
      ? process.env.API_URL
      : "https://localhost:5001/api",
  headers: {
    Authorization: `Bearer ${token}`
  }
});
