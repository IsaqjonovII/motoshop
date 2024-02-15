import { colors } from "constants/styles";
import styled from "styled-components";
import { btn, layout } from "styles/mixin";
import { pxToRem } from "utils";

const { teal, white } = colors;
export default styled.button`
  ${btn("normal")}
  padding: ${pxToRem(10)} ${pxToRem(15)};
  @media only screen and (max-width: 768px) {
    font-size: ${pxToRem(16)};
  }
`;
export const StyledRadioBtn = styled.div`
  border-color: ${teal};
  .ant-radio-group {
    ${layout("flex")}
    width: 100%;
    max-width: ${pxToRem(550)};
    height: ${pxToRem(45)};
    border-radius: ${pxToRem(6)};
    .ant-select-selector {
      border: none !important;
      & :focus,
      :focus-within,
      :focus-visible {
        border: none !important;
        outline: none !important;
      }
    }
    .ant-radio-button-wrapper-checked:where(:hover, :focus-visible, :focus, :focus-within, :checked, :active),
    .ant-radio-button-wrapper-checked {
      color: ${white};
      border-color: ${teal};
      background-color: ${teal};
    }
    .ant-radio-button-wrapper:hover {
      color: ${white};
      background-color: ${teal};
      opacity: 0.7;
    }
    .ant-radio-button-wrapper {
      height: 100%;
      ${layout("flex")}
    }
    .ant-radio-button-wrapper-checked::before {
      background-color: ${teal};
    }
  }
`;
