import React, { useContext } from 'react';
import Spinner from 'react-spinner-material';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

export default function LoadingOverlay() {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Spinner color={theme.colors.primary} radius={120} stroke={8} />
    </Container>
  );
}
