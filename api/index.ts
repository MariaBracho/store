import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: { "X-Custom-Header": "foobar" }
});

export default instance;
