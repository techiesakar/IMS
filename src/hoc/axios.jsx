import axios from "axios";

const instance = axios.create({
  baseURL: "https://hubitbackendstudentltd.onrender.com",
});

instance.defaults.headers.common["Authorization"] = "Brearer" + "token";
instance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: "hgkahgkahgkaga",
    };
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
