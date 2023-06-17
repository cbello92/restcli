/* eslint-disable no-underscore-dangle */
'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import {useGetVerbsQuery} from '../../redux/services/verbApi';
import {VerbHttpResponse} from '../../../../../Contexts/Backoffice/VerbsHttp/domain/response/VerbHttpResponse';
import {setHttpMethod} from '../../redux/features/requestOptionSlice';
import {useAppDispatch} from '../../redux/hooks';

export default function HttpVerbs() {
  const dispatch = useAppDispatch();
  const {data: verbsHttp} = useGetVerbsQuery();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [optionSelected, setOptionSelected] = React.useState<VerbHttpResponse>({name: 'GET', color: '#73DC8C'});
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.textContent) {
      const option = verbsHttp?.find(verb => verb.name === event.currentTarget.textContent) as VerbHttpResponse;
      setOptionSelected(option);
      dispatch(setHttpMethod(option.name));
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color: optionSelected.color}}
      >
        {optionSelected.name}
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
        {verbsHttp?.map((verb, index) => (
          <MenuItem key={`${verb.name}${index}`} onClick={handleClose} style={{color: verb.color}}>
            {verb.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
