import axios, { AxiosInstance } from 'axios';

export const baseURL: string = 'https://image.tmdb.org/t/p/original/';

export const requestApi: AxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'ko-KR',
  },
});
