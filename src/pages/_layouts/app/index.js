import React from 'react';
import PropTypes from 'prop-types';

import { Header, LoadingOverlay } from '~/components';

import { Container, Content } from './styles';

export default function AppLayout({ noPaddingX, children, loading }) {
  return (
    <Container>
      {loading && <LoadingOverlay />}
      <Header />
      <Content noPaddingX={noPaddingX}>{children}</Content>
    </Container>
  );
}

AppLayout.defaultProps = {
  noPaddingX: false,
  loading: false,
};

AppLayout.propTypes = {
  noPaddingX: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf([PropTypes.element]),
  ]).isRequired,
};
