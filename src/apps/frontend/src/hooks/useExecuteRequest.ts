import {FormEvent} from 'react';
import {useDispatch} from 'react-redux';
import {trpc} from './../utils/trpc';
import {setActiveRequest, setLoadingResult, setStatusRequest} from '../redux/features/requestResultSlice';
import {useAppSelector} from './../redux/hooks';
import {setEditorValue} from '../redux/features/editorSlice';
import {ErrorRequest} from '../entity/ErrorRequest';
import {isValidUrl} from '../utils/url/urlHelper';

export const useExecuteRequest = () => {
  const dispatch = useDispatch();
  const optionsAction = useAppSelector(state => state.optionActionReducer.value);

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
        const toJson = JSON.stringify(errorCustom.data?.cause?.data ?? errorCustom.data?.cause?.message, null, 2);
        dispatch(setEditorValue(toJson));
      } finally {
        dispatch(setLoadingResult());
      }
    }
  };

  const handleClick = async () => {
    await handleSendRequest();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendRequest();
  };

  return {
    handleClick,
    handleSubmit,
  };
};
