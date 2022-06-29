import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #000;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, textarea {
    font-family: 'Nunito', 'sans-serif';
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
    color:'#fff'
  }
  p{
    color:'#fff'
  }
  button {
    cursor: pointer;
  }
`;