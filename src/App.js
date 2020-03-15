import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './config/ReactotronConfig';

import history from './services/history';
import light from './styles/themes/light';

import { store, persistor } from '~/store';

import GlobalStyle from './styles/global';
import Routes from './routes';

export default function App() {
  useEffect(() => {
    document.querySelector('.loading-container').style.display = 'none';
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={light}>
          <Router history={history}>
            <GlobalStyle />
            <Routes />
            <ToastContainer autoClose={3000} />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
