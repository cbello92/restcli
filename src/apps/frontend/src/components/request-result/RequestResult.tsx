import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import OptionTab from '../request-options/OptionTab';
import InformationResult from './InformationResult';
import {Divider} from '@mui/material';

export default function BasicGrid() {
  return (
    <Grid
      container
      mt={1}
      sx={{
        height: '100%',
        marginLeft: 0,
        marginRight: 0,
        background: '#231f1f',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <Grid xs={12} md={4}>
        <OptionTab />
      </Grid>
      <Divider orientation="vertical" flexItem></Divider>
      <Grid xs={12} md={7.9}>
        <InformationResult />
      </Grid>
    </Grid>
  );
}
