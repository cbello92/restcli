/* eslint-disable no-undef */
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import React from 'react';

interface Props {
  open: boolean;
  name: string;
  Icon(): JSX.Element;
}

const Option = ({name, Icon, open}: Props) => {
  return (
    <ListItem key={name} disablePadding sx={{display: 'block'}}>
      <ListItemButton
        sx={{
          minHeight: 48,
          px: 2.5,
          justifyContent: open ? 'initial' : 'center',
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: 'center',
            mr: open ? 3 : 'auto',
          }}
        >
          <Icon />
        </ListItemIcon>
        <ListItemText primary={name} sx={{opacity: open ? 1 : 0}} />
      </ListItemButton>
    </ListItem>
  );
};

export default Option;
