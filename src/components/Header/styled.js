import styled from 'styled-components';
import { secondary, success } from '../../config/colors';

export const Nav = styled.nav`
  background: ${secondary};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin: 0 10px 0 0;
    font-weight: bold;
  }
`;

export const Title = styled.h1`
  position: absolute;
  left: 10px;
  p {
    font-size: 8px;
  }

  a {
    margin: 0;
    color: ${success};
  }
`;
