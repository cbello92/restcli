import {getParamsQuery, getUrlObject, isValidUrl} from '../utils/url/urlHelper';
import {setUrlUi, transformParamsFromObject} from '../redux/features/urlParamSlice';
import {useAppSelector} from '../redux/hooks';
import {ChangeEvent, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {setUrlEndpoint} from '../redux/features/requestOptionSlice';

export const useUrl = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const urlUi = useAppSelector(state => state.urlParamReducer.value.url);

  const handleSetUrl = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const url = e.target.value;
    if (isValidUrl(url)) {
      const {search} = getUrlObject(url);
      const queryParam = getParamsQuery(search);
      dispatch(transformParamsFromObject(queryParam));
    } else {
      dispatch(transformParamsFromObject({}));
    }
    dispatch(setUrlUi(url));
    dispatch(setUrlEndpoint(url.split('?')[0]));
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = urlUi;
    }
  }, [urlUi]);

  return {handleSetUrl, inputRef};
};
