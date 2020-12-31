import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        height: auto;
    }

    body {
      height: 100%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow-x: hidden;
      font-size:16px;
    }

    #__next {
        height: 100%;
    }
`;
