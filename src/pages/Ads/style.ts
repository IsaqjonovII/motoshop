import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { gray } = colors;
export const StyledPostAd = styled.div`
  padding: ${pxToRem(30)};
  .post__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${pxToRem(20)};
    & > div {
      width: 100%;
      max-width: ${pxToRem(520)};
    }
  }
  @media only screen and (max-width: ${pxToRem(920)}) {
    .ad__title {
      text-align: center;
    }
    .post__form {
      margin: 0 auto;
      grid-template-columns: 1fr;
      justify-items: center;
    }
    .ad__btn {
      width: 100%;
      max-width: ${pxToRem(520)};
    }
  }
  @media only screen and (max-width: ${pxToRem(768)}) {
    padding: ${pxToRem(20)} 0;
    .ad__title {
      font-size: ${pxToRem(25)};
    }
  }
`;

export default styled.div`
  padding: ${pxToRem(30)} 0;
  .ads__header {
    margin-bottom: ${pxToRem(10)};
  }
  .pagination__wrp {
    margin-top: ${pxToRem(30)};
  }
  .filters__wrp {
    ${layout("grid", { rows: "auto", cols: 6 })}
    gap: 0 ${pxToRem(10)};
    margin-bottom: ${pxToRem(10)};
  }
  .filter {
    height: ${pxToRem(45)};
    .ant-select {
      width: 100%;
    }
  }
  .ant-select-selection-placeholder {
    color: ${gray};
  }
  .ads__header {
    ${layout("flex")}
  }
  .ads__container {
    ${layout("grid", { rows: "auto", cols: 4 })}
    gap: ${pxToRem(10)};
  }
  @media only screen and (max-width: 1300px) {
      .ads__container {
        ${layout("grid", { cols: 3, rows: "auto" })}
      }
  }
  @media only screen and (max-width: 1124px) {
      .filters__wrp {
        ${layout("grid", { rows: 2, cols: 3 })}
        gap: ${pxToRem(10)};
      }
      .ads__container {
        ${layout("grid", { rows: "auto", cols: 2 })}
      }
  }
  @media only screen and (max-width: 768px) {
    .filters__wrp {
      ${layout("grid", { rows: 3, cols: 2 })}
      gap: ${pxToRem(10)};
    }
    .ads__container {
        ${layout("grid", { rows: "auto", cols: 1 })}
    }
  }
  @media only screen and (max-width: 400px) {
    .filters__wrp {
      ${layout("grid", { rows: 6, cols: 1 })}
      position: fixed;
      top: 30%;
      left: 1rem;
      width: calc(100% - 2rem);
    }
  }
`;
