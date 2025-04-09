import axios from "axios";
import { BASE_URL } from "./base";

const jwtApi = axios.create({
  baseURL: `${BASE_URL}/jwt`,
  withCredentials: false, // 쿠키 사용 안함
});

jwtApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwtToken"); // 또는 secure storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default jwtApi;
