import axios from "axios";
import { baseUrl } from "./urls";

export const authHost = axios.create({
    baseURL : `${baseUrl}`

})

authHost.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("accessToken");
  
      if (accessToken) {
        config.headers["x-auth-token"] = accessToken;
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  )