import { AxiosRequestConfig } from 'axios';

export interface IUser {
  name: string;
  pasword: string;
}

export interface CustomSuccessData<T> {
  status: number;
  statusText: string;
  message?: string;
  data: T;
  [keys: string]: unknown;
}

/**
 *
 */
export interface Request {
  <T>(
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<CustomSuccessData<T>>;
}
