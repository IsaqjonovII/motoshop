import styled from "styled-components";
import { pxToRem } from "utils";
import { layout } from "styles/mixin";
import { colors } from "constants/styles";

const { gray } = colors;
export default styled.main`
  .banner__img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    user-select: none;
  }
  .section {
    margin: ${pxToRem(50)} auto;
    position: relative;
  }
  .swiper__nav {
    margin-bottom: ${pxToRem(20)};
  }
  .grid__wrp {
    ${layout("grid", { cols: 3, rows: "auto" })}
    grid-gap: ${pxToRem(30)};
  }
  .swiper-button-prev, .swiper-button-next {
    display: none !important;
  }
  .filters__wrp {
    ${layout("grid", { rows: "auto", cols: 5 })}
    gap: ${pxToRem(10)};
    margin: ${pxToRem(20)} 0;
    overflow-x: auto;
  }
  .filter {
    height: ${pxToRem(45)};
    .ant-select{
      width: 100%;
    }
  }
  .ant-select-selection-placeholder {
    color: ${gray};
  }
  @media only screen and (max-width: ${pxToRem(1024)}) {
    .grid__wrp {
      ${layout("grid", { cols: 2, rows: "auto" })}
      grid-gap: ${pxToRem(15)};
    }
  }
  @media only screen and (max-width: ${pxToRem(768)}) {
    .grid__wrp {
      ${layout("grid", { cols: 1, rows: "auto" })}
      grid-gap: ${pxToRem(20)};
    }
    .filters__wrp {
    ${layout("grid", { rows: "auto", cols: 3 })}
    display: none;
    }
  }
`;
