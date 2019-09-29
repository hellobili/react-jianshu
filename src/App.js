import React from 'react';
import { GlobalStyle } from './style';
import { GlobalIcon } from './static/iconfont/iconfont';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GlobalIcon />
      <Header></Header>
    </Provider>
  );

}

export default App;
