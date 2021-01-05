import axios from "axios";

export default axios.create({
  baseURL:
    process.env === "PRODUCTION"
      ? process.env.API_URL
      : "https://localhost:5001/api",
});
