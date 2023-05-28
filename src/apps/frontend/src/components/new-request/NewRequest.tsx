import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SendIcon from '@mui/icons-material/Send';
import HttpVerbs from './HttpVerbs';
import {Button} from '@mui/material';

export default function NewRequest() {
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
    >
      <HttpVerbs />
      <InputBase
        sx={{ml: 1, flex: 1}}
        placeholder="Write your request"
        inputProps={{'aria-label': 'write your request'}}
      />
      <Button variant="outlined" endIcon={<SendIcon />}>
        Send
      </Button>
    </Paper>
  );
}
