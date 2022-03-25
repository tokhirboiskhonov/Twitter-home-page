import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider as LocalizationProvider} from './Context/Localization';
import {Provider as ThemeProvider} from './Context/Theme';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ThemeProvider>
  <LocalizationProvider>
  <App />
  </LocalizationProvider>
  </ThemeProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  );
  