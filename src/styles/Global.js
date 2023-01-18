import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${colors.primary};
    color: ${colors.primaryDark};
    text-shadow: 1px 1px 1px black;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.error};
    border: none;
    color: ${colors.primaryDark};
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 700;
    transition: all 300ms;

    &:hover {
      filter: brightness(85%);
    }
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border:1px solid ${colors.glassBorder};
    background: ${colors.glassBackground};
    color: ${colors.primaryDark};
    padding: 0 10px;
    border-radius: 5px;
    margin-top: 5px;

    &:focus {
      border: 1px solid ${colors.primaryDark}
    }
  }

  a {
    text-decoration: none;
    color: ${colors.primaryDark};
  }

  ul {
    list-style: none;
  }

  .Toastify__toast-container {
    left: initial;
    width: 50%;
  }

  .Toastify__toast {
    margin-top: 10px;
    color: ${colors.primaryDark};
  }

  .Toastify__toast--success {
    background: ${colors.success};
  }

  .Toastify__toast--info {
    background: ${colors.info};
  }

  .Toastify__toast--warning {
    background: ${colors.warning};
  }

  .Toastify__toast--error {
    background: ${colors.error};
  }
`;

export const Container = styled.section`
  width: 90%;
  min-width: 300px;
  max-width: 600px;
  margin: 30px auto;
  padding: 15px 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: ${colors.containerBackground};

  .glass {
    .glass {
      background: ${colors.glassBackground};
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5.7px);
      -webkit-backdrop-filter: blur(5.7px);
      border: 1px solid ${colors.glassBorder};
    }
  }
`;
