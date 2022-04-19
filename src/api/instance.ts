import axios from "axios";
import { appId, baseUrl } from "../constants/keys";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: appId || "",
  },
});

export default api;
