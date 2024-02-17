import styled from "styled-components";
import { colors } from "constants/styles";

const { gray } = colors;
export const StyledH1 = styled.h1<{
  $size: "sm" | "md" | "lg" | "xl" | "xxl";
  $bold: number;
}>`
  ${({ $size, $bold }) =>
    `
    font-weight: ${$bold};
    color: ${gray};
    ${
      $size === "sm"
        ? `font-size: var(--font-mini)`
        : $size === "md"
        ? `font-size: var(--font-h5)`
        : $size === "lg"
        ? `font-size: var(--font-h3)`
        : $size === "xl"
        ? `font-size: var(--font-h2)`
        : `font-size: var(--font-h1)`
    }
  `}
`;
