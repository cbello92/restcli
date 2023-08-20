import * as React from 'react';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import HttpVerbs from './HttpVerbs';
import {Button} from '@mui/material';
import InputRequestUrl from './InputRequestUrl';
import {useExecuteRequest} from '../../hooks/useExecuteRequest';

export default function Request() {
  const {handleClick, handleSubmit} = useExecuteRequest();

  return (
    <Paper
      variant="outlined"
      component="form"
      square={true}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        background: '#231f1f',
        borderRadius: 3,
      }}
      style={{padding: '8px'}}
      onSubmit={handleSubmit}
    >
      <HttpVerbs />
      <InputRequestUrl />
      <Button variant="outlined" endIcon={<SendIcon />} onClick={handleClick}>
        Send
      </Button>
    </Paper>
  );
}
