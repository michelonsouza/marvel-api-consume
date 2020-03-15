import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinner-material';

import { Container } from './styles';

export default function Button({
  children,
  variant,
  mb,
  mt,
  loading,
  ...rest
}) {
  return (
    <Container mb={mb} mt={mt} variant={variant} {...rest}>
      {loading ? <Spinner color="#fff" radius={30} stroke={4} /> : children}
    </Container>
  );
}

Button.defaultProps = {
  variant: 'primary',
  loading: false,
  mb: false,
  mt: false,
};

Button.propTypes = {
  variant: PropTypes.string,
  loading: PropTypes.bool,
  mb: PropTypes.bool,
  mt: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};
