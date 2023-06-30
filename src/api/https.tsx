import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});



export const makeRequest = async (
    method?: string,
    url?: string,
    data: any = null,
    headers: any = null
  ): Promise<any> => {
  const config = {
    method: method,
    url: url,
    headers: headers,
    data:data
  };

  if (data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  }

  if (data) {
    config.data = data;
  }

  try {
    const response = await api.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};