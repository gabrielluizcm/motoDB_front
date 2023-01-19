import React from 'react';
import PropTypes from 'prop-types';
import { FaCircleNotch } from 'react-icons/fa';

import { Container } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <span />;
  return (
    <Container>
      <div />
      <span>
        <FaCircleNotch size={36} className="spinner" />
      </span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
