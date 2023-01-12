import styled, { createGlobalStyle } from 'styled-components';
import {
  primary,
  primaryDark,
  containerBackground,
  glassBackground,
  glassBorder,
} from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${primary};
    color: ${primaryDark};
    text-shadow: 1px 1px 1px black;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${primary};
    border: none;
    color: ${primaryDark};
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${primaryDark};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  width: 65%;
  min-width: 300px;
  margin: 30px auto;
  padding: 15px 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: ${containerBackground};

  .glass {
    .glass {
      background: ${glassBackground};
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5.7px);
      -webkit-backdrop-filter: blur(5.7px);
      border: 1px solid ${glassBorder};
    }
  }
`;
