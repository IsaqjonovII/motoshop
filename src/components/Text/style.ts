import styled from "styled-components";
import { colors } from "constants/styles";
import { pxToRem } from "utils";

const { gray } = colors;
export const StyledH1 = styled.div<{
  $size: "sm" | "md" | "lg" | "xl" | "xxl";
  $bold: number;
}>`
  ${({ $size, $bold }) =>
    `
    font-weight: ${$bold};
    color: ${gray};
    ${
      $size === "sm"
        ? `font-size: ${pxToRem(16)}`
        : $size === "md"
        ? `font-size: ${pxToRem(20)}`
        : $size === "lg"
        ? `font-size: ${pxToRem(25)}`
        : $size === "xl"
        ? `font-size: ${pxToRem(35)}`
        : `font-size: ${pxToRem(40)}`
    }
  `}
`;
