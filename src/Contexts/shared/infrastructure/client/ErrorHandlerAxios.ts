import axios, {AxiosError} from 'axios';

interface IErrorBase<T> {
  error: Error | AxiosError<T>;
  type: 'axios-error' | 'stock-error';
}

interface IAxiosError<T> extends IErrorBase<T> {
  error: AxiosError<T>;
  type: 'axios-error';
}
interface IStockError<T> extends IErrorBase<T> {
  error: Error;
  type: 'stock-error';
}

export abstract class ErrorHandlerAxios {
  static catch<T>(err: IAxiosError<T> | IStockError<T>) {
    // eslint-disable-next-line import/no-named-as-default-member
    if (axios.isAxiosError(err)) {
      return {
        statusCode: err?.response?.status,
        message: err?.message,
        type: 'axios-error',
        data: err?.response?.data,
      };
    } else {
      return {
        error: err,
        type: 'stock-error',
      };
    }
  }
}
