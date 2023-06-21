import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ParamList from './params/ParamList';
import HeaderList from './headers/HeaderList';
import Auth from './auth/Auth';
import {useAppSelector} from '../../redux/hooks';

const BodyEditor = React.lazy(() => import('./body/BodyEditor'));

export default function OptionTab() {
  const [value, setValue] = React.useState('1');
  const params = useAppSelector(state => state.paramReducer.value);
  const sizeParams = params.filter(param => param.checked).length;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%', typography: 'body1'}}>
      <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <TabList
            onChange={handleChange}
            aria-label="tabs request options"
            TabIndicatorProps={{style: {backgroundColor: '#231f1f', borderBottom: 'none', color: 'white', fontWeight: 'bold'}}}
          >
            <Tab
              style={{textTransform: 'capitalize'}}
              label={<div>Params {sizeParams > 0 && <span style={{color: '#73DC8C'}}>{sizeParams}</span>}</div>}
              value="1"
            />
            <Tab style={{textTransform: 'capitalize'}} label="Headers" value="2" />
            <Tab style={{textTransform: 'capitalize'}} label="Auth" value="3" />
            <Tab style={{textTransform: 'capitalize'}} label="Body" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ParamList />
        </TabPanel>
        <TabPanel value="2">
          <HeaderList />
        </TabPanel>
        <TabPanel value="3">
          <Auth />
        </TabPanel>
        <TabPanel value="4" style={{paddingLeft: 0, paddingRight: 0, paddingBottom: 0, paddingTop: 0}}>
          <BodyEditor />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
