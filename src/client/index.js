import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../Routes';
import { serverRender } from '../../configs/local.config';
import { Provider } from 'react-redux';
import { getStore } from '../store/index';

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom[serverRender ? 'hydrate' : 'render'](<App />, document.getElementById('root'));
