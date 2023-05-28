import * as React from 'react';
import {styled, Theme, CSSObject} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import {Fab} from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import OptionList from './OptionList';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {width: `calc(${theme.spacing(8)} + 1px)`},
});

const Drawer = styled(MuiDrawer, {shouldForwardProp: prop => prop !== 'open'})(({theme, open}) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    console.log('handle');
    setOpen(!open);
  };

  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} style={{background: '#1c1818'}}>
        <OptionList open={open} />
        <Fab
          size="medium"
          color="default"
          aria-label="add"
          style={{bottom: 0, position: 'fixed', marginLeft: '7px'}}
          onClick={handleDrawerOpen}
        >
          {!open ? <MenuIcon /> : <MenuOpenIcon />}
        </Fab>
      </Drawer>
    </Box>
  );
}
