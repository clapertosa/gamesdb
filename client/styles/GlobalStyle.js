import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body {
        height: 100%;
    }

    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    #__next {
        height: 100%;
    }
`;
