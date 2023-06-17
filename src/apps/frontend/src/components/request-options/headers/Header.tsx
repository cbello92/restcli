/* eslint-disable no-undef */
import {
  IHeader,
  addHeader,
  deleteHeader,
  setChecked,
  setHeaderCheckedActive,
  setValueHeader,
} from '../../../redux/features/headerSlice';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {Checkbox, Grid} from '@mui/material';
import Input from '@mui/material/Input';
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect} from 'react';
import {setHeadersQuery} from '../../../redux/features/requestOptionSlice';

const ariaLabel = {'aria-label': 'description'};

export default function Header({id, checked, name, value}: IHeader) {
  const dispatch = useAppDispatch();
  const headers = useAppSelector(state => state.headerReducer.value);

  const handleKeyUp = (id: string) => (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.currentTarget.value !== '') {
      dispatch(setHeaderCheckedActive(id));
    }
    if (event.currentTarget.value === '' && headers.length > 1) {
      dispatch(deleteHeader(id));
    }
    if (event.currentTarget.value.length === 1) {
      const paramIndex = headers.findIndex(param => param.id === id);
      if (paramIndex === headers.length - 1 || headers.length === 1) {
        dispatch(addHeader({name: '', value: ''}));
      }
    }
  };

  const handleChangeChecked = () => {
    dispatch(setChecked(id as string));
  };

  const handleDeleteParam = (id: string) => () => {
    dispatch(deleteHeader(id));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    dispatch(setValueHeader({id: id, [target.name]: event.target.value}));
  };

  useEffect(() => {
    dispatch(setHeadersQuery(headers));
  }, [headers]);

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
