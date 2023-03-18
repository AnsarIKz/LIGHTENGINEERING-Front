import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api";

// product
// const baseURL = "http://opory.kz/api";

const API = axios.create({
  baseURL,
});

export default API;
