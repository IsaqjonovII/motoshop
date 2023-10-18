import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { teal, white, borderGray } = colors;
export default styled.div`
  width: 100%;
  max-width: ${pxToRem(678)};
  height: calc(100vh - ${pxToRem(80)});
  background-color: ${white};
  position: fixed;
  top: ${pxToRem(80)};
  box-shadow: 0 ${pxToRem(2)} ${pxToRem(4)} ${borderGray};
  @media screen and (min-width: ${pxToRem(1024)}) {
    display: none;
  }
  right: 0;
    .sidebar__link {
      text-transform: capitalize;
      padding: ${pxToRem(10)} ${pxToRem(30)};
      ${layout("flex")}
      margin: ${pxToRem(8)} 0;
      transition: 150ms ease-in-out;
      svg {
      transition: 150ms;
        color: ${teal};
      }
      &:hover {
        color: ${teal};
        cursor: pointer;
        svg {
            transform: translateX(${pxToRem(5)});
        }
      }
    }

@media screen and (max-width: ${pxToRem(678)}) {
    .sidebar__link {
      padding: ${pxToRem(10)} ${pxToRem(20)};
    }
}
`;
