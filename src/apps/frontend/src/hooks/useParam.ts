import {ChangeEvent, KeyboardEvent, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './../redux/hooks';
import {addParam, deleteParam, setChecked, setParamCheckedActive, setValueParam} from '../redux/features/urlParamSlice';
import {setParamsQueryChecked} from '../redux/features/requestOptionSlice';

export const useParam = (id: string) => {
  const dispatch = useAppDispatch();
  const params = useAppSelector(state => state.urlParamReducer.value.params);

  const handleKeyUp = () => (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.currentTarget.value !== '') {
      dispatch(setParamCheckedActive(id));
    }
    if (event.currentTarget.value === '' && params.length > 1) {
      dispatch(deleteParam(id));
    }
    if (event.currentTarget.value.length === 1) {
      const paramIndex = params.findIndex(param => param.id === id);
      if (paramIndex === params.length - 1 || params.length === 1) {
        dispatch(addParam({name: '', value: ''}));
      }
    }
  };

  const handleChangeChecked = () => {
    dispatch(setChecked(id));
  };

  const handleDeleteParam = () => () => {
    dispatch(deleteParam(id));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    dispatch(setValueParam({id: id, [target.name]: event.target.value}));
  };

  useEffect(() => {
    dispatch(setParamsQueryChecked(params));
  }, [params]);

  return {
    handleKeyUp,
    handleChangeChecked,
    handleDeleteParam,
    handleChange,
  };
};
