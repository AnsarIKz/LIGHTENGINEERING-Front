import axios from "axios";

// const baseURL = "http://127.0.0.1:8000/api";

// product
const baseURL = "http://138.197.188.194/api";

const API = axios.create({
  baseURL,
});

export default API;
