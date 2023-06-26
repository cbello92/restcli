import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SendIcon from '@mui/icons-material/Send';
import HttpVerbs from './HttpVerbs';
import {Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {setUrlEndpoint} from '../../redux/features/requestOptionSlice';
import {useAppSelector} from '../../redux/hooks';
import {trpc} from '../../utils/trpc';
import {setEditorValue} from '../../redux/features/editorSlice';
import {setActiveRequest, setLoadingResult, setStatusRequest} from '../../redux/features/requestResultSlice';
import {ErrorRequest} from '../../entity/ErrorRequest';
import {setUrlUi, transformParamsFromObject} from '../../redux/features/urlParamSlice';
import {getParamsQuery, getUrlObject, isValidUrl} from '../request-options/url/urlHelper';

export default function Request() {
  const dispatch = useDispatch();
  const optionsAction = useAppSelector(state => state.optionActionReducer.value);
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

  const handleSendRequest = async () => {
    if (optionsAction.url && isValidUrl(optionsAction.url)) {
      try {
        console.log('REQUEST_OPTIONS:::', optionsAction);
        dispatch(setStatusRequest(null));
        dispatch(setActiveRequest());
        dispatch(setLoadingResult());
        const {data, status} = await trpc.endpointExecutor.endpointExecutor.mutate(optionsAction);
        dispatch(setEditorValue(JSON.stringify(data, null, 2)));
        dispatch(setStatusRequest(status as number));
        console.log('SEND_REQUEST:::', data);
      } catch (error) {
        const errorCustom = error as unknown as ErrorRequest;
        console.log(errorCustom?.data);
        console.log(errorCustom?.data?.cause);
        dispatch(setStatusRequest((errorCustom?.data?.cause.statusCode as number) || 500));
        dispatch(
          setEditorValue(JSON.stringify(errorCustom.data?.cause?.data ?? errorCustom.data?.cause?.message, null, 2)),
        );
      } finally {
        dispatch(setLoadingResult());
      }
    }
  };

  const handleClick = async () => {
    await handleSendRequest();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendRequest();
  };

  return (
    <Paper
      variant="outlined"
      component="form"
      square={true}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        background: '#231f1f',
        borderRadius: 3,
      }}
      style={{padding: '8px'}}
      onSubmit={handleSubmit}
    >
      <HttpVerbs />
      <InputBase
        value={urlUi}
        onChange={handleSetUrl}
        sx={{ml: 1, flex: 1}}
        placeholder="Enter your request"
        inputProps={{'aria-label': 'write your request'}}
        spellCheck={false}
      />
      <Button variant="outlined" endIcon={<SendIcon />} onClick={handleClick}>
        Send
      </Button>
    </Paper>
  );
}
