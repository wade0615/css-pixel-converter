// env settings from going_merry
// const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL;
const baseUrl = 'https://samples.example.com';

import axios from 'axios';
// import { Message } from 'element-ui';

const get = async (url, language) => {
  const httpClient = axios.create();
  try {
    httpClient.defaults.timeout = 10000;
    return await httpClient.get(
        url, {headers: { "X-Request-Language" : language}}
      ).then((response) => {
        // Message.success("Success");
        return response;
      });
  } catch (error) {
    // Message.error(error);
    return Promise.reject(error);
  }
}

export { baseUrl, get };
