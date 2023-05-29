import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Header from './Header';
import ParamList from './params/ParamList';

export default function OptionTab() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%', typography: 'body1'}}>
      <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab style={{textTransform: 'capitalize'}} label="Params" value="1" />
            <Tab style={{textTransform: 'capitalize'}} label="Headers" value="2" />
            <Tab style={{textTransform: 'capitalize'}} label="Auth" value="3" />
            <Tab style={{textTransform: 'capitalize'}} label="Body" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {/* <Param /> */}
          <ParamList />
        </TabPanel>
        <TabPanel value="2">
          <Header />
        </TabPanel>
        <TabPanel value="3">Auth</TabPanel>
        <TabPanel value="4">Body</TabPanel>
      </TabContext>
    </Box>
  );
}