import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    align-items: center;
    background-color: #222;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  }

  a {
    :hover {
      cursor: pointer;
    }
  }
`;
