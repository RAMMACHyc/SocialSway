import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainContainer from './app/MainContainer'; 

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App