import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Root from './root';

import "./styles/root.scss";

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.querySelector("#root"));

