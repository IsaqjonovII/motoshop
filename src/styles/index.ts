import { colors } from "constants/styles";
import { createGlobalStyle } from "styled-components";
import { layout } from "./mixin";
import { pxToRem } from "utils";

const { bgGray, gray, teal } = colors;

export const GlobalStyle = createGlobalStyle`
:root {
    --font-h1: clamp(3.2rem, 0.5692rem + 4.638vw, 13.75rem);
    --font-h2: clamp(1.5rem, 1.0982rem + 1.7143vw, 2.8125rem);
    --font-h3: clamp(1.375rem, 1.1837rem + 0.8163vw, 2rem);
    --font-h4: clamp(1.375rem, 1.1837rem + 0.8163vw, 1.6rem);
    --font-h5: clamp(1rem, 0.9235rem + 0.3265vw, 1.25rem);
    --font-h6: clamp(1rem, 0.9617rem + 0.1633vw, 1.125rem);
    --font-body: clamp(1rem, 0.8852rem + 0.4898vw, 1.375rem);
    --font-link: clamp(0.875rem, 0.875rem + 0.3265vw, 1.125rem);
    --font-mini: clamp(0.875rem, 0.8367rem + 0.1633vw, 1rem);
    --font-h2-display: clamp(1.875rem, 1.41rem + 2.449vw, 3.95rem);
}
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
