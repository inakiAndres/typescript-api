import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";

export async function sendRequest(
  method: string,
  url: string,
  headers?: AxiosRequestHeaders,
  body?: object,
  queryParams?: object
): Promise<any> {
  const instance: AxiosInstance = axios.create();

  try {
    return instance.request({
      method,
      url,
      headers,
      data: body,
      params: {
        ...queryParams,
      },
    });
  } catch (error) {
    return error;
  }
}
