
import React from 'react';
import { render } from 'react-dom';
const root = document.getElementById('root');
import store from './store';
import { Provider } from 'react-redux';
import App from './App';

render(<Provider store= { store }>
  <App />
</Provider>, root);