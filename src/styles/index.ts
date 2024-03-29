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
        font-family: 'lato Normal', Arial, sans-serif;
    }
    body {
        background-color: ${bgGray};
    }
    a {
        text-decoration: none;
        color: inherit;
        &:hover {
            color: inherit;
        }
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
    :where(.swiper-button-next, .swiper-button-prev)::after {
        display: none;
    }
    .ant-tabs-ink-bar, .ant-btn-primary {
      background: ${teal} !important;
    }
    .ant-btn-default:hover {
        border-color: ${teal} !important;
        color: ${teal} !important;
    }
    .ant-tabs-tab-active .ant-tabs-tab-btn {
      color: ${teal} !important;
    }
    .ant-select {
        height: 100%;
    }
    .ant-select-focused .ant-select-selector, .ant-select-outlined:hover .ant-select-selector {
      border-color: ${teal} !important;
    }
    .swiper__icon {
        font-size: 2rem;
        background-color: ${white}80;
        width: 2.5rem;
        height: 2.5rem;
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
    .ant-pagination .ant-pagination-item-active {
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
    .fixed-position {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
    }
    .page-spinner {
        width: 100%;
        height: 100vh;
        height: 100svh;
        background-color: ${bgGray}dd;
        ${layout("center")}
    }
    .not__found {
        min-height: 50svh;
        padding: 3rem 0;
        text-align: center;
        a {
            color:${teal};
        }
    }
    .carousel__loaders {
        ${layout("grid", { cols: 4, rows: "auto" })}
        width: 100%;
        gap: ${pxToRem(20)}; 
        .loader {
            width: 100%;
            height: 300px;
            border: ${pxToRem(1)} solid ${gray}30;
            padding: ${pxToRem(10)};
            border-radius: ${pxToRem(10)};
            .ant-skeleton-image {
                margin-bottom: ${pxToRem(50)};
            }
        }
    }
    @media only screen and (max-width: 1024px) {
        .carousel__loaders {
        ${layout("grid", { cols: 3, rows: "auto" })}
        }
    }
    @media only screen and (max-width: 768px) {
        .carousel__loaders {
        ${layout("grid", { cols: 2, rows: "auto" })}
        }
        .swiper__icon {
            transform: scale(.8);
        }
    }
    @media only screen and (max-width: 550px) {
        .carousel__loaders {
        ${layout("grid", { cols: 1, rows: 1 })}
        }
    }
`;
