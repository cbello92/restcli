import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import KeyIcon from '@mui/icons-material/Key';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Divider, IconButton} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {setHeaderPartial} from '../../../../redux/features/requestOptionSlice';

export default function BearerTokenInput() {
  const dispatch = useAppDispatch();
  const headers = useAppSelector(state => state.optionActionReducer.value.headers);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setHeaderPartial({Authorization: `Bearer ${event.target.value}`}));
  };

  return (
    <Box sx={{'& > :not(style)': {m: 0.5}}}>
      <FormControl variant="standard" fullWidth>
        <Input
          value={headers?.Authorization ? headers?.Authorization.split(' ')[1] : ''}
          type={showPassword ? 'text' : 'password'}
          placeholder="token"
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <KeyIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          autoComplete="off"
          disableUnderline={true}
        />
      </FormControl>
      <Divider />
    </Box>
  );
}
