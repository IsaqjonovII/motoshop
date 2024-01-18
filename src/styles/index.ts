import { colors } from "constants/styles";
import { createGlobalStyle } from "styled-components";
import { layout } from "./mixin";
import { pxToRem } from "utils";

const { bgGray, gray, teal } = colors;

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
    hr {
        border: none;
        border-top: 1px solid ${gray}30;
        margin: ${pxToRem(15)} 0;
    }
    .ant-tabs-tab {
    font-size: ${pxToRem(18)} !important;
    &:hover, & :active {
      color: ${teal} !important;
    }
  }
  .ant-tabs-ink-bar {
    background: ${teal} !important;
  }
  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${teal} !important;
  }
    @font-face {
        font-family: 'lato Normal';
        src: url(/fonts/Lato-Regular.ttf) format('truetype');
    }
    .icon {
        font-size: ${pxToRem(22)};
        vertical-align: middle;
        margin: 0 ${pxToRem(5)};
        cursor: pointer;
    }
    .spinning {
        animation: spin 450ms infinite linear;
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
    `;
