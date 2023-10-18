import { colors } from "constants/styles";
import { createGlobalStyle } from "styled-components";
import { layout } from "./mixin";

const { bgGray } = colors;

export const GlobalStyle = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        box-sizing: border-box;
        font-family: 'lato Normal';
    }
    body {
        background-color: ${bgGray};
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    ul, li {
        color: inherit;
        list-style-type: none;
    }
    .app {
        position: relative;
    }
    .container__nav {
        height: 5rem;
        width: 100%;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 9999;
    }
    .flex {
        ${layout("flex")}
    }
    @font-face {
        font-family: 'lato Normal';
        src: url(/fonts/Lato-Regular.ttf) format('truetype');
    }
    `;
