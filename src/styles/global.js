import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
  }

  *:focus {
    outline: 0;
  }

  body, html, #root {
    height: 100%;
    overflow-x: hidden;
  }

  body, input, button {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 21px;
  }

  button {
    cursor: pointer;
    border: 0;
    transition: all 200ms ease;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .switch-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .switch-wrapper > div {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
