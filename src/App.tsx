import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import { MAIN_COLOR } from './styles/variables';

import Routes from './routes';

import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={MAIN_COLOR} barStyle="light-content" />
      <Routes />
    </Provider>
  );
};

export default App;
