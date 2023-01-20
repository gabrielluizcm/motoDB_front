import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const Header1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const MotorcycleContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    padding: 5px 0;
    justify-content: space-between;
  }

  div + div {
    border-top: 1px solid ${colors.glassBorder};
  }

  span a {
    margin: 0 5px;
    transition: all 300ms;
  }

  span a:hover {
    color: ${colors.info};
  }

  .actions {
    display: flex;
  }

  .deleteExclamation {
    margin: 0 5px;
    color: ${colors.error};
    cursor: pointer;
  }
`;
export const MotorcyclePicture = styled.div`
  img,
  svg {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: ${colors.glassBackground};
    border: 1px solid ${colors.glassBorder};
    margin-right: 10px;
  }
  svg {
    padding: 5px;
  }
`;

export const NewMotorcycle = styled(Link)`
  display: inline-block;
  margin-left: 10px;
  font-size: 16px;
  height: 16px;
`;
