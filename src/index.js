import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PkmProvider from './context/pkmContext';

ReactDOM.render(
  <React.StrictMode>
    <PkmProvider>
      <App />
    </PkmProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);
