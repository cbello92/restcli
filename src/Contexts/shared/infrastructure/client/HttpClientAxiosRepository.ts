import axios from 'axios';
import {HttpClientBaseRepository} from '../../domain/HttpClientBaseRepository';
import {ErrorHandlerAxios} from './ErrorHandlerAxios';

export class HttpClientAxiosRepository implements HttpClientBaseRepository {
  get<V>(url: string, moreConfig?: Record<string, unknown>): Promise<V> {
    return (
      axios
        .get(url, {...moreConfig})
        // eslint-disable-next-line arrow-body-style
        .then(response => {
          console.log(response.status);
          return Promise.resolve(<V>(<unknown>{data: response.data, status: response.status}));
        })
        // eslint-disable-next-line arrow-body-style
        .catch(error => {
          return Promise.reject(ErrorHandlerAxios.catch<unknown>(error));
        })
    );
  }

  post<T, V>(url: string, body: T, moreConfig?: Record<string, unknown>): Promise<V> {
    return (
      axios
        .post(url, body, {...moreConfig})
        // eslint-disable-next-line arrow-body-style
        .then(response => {
          return Promise.resolve(<V>(<unknown>{data: response.data, status: response.status}));
        })
        // eslint-disable-next-line arrow-body-style
        .catch(error => {
          return Promise.reject(ErrorHandlerAxios.catch<unknown>(error));
        })
    );
  }

  patch<T, V>(url: string, body: T, moreConfig?: Record<string, unknown>): Promise<V> {
    return axios
      .patch(url, body, {...moreConfig})
      .then(response => {
        return Promise.resolve(<V>(<unknown>{data: response.data, status: response.status}));
      })
      .catch(error => {
        return Promise.reject(ErrorHandlerAxios.catch<unknown>(error));
      });
  }

  put<V, T>(url: string, body: T, moreConfig?: Record<string, unknown>): Promise<V> {
    return axios
      .put(url, body, {...moreConfig})
      .then(response => {
        console.log('RESPONSE DATA:::', response.data);
        return Promise.resolve(<V>(<unknown>{data: response.data, status: response.status}));
      })
      .catch(error => {
        return Promise.reject(ErrorHandlerAxios.catch<unknown>(error));
      });
  }

  delete<V>(url: string, moreConfig?: Record<string, unknown>): Promise<V> {
    return axios
      .delete(url, {...moreConfig})
      .then(response => {
        return Promise.resolve(<V>(<unknown>{data: response.data, status: response.status}));
      })
      .catch(error => {
        return Promise.reject(ErrorHandlerAxios.catch<unknown>(error));
      });
  }
}
