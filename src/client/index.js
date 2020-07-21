import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import { serverRender } from '../../configs/local.config';
import { Provider } from 'react-redux';
import { getStore } from '../store/index';

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        {Routes}
      </BrowserRouter>
    </Provider>
  )
}

ReactDom[serverRender ? 'hydrate' : 'render'](<App />, document.getElementById('root'));
