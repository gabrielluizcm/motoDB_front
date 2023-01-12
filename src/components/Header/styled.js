import styled from 'styled-components';
import { secondary } from '../../config/colors';

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
