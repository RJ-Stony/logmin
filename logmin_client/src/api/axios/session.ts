import axios from "axios";
import { BASE_URL } from "./base";

const sessionApi = axios.create({
  baseURL: `${BASE_URL}/session`,
  withCredentials: true, // 세션 쿠키 필요
});

export default sessionApi;
