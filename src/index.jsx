import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider as LocalizationProvider} from './Context/Localization';
import {Provider as ThemeProvider} from './Context/Theme';
import {Provider as AuthProvider} from './Context/Authentication'

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
  <ThemeProvider>
  <LocalizationProvider>
  <App />
  </LocalizationProvider>
  </ThemeProvider>
  </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  );
  