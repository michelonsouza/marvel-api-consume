import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './config/ReactotronConfig';

import history from './services/history';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { store, persistor } from '~/store';

import GlobalStyle from './styles/global';
import Routes from './routes';

export default function App() {
  const [theme, setTheme] = useState(light);

  function handleChangeTheme(themeTitle) {
    setTheme(themeTitle === 'light' ? light : dark);
  }

  useEffect(() => {
    document.querySelector('.loading-container').style.display = 'none';
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <GlobalStyle />
            <Routes onThemeChange={handleChangeTheme} />
            <ToastContainer autoClose={3000} />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
