import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const artistRequests = {
  get: (url: string) => instance.get<Artist>(url).then(responseBody),
};
