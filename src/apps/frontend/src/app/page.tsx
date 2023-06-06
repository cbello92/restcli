'use client';

import {Box} from '@mui/material';
import Sidebar from '../ui/Sidebar';
import Request from '../components/request/Request';
import RequestResult from '../components/request-result/RequestResult';

const page = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 1,
          pl: 3,
          pr: 3,
          pb: 1,
          width: 'auto',
          height: '100vh',
        }}
      >
        <Request />
        <RequestResult />
      </Box>
    </Box>
  );
};

export default page;
