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

  .filters__wrp {
    ${layout("grid", { rows: "auto", cols: "6" })}
    gap: 0 ${pxToRem(10)};
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
`;
