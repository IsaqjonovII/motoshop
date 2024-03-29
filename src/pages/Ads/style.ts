import styled from "styled-components";
import { pxToRem } from "utils";
import { colors } from "constants/styles";
import { btn, layout } from "styles/mixin";

const { teal, gray } = colors;
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
  .switch__wrp,
  .price__wrp {
    ${layout("flex")}
  }
  .ant-switch.ant-switch-checked,
  .ant-switch.ant-switch-checked:hover {
    background-color: ${teal};
  }
  .ad__btn {
    ${btn("normal")}
    width: 100%;
    max-width: ${pxToRem(520)};
  }
  .ad__btn:disabled {
    background-color: ${teal}40;
    color: ${gray};
    cursor: not-allowed;
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
  min-height: 80svh;
  .pagination__wrp {
    margin-top: ${pxToRem(30)};
  }
  .ads__header {
    ${layout("flex")}
    justify-content: center;
    margin-bottom: ${pxToRem(15)};
  }
  .ads__container {
    ${layout("grid", { rows: "auto", cols: 4 })}
    gap: ${pxToRem(10)};
  }
  @media only screen and (max-width: 1124px) {
    .filters__wrp {
      ${layout("grid", { rows: 2, cols: 3 })}
      gap: ${pxToRem(10)};
    }
    .ads__container {
      ${layout("grid", { rows: "auto", cols: 3 })}
    }
  }
  @media only screen and (max-width: 768px) {
    .filters__wrp {
      ${layout("grid", { rows: 3, cols: 2 })}
      gap: ${pxToRem(10)};
    }
    .ads__container {
      ${layout("grid", { rows: "auto", cols: 2 })}
    }
  }
  @media only screen and (max-width: 550px) {
    .filters__wrp {
      ${layout("grid", { rows: 6, cols: 1 })}
    }
    .ads__container {
      ${layout("grid", { rows: "auto", cols: 1 })}
    }
  }
`;
