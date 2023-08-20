export interface IParam {
  id?: string;
  checked?: boolean;
  name?: string;
  value?: string;
}

export interface IUrlParams {
  params: IParam[];
  url: string;
  searchPlain?: string;
}
