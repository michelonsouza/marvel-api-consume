import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';
import { ThemeContext } from 'styled-components';
import { useDispatch } from 'react-redux';

import { logout } from '~/store/modules/auth/actions';
import { themeChange } from '~/store/modules/characters/actions';

import logo from '~/assets/images/logo.svg';

import { Container, SwitchButton } from './styles';

export default function Header() {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  function handleToggleTheme() {
    dispatch(themeChange(theme.title === 'light' ? 'dark' : 'light'));
  }

  return (
    <Container>
      <Link to="/characters" title="Lista de Personagens">
        <img src={logo} alt="Marvel Logo" />
      </Link>

      <nav>
        <SwitchButton
          type="button"
          className="switch-container"
          value={theme.title}
          onClick={handleToggleTheme}
        >
          <span className="switch-circle">
            {theme.title === 'light' ? 'off' : 'on'}
          </span>
        </SwitchButton>
        <ul>
          <li title="Sair da aplicação">
            <button type="button" onClick={handleLogout}>
              Sair da Aplicação{' '}
              <MdExitToApp color={theme.colors.primary} size={24} />
            </button>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
