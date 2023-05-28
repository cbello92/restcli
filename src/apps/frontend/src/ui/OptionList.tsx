/* eslint-disable no-undef */
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AppsIcon from '@mui/icons-material/Apps';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import Option from './Option';
import {List} from '@mui/material';

interface OptionMenu {
  name: string;
  Icon(): JSX.Element;
}

interface Props {
  open: boolean;
}

const optionsMenu: OptionMenu[] = [
  {
    name: 'Workspaces',
    Icon: () => <WorkspacesIcon />,
  },
  {
    name: 'Environments',
    Icon: () => <AutoAwesomeMotionIcon />,
  },
  {
    name: 'Collections',
    Icon: () => <AppsIcon />,
  },
  {
    name: 'Drafts',
    Icon: () => <SaveAsIcon />,
  },
];

const OptionList = ({open}: Props) => {
  return (
    <List>
      {optionsMenu.map(option => (
        <Option key={option.name} name={option.name} Icon={option.Icon} open={open} />
      ))}
    </List>
  );
};

export default OptionList;
