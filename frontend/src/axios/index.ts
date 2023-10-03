import axios from 'axios';
import { AuthResponse } from 'src/store/auth/types';
import { MyKnownApiError } from 'src/store/types.common';

export const API_URL = process.env.REACT_APP_BASE_URL;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    const originalRequest = err.config;

    if (err.response.status == 401 && err.config && !err.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(
          `${process.env.REACT_APP_BASE_URL}/user/refresh`,
          { withCredentials: true }
        );
        localStorage.setItem('token', response.data.accessToken);
        return $api.request(originalRequest);
      } catch (error) {
        console.log('Пользователь не авторизован', error);
      }
      throw err;
    }

    if (err.response.status == 400 && err.response.data.message) {
      const errorResponse: MyKnownApiError = { error: err.response.data.message }
      throw errorResponse
    }
  }
);

export default $api;
