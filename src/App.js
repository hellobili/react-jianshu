import React from 'react';
import {GlobalStyle} from './style';
import {GlobalIcon} from './static/iconfont/iconfont';
import Header from './common/header';

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalIcon />
      <Header></Header>
    </div>
  );
}

export default App;
