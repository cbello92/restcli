/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Fade from '@mui/material/Fade';
import {Button, Menu} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {setAuthSelected, AuthAllowed, AuthAllowedEnum} from '../../../redux/features/authSelectedSlice';
import {deleteAuthorization} from '../../../redux/features/requestOptionSlice';
import {authReset} from '../../../redux/features/authSlice';

export default function SelectAuth() {
  const {NONE, BASIC_AUTH, BEARER_TOKEN} = AuthAllowedEnum;
  const authSelected = useAppSelector(state => state.authSelectedReducer.value);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.SyntheticEvent<Element, Event>) => {
    console.log(event.currentTarget.textContent);
    if (event.currentTarget.textContent) {
      dispatch(setAuthSelected(event.currentTarget.textContent as AuthAllowed));
    }
    setAnchorEl(null);
  };

  React.useEffect(() => {
    if (authSelected === NONE) {
      dispatch(deleteAuthorization());
      dispatch(authReset());
    }
  }, [authSelected]);

  return (
    <>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {authSelected}
        <UnfoldMoreIcon fontSize="small" />
      </Button>

      <Menu
        id="fade-menu"
        MenuListProps={{'aria-labelledby': 'fade-button'}}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} value={NONE}>
          {NONE}
        </MenuItem>
        <MenuItem onClick={handleClose} value={BASIC_AUTH}>
          {BASIC_AUTH}
        </MenuItem>
        <MenuItem onClick={handleClose} value={BEARER_TOKEN}>
          {BEARER_TOKEN}
        </MenuItem>
      </Menu>
    </>
  );
}
