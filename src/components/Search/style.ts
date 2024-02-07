import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { borderGray, gray, teal } = colors;
export default styled.div<{ $isInputActive: boolean }>`
  ${layout("flex")}
  width: 100%;
  height: ${pxToRem(45)};
  max-width: ${pxToRem(768)};
  padding: ${pxToRem(5)} ${pxToRem(10)};
  box-shadow: 0 0 ${pxToRem(3)} ${borderGray};
  border: ${pxToRem(1)} solid
    ${({ $isInputActive }) => ($isInputActive ? teal : `${gray}40`)};
  border-radius: 0.25rem;
  ${({ $isInputActive }) =>
    $isInputActive ? `outline: 0.2rem solid ${teal}40;` : null}
  margin: 0 ${pxToRem(10)};
  margin-left: auto;
  .search__icon {
    font-size: ${pxToRem(22)};
    color: ${gray};
    margin-right: ${pxToRem(10)};
  }
  #search-input {
    border: none;
    outline: none;
    flex: 1;
  }
  @media screen and (max-width: ${pxToRem(550)}) {
    grid-row: 2 / 3;
    grid-column: 1 / 7;
  }
`;
