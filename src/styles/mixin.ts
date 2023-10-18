import { css } from "styled-components";

type TGridLayout = {
  cols: number | string;
  colsW?: number | string;
  rows: number | string;
  rowsH?: number | string;
};

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
       grid-template-rows: repeat(${gridLayout?.rows}, ${
        gridLayout?.rowsH ?? "1fr"
      });`}
`;
