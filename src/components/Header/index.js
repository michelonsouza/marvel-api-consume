import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';
import { ThemeContext } from 'styled-components';
import { useDispatch } from 'react-redux';

import { logout } from '~/store/modules/auth/actions';

import logo from '~/assets/images/logo.svg';

import { Container } from './styles';

export default function Header() {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Container>
      <Link to="/characters" title="Lista de Personagens">
        <img src={logo} alt="Marvel Logo" />
      </Link>

      <nav>
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
