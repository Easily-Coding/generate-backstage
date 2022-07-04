import axios from "axios";
import { message } from "antd";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.request.use(
  (config) => config,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.code === 200) {
      return response.data;
    } else {
      const msg = response.data.message;
      message.error(msg);
      return { code: 500, data: {} };
    }
  },
  (error) => {
    console.error(`network error:${error.message}`);
    message.error(error.message);
    return Promise.reject(error);
  }
);

export default class Request {
  static get(url: string, params = {}, options = {}) {
    return instance.get(url, { params, ...options });
  }

  static post(url: string, data = {}, options = {}) {
    return instance.post(url, data, { ...options });
  }
}
