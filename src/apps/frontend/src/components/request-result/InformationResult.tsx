'use client';

import {useState, lazy, type SyntheticEvent} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useAppSelector} from '../../redux/hooks';
import EmptyResult from './EmptyResult';
import Loading from '../../ui/Loading';

const Response = lazy(() => import('./Response'));

export default function InformationResult() {
  const [value, setValue] = useState('2');
  const {isActiveRequest, isLoadingResult, status} = useAppSelector(state => state.requestResultReducer.value);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const setColorStatus = (status: number) => {
    if (status >= 200 && status < 300) {
      return '#73DC8C';
    } else if (status >= 400 && status < 500) {
      return '#ffa24e';
    } else {
      return '#ff665b';
    }
  };

  return (
    <Box sx={{width: '100%', typography: 'body1', minHeight: '92vh'}}>
      <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            TabIndicatorProps={{style: {backgroundColor: '#231f1f', borderBottom: 'none', color: 'white'}}}
          >
            <Tab style={{textTransform: 'capitalize'}} label="Request" value="1" disabled={!isActiveRequest} />
            <Tab
              style={{textTransform: 'capitalize'}}
              label={
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  Response{' '}
                  {status && (
                    <div style={{color: setColorStatus(status), paddingLeft: 4, fontWeight: 'bold'}}>{status}</div>
                  )}
                </div>
              }
              value="2"
              disabled={!isActiveRequest}
            />
          </TabList>
        </Box>
        <TabPanel value="1">Request</TabPanel>
        <TabPanel value="2" style={{paddingLeft: 0, paddingRight: 0, paddingBottom: 0, paddingTop: 0}}>
          {isLoadingResult && isActiveRequest && <Loading />}
          {!isActiveRequest && <EmptyResult />}
          {isActiveRequest && !isLoadingResult && <Response />}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
