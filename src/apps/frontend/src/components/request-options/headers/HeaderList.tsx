/* eslint-disable no-unused-vars */
import {Divider} from '@mui/material';
import {useAppSelector} from '../../../redux/hooks';
import Header from './Header';

const HeaderList = () => {
  const headers = useAppSelector(state => state.headerReducer.value);
  return (
    <div>
      {headers.length > 0 &&
        headers.map((param, index) => (
          <div key={index}>
            <Header
              key={`header${index}`}
              id={param.id}
              checked={param.checked}
              name={param.name}
              value={param.value}
            />
            <Divider />
          </div>
        ))}
    </div>
  );
};

export default HeaderList;
