import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #2A0944;
    color: rgb(236, 236, 236);
    text-shadow: 1px 1px 1px black;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
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
  background-color: #70318e;

  .glass {
    .glass {
      background: rgba(200, 100, 237, 0.44);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5.7px);
      -webkit-backdrop-filter: blur(5.7px);
      border: 1px solid rgba(200, 100, 237, 0.3);
    }
  }
`;
