/* eslint-disable no-undef */
import {
  IParam,
  addParam,
  deleteParam,
  setChecked,
  setParamCheckedActive,
  setValueParam,
} from '../../../redux/features/paramSlice';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {Checkbox, Grid} from '@mui/material';
import Input from '@mui/material/Input';
import DeleteIcon from '@mui/icons-material/Delete';
import {setParamsQuery} from '../../../redux/features/requestOptionSlice';
import {useEffect} from 'react';

const ariaLabel = {'aria-label': 'description'};

export default function Param({id, checked, name, value}: IParam) {
  const dispatch = useAppDispatch();
  const params = useAppSelector(state => state.paramReducer.value);

  const handleKeyUp = (id: string) => (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.currentTarget.value !== '') {
      dispatch(setParamCheckedActive(id));
    }
    if (event.currentTarget.value === '' && params.length > 1) {
      dispatch(deleteParam(id));
    }
    if (event.currentTarget.value.length === 1) {
      const paramIndex = params.findIndex(param => param.id === id);
      console.log('PARAMETERS', params);
      if (paramIndex === params.length - 1 || params.length === 1) {
        dispatch(addParam({name: '', value: ''}));
      }
    }
  };

  const handleChangeChecked = () => {
    dispatch(setChecked(id as string));
  };

  const handleDeleteParam = (id: string) => () => {
    dispatch(deleteParam(id));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    dispatch(setValueParam({id: id, [target.name]: event.target.value}));
  };

  useEffect(() => {
    dispatch(setParamsQuery(params));
  }, [params]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={1.5} md={1.5}>
        <Checkbox
          inputProps={{'aria-label': 'Checkbox demo'}}
          checked={checked}
          onChange={handleChangeChecked}
          style={{padding: 5, border: 'none', color: !checked ? 'gray' : '#fff'}}
        />
      </Grid>
      <Grid item xs={3.5} md={3.5}>
        <Input
          name="name"
          placeholder="name"
          value={name}
          inputProps={ariaLabel}
          style={{borderBottom: 0, borderBottomColor: 'transparent', border: 0, color: !checked ? 'gray' : '#fff'}}
          onKeyUp={handleKeyUp(id as string)}
          onChange={handleChange}
          autoComplete="off"
          disableUnderline={true}
          spellCheck={false}
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <Input
          placeholder="value"
          inputProps={ariaLabel}
          style={{width: '100%', color: !checked ? 'gray' : '#fff'}}
          name="value"
          value={value}
          onChange={handleChange}
          autoComplete="off"
          disableUnderline={true}
          spellCheck={false}
        />
      </Grid>
      {(name !== '' || value !== '') && (
        <Grid
          item
          xs={1}
          md={1}
          style={{
            justifyContent: 'center',
            display: 'flex',
            placeItems: 'center',
            color: !checked ? 'gray' : '#fff',
          }}
        >
          <DeleteIcon onClick={handleDeleteParam(id as string)} />
        </Grid>
      )}
    </Grid>
  );
}
