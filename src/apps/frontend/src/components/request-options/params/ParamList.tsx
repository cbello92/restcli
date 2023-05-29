/* eslint-disable no-unused-vars */
import dynamic from 'next/dynamic';
import {useAppSelector} from '../../../redux/hooks';
// import Param from './Param';

const Param = dynamic(() => import('./Param'), {ssr: false});

const ParamList = () => {
  const params = useAppSelector(state => state.paramReducer.value);
  return (
    <div>
      {params.length > 0 &&
        params.map((param, index) => (
          <Param key={`param${index}`} id={param.id} checked={param.checked} name={param.name} value={param.value} />
        ))}
    </div>
  );
};

export default ParamList;
