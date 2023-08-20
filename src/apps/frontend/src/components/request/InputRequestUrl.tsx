import React from 'react';
import {InputBase} from '@mui/material';
import {useUrl} from '../../hooks/useUrl';

const InputRequestUrl = () => {
  const {handleSetUrl, inputRef} = useUrl();

  return (
    <InputBase
      inputRef={inputRef}
      onChange={handleSetUrl}
      sx={{ml: 1, flex: 1}}
      placeholder="Enter your request"
      inputProps={{'aria-label': 'write your request'}}
      spellCheck={false}
    />
  );
};

export default InputRequestUrl;
