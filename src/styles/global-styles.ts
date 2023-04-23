import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: all 0.4s ease;
  }

  body {
    background-color: #fff;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input {
    border: none;
  }
`;

export {GlobalStyles};
