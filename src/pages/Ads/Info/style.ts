import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";

const { teal, gray, borderGray } = colors;

export default styled.div`
  .page__container {
    min-height: 60vh;
    min-height: 60svh;
    ${layout("grid", { cols: 3, rows: 1 })}
  }
  .images {
    grid-column: 1 / 3;
    background-color: red;
  }
  .content {
    grid-column: 3 / 4;
    background-color: green;
    position: sticky;
    top: 0;
  }
`;
