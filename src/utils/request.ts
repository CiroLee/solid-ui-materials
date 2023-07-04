import { stringifyURLParams } from 'fe-gear';
// simple request based on fetch
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'get' | 'post' | 'put' | 'delete';
interface RequestOptions {
  method?: Method;
  headers?: Record<string, any>;
  body?: Record<string, any>;
  params?: Record<string, any>;
}
export default async function request<T>(url: string, options: RequestOptions = {}): Promise<T> {
  const method = options?.method;
  let params = '';
  let body = '';
  if (method?.toLowerCase() === 'get' && options.params) {
    params = '?' + stringifyURLParams(options.params);
  }
  body = JSON.stringify(options.body);
  const response = await fetch(url + params, { ...options, body });
  if (response.status < 400) {
    return response.json();
  } else {
    return Promise.reject({
      status: response.status,
      msg: response.statusText,
    });
  }
}
