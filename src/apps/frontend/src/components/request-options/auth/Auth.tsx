import React from 'react';
import SelectAuth from './SelectAuth';
import BearerTokenInput from './token/BearerTokenInput';
import BasicAuth from './basic/BasicAuth';
import {useAppSelector} from '../../../redux/hooks';
import {AuthAllowedEnum} from '../../../redux/features/authSelectedSlice';
import NoneAuth from './NoneAuth';

const Auth = () => {
  const {BASIC_AUTH, BEARER_TOKEN} = AuthAllowedEnum;
  const authSelected = useAppSelector(state => state.authSelectedReducer.value);
  return (
    <>
      {authSelected === BASIC_AUTH && <BasicAuth />}
      {authSelected === BEARER_TOKEN && <BearerTokenInput />}
      {authSelected === AuthAllowedEnum.NONE && <NoneAuth />}
      <div style={{position: 'absolute', bottom: 8}}>
        <SelectAuth />
      </div>
    </>
  );
};

export default Auth;
