import styled from "styled-components";
import { pxToRem } from "utils";

export const StyledH1 = styled.div<{
  $size: "sm" | "md" | "lg" | "xl" | "xxl";
}>`
  ${({ $size }) =>
    $size === "sm"
      ? `font-size: ${pxToRem(16)}`
      : $size === "md"
      ? `font-size: ${pxToRem(20)}`
      : $size === "lg"
      ? `font-size: ${pxToRem(30)}`
      : $size === "xl"
      ? `font-size: ${pxToRem(35)}`
      : `font-size: ${pxToRem(40)}`}
`;
