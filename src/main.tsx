import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootProvider } from './store';

// TODO: @ alias 안됨

ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
