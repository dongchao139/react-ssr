import React from 'react';
import ReactDom from 'react-dom';
import {serverRender} from '../../configs/local.config';

import Home from '../containers/Home';
ReactDom[serverRender ? 'hydrate' : 'render'](<Home/>, document.getElementById('root'));
