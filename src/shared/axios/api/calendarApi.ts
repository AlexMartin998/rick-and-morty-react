import axios from 'axios';

import { getEnvVariables } from '@/shared/utils';

const { VITE_API_URL } = getEnvVariables();

export const rickAxiosApi = axios.create({
  baseURL: VITE_API_URL,
});
