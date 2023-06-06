/* eslint-disable @typescript-eslint/no-explicit-any */
export interface OptionsAction {
  body?: any;
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

export interface InputAction extends OptionsAction {
  url?: string;
  method?: string;
}
