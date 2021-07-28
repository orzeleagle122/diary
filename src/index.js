import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import 'assets/styles/fonts.css';
import { worker } from 'mocks/browser';
import AppProvides from './providers/AppProvides';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProvides>
        <Root />
      </AppProvides>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
