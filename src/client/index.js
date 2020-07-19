import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../Routes';
import {serverRender} from '../../configs/local.config';

const App = () => {
  return (
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  )
}

ReactDom[serverRender ? 'hydrate' : 'render'](<App/>, document.getElementById('root'));
