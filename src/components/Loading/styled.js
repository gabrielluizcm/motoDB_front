import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primaryDark};

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${colors.glassBackground};
    filter: brightness(0.3);
  }

  span {
    z-index: 2;

    svg {
      animation: spinner 0.6s linear infinite;
    }
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
