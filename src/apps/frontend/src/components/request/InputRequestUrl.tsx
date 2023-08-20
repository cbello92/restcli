import React from 'react';
import {InputBase} from '@mui/material';
import {getParamsQuery, getUrlObject, isValidUrl} from '../request-options/url/urlHelper';
import {setUrlUi, transformParamsFromObject} from '../../redux/features/urlParamSlice';
import {useDispatch} from 'react-redux';
import {setUrlEndpoint} from '../../redux/features/requestOptionSlice';
import {useAppSelector} from '../../redux/hooks';

const InputRequestUrl = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const urlUi = useAppSelector(state => state.urlParamReducer.value.url);

  const handleSetUrl = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = urlUi;
    }
  }, [urlUi]);

  return (
    <InputBase
      inputRef={inputRef}
      onChange={handleSetUrl}
      sx={{ml: 1, flex: 1}}
      placeholder="Enter your request"
      inputProps={{'aria-label': 'write your request'}}
      spellCheck={false}
    />
  );
};

export default InputRequestUrl;
