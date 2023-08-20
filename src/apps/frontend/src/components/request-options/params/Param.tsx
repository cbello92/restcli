/* eslint-disable no-undef */
import {Checkbox, Grid} from '@mui/material';
import Input from '@mui/material/Input';
import DeleteIcon from '@mui/icons-material/Delete';
import {IParam} from '../../../redux/entity/params.interface';
import {useParam} from '../../../hooks/useParam';

const ariaLabel = {'aria-label': 'description'};

export default function Param({id, checked, name, value}: IParam) {
  const {handleChange, handleChangeChecked, handleDeleteParam, handleKeyUp} = useParam(id as string);

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
          multiline
          name="name"
          placeholder="name"
          value={name}
          inputProps={ariaLabel}
          style={{borderBottom: 0, borderBottomColor: 'transparent', border: 0, color: !checked ? 'gray' : '#fff'}}
          onKeyUp={handleKeyUp()}
          onChange={handleChange}
          autoComplete="off"
          disableUnderline={true}
          spellCheck={false}
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <Input
          multiline
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
          <DeleteIcon onClick={handleDeleteParam()} />
        </Grid>
      )}
    </Grid>
  );
}
