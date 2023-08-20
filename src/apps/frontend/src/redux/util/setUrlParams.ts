import {IParam} from '../entity/params.interface';

export const setUrlWithParams = (url: string, params: IParam[]) => {
  const paramsFilter = params.filter(param => param.checked === true);
  let paramObj = {};
  paramsFilter.forEach(param => {
    paramObj = {...paramObj, [param.name as string]: param.value};
  });
  const search = new URLSearchParams(paramObj).toString();
  return search !== '' ? url.replace(/(\?.*)?$/, '?' + search) : url.replace(/\?.*/, '');
};
