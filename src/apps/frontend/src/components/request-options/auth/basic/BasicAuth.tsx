import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import KeyIcon from '@mui/icons-material/Key';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Divider, IconButton} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {setHeaderPartial} from '../../../../redux/features/requestOptionSlice';
import {setBasicAuth} from '../../../../redux/features/authSlice';

export default function BasicAuth() {
  const dispatch = useAppDispatch();
  const {username, password} = useAppSelector(state => state.basicAuthReducer.value);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    if (name === 'username') {
      dispatch(setBasicAuth({username: value}));
    }

    if (name === 'password') {
      dispatch(setBasicAuth({password: value}));
    }
  };

  React.useEffect(() => {
    if (username !== '' && password !== '') {
      const userPassEncoded = Buffer.from(`${username}:${password}`).toString('base64');
      dispatch(setHeaderPartial({Authorization: `Basic ${userPassEncoded}`}));
    }
  }, [username, password]);

  return (
    <Box sx={{'& > :not(style)': {m: 0.5}}}>
      <FormControl variant="standard" fullWidth>
        <Input
          name="username"
          type="text"
          placeholder="username"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircleIcon />
            </InputAdornment>
          }
          onChange={handleChange}
          autoComplete="off"
          disableUnderline={true}
          value={username}
        />
      </FormControl>
      <Divider />
      <FormControl variant="standard" fullWidth>
        <Input
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="password"
          autoComplete="off"
          disableUnderline={true}
          onChange={handleChange}
          value={password}
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
        />
      </FormControl>
      <Divider />
    </Box>
  );
}
