import axios from "axios";

const instance = axios.create({
  baseURL: "https://cmsback.e-aribt.com/",
  // baseURL: "http://192.168.1.79:5004/",
  // baseURL: "http://192.168.18.255:5004/",
});

instance.defaults.headers.common["Authorization"] = "Bearer" + "token";
instance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: "token",
    };
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
