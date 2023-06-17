import React from 'react';
import KeyOffIcon from '@mui/icons-material/KeyOff';

const NoneAuth = () => {
  return (
    <div style={{minHeight: '82vh', display: 'grid', placeContent: 'center'}}>
      <div style={{display: 'grid', placeContent: 'center'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <KeyOffIcon style={{fontSize: '74px', color: 'gray'}} />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', color: 'gray'}}>No Authentication</div>
      </div>
    </div>
  );
};

export default NoneAuth;
