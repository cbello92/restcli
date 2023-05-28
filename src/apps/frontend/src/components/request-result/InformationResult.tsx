import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {Button} from '@mui/material';
import {increment} from '../../redux/features/counterSlice';

export default function InformationResult() {
  const [value, setValue] = React.useState('1');
  const count = useAppSelector(state => state.counterReducer.value);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%', typography: 'body1'}}>
      <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab style={{textTransform: 'capitalize'}} label="Request" value="1" />
            <Tab style={{textTransform: 'capitalize'}} label="Response" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {count}{' '}
          <Button
            onClick={() => {
              dispatch(increment());
            }}
          >
            increment
          </Button>
        </TabPanel>
        <TabPanel value="2">Response</TabPanel>
      </TabContext>
    </Box>
  );
}
