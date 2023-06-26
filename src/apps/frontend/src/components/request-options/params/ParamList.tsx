/* eslint-disable no-unused-vars */
import {Divider} from '@mui/material';
import {useAppSelector} from '../../../redux/hooks';
import Param from './Param';

const ParamList = () => {
  const params = useAppSelector(state => state.urlParamReducer.value.params);
  return (
    <div>
      {params.length > 0 &&
        params.map((param, index) => (
          <div key={index}>
            <Param key={`param${index}`} id={param.id} checked={param.checked} name={param.name} value={param.value} />
            <Divider />
          </div>
        ))}
    </div>
  );
};

export default ParamList;
