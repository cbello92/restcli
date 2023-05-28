/* eslint-disable no-undef */
import {Provider} from 'react-redux';
import {store} from './store';

interface Props {
  children: React.ReactNode;
}

export function ProviderWrapper({children}: Props) {
  return <Provider store={store}>{children}</Provider>;
}
