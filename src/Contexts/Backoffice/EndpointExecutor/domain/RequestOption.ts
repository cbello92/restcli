/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRequestOption {
  body?: any;
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

export interface IRequestOptionExtra extends IRequestOption {
  url?: string;
  method?: string;
}
