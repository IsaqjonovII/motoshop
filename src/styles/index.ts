import { colors } from "constants/styles";
import { createGlobalStyle } from "styled-components";
import { layout } from "./mixin";
import { pxToRem } from "utils";

const { bgGray, gray, teal, white } = colors;

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-h1: clamp(2.2rem, 0.5692rem + 1.638vw, 4.75rem);
        --font-h2: clamp(1.5rem, .882rem + .7143vw, 2.8125rem);
        --font-h3: clamp(1.375rem, .4837rem + 0.5163vw, 2rem);
        --font-h4: clamp(1.375rem, 1.1837rem + 0.8163vw, 1.6rem);
        --font-h5: clamp(1rem, 0.7235rem + 0.3265vw, 1.25rem);
        --font-h6: clamp(1rem, 0.9617rem + 0.1633vw, 1.125rem);
        --font-body: clamp(1rem, 0.8852rem + 0.4898vw, 1.375rem);
        --font-link: clamp(0.875rem, 0.875rem + 0.3265vw, 1.125rem);
        --font-mini: clamp(0.875rem, 0.8367rem + 0.1633vw, 1rem);
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-rendering: optimizeLegibility;
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
        width: 100%;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 99;
    }
    .flex {
        ${layout("flex")}
    }
    .capitalize {
        text-transform: capitalize;
    }
    .uppercase {
        text-transform: uppercase;
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
    .swiper-wrapper {
      padding: ${pxToRem(15)};
    }
    .ant-tabs-ink-bar {
      background: ${teal} !important;
    }
    .ant-tabs-tab-active .ant-tabs-tab-btn {
      color: ${teal} !important;
    }
    .ant-select {
        height: 100%;
    }
    .ant-select-focused .ant-select-selector, :where(.css-dev-only-do-not-override-1xg9z9n).ant-select-outlined:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover .ant-select-selector {
      border-color: ${teal} !important;
    }
    .swiper__icon {
        font-size: 2rem;
        background-color: ${white}80;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        ${layout("center")}
        border: 1px solid ${gray}aa;
        margin-left: ${pxToRem(10)};
        cursor: pointer;
    svg {
        color: ${gray}aa;
    }
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
    .swiper-slide {
        margin: 0;
    }
    :where(.css-dev-only-do-not-override-dkbvqv).ant-pagination .ant-pagination-item-active {
        border-color: ${teal};
        a {
            color: ${teal};
        }
        &:hover {
            border-color: ${teal} !important;
            a {
                color: ${teal};
            }
        }
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
