import React from 'react';
import OutputIcon from '@mui/icons-material/Output';

const EmptyResult = () => {
  return (
    <div style={{minHeight: '86vh', display: 'grid', placeContent: 'center'}}>
      <div style={{display: 'grid', placeContent: 'center'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <OutputIcon style={{fontSize: '74px'}} />
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>Not sent</div>
      </div>
    </div>
  );
};

export default EmptyResult;
