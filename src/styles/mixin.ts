import { colors } from "constants/styles";
import { css } from "styled-components";
import { pxToRem } from "utils";

type TGridLayout = {
  cols: number | "auto";
  colsW?: number | string;
  rows: number | "auto";
  rowsH?: number | string;
};
const { red, teal, white } = colors;

export const layout = (layoutStyle: string, gridLayout?: TGridLayout) => css`
  display: ${layoutStyle === "flex" ? "flex" : "grid"};
  ${layoutStyle === "flex"
    ? `align-items: center;
       justify-content: space-between;`
    : layoutStyle === "center"
    ? "place-items: center;"
    : `grid-template-columns: repeat(${gridLayout?.cols}, ${
        gridLayout?.colsW ?? "1fr"
      });
       grid-template-rows: ${
         gridLayout?.rows !== "auto"
           ? `repeat(${gridLayout?.rows}, ${gridLayout?.rowsH ?? "1fr"})`
           : "auto"
       };`}
`;
export const btn = (btnType?: string) => css`
  padding: ${pxToRem(10)} ${pxToRem(20)};
  font-size: ${pxToRem(18)};
  cursor: pointer;
  transition: 200ms;
  border-radius: ${pxToRem(6)};
  ${btnType?.includes("normal")
    ? `
    color: ${white};
      background: ${teal}; 
      border: ${pxToRem(2)} solid transparent;
    `
    : btnType?.includes("danger")
    ? `background-color: ${red}; color: ${red};`
    : ` color: ${teal}; background: transparent; border: ${pxToRem(
        2
      )} solid ${teal};`}
`;
