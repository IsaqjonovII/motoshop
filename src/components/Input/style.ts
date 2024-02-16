import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { teal, gray, white, red } = colors;

const StyledInput = styled.div`
  position: relative;
  input, textarea, .ant-select, .ant-picker {
    width: 100%;
    max-width: ${pxToRem(550)};
    height: ${pxToRem(45)};
    border: ${pxToRem(1)} solid ${gray}30;
    outline: none;
    background-color: ${white};
    padding: 0 ${pxToRem(10)};
    border-radius: ${pxToRem(6)};
    font-size: ${pxToRem(17)};
    margin-bottom: ${pxToRem(15)};
    &:where(:focus, :focus-visible, :focus-within) {
      border-color: ${teal};
      outline: ${pxToRem(2)} solid ${teal}70;
    }
    .ant-select-selector, .ant-picker-input {
      border: none !important;
      :where(:focus, :focus-within, :focus-visible) {
      border: none !important;
        outline: none !important;
      }
    }
  }
  .ant-select-focused .ant-select-selector,
  .ant-select-selector:focus,
  .ant-select-selector:active,
  .ant-select-open .ant-select-selector {
    border: none !important;
    box-shadow: none !important;
}
textarea {
  height: ${pxToRem(120)};
  padding: ${pxToRem(8)};
  resize: none;
}
.inp__label {
  display: block;
  font-size: ${pxToRem(19)};
  margin: ${pxToRem(10)} 0;
}
.phone__code {
  font-size: ${pxToRem(18)};
}
.inp__password input, .inp__phone input{
  all: unset;
  flex: 1;
  height: 100%;
  font-size: ${pxToRem(17)};
}
.inp__password, .inp__phone {
  ${layout("flex")}
  max-width: ${pxToRem(550)};
  height: ${pxToRem(45)};
  border: ${pxToRem(1)} solid ${gray}40;
  outline: none;
  background-color: ${white};
  padding: 0 ${pxToRem(10)};
  border-radius: ${pxToRem(6)};
  &:focus,
  &:hover {
    border-color: ${teal};
    outline: ${pxToRem(2)} solid ${teal}70;
  }
}
.selected__images {
  ${layout("flex")}
  flex-wrap: wrap;
  justify-content: start;
  gap: ${pxToRem(10)};
}
.image__container {
  position: relative;
  width: ${pxToRem(80)};
  height: ${pxToRem(80)};
  border: ${pxToRem(1)} solid ${gray}50;
  border-radius: ${pxToRem(10)};
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${gray}90;
    opacity: 0;
    transition: 200ms ;
    z-index: -1;
  }
}
.preview__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
#inputfile {
  display: none;
}
.remove__image {
  opacity: 0;
  background-color: ${red};
  border: none;
  color: ${white};
  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(5)} ${pxToRem(10)};
  position: absolute;
  transition: 200ms ;
  top: 50%;
  left: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
}
.image__container:hover::before, .image__container:hover .remove__image {
  opacity: 1;
}
.add__image {
  width: ${pxToRem(80)};
  height: ${pxToRem(80)};
  display: grid;
  place-items: center;
  text-align: center;
  padding: ${pxToRem(10)} 0;
  border: ${pxToRem(1)} dashed ${gray};
  cursor: pointer;
}
.container {
  display: flex;
  gap: ${pxToRem(10)};
}
@media only screen and (max-width: ${pxToRem(768)}) {
  .remove__image {
    opacity: 1;
    top: ${pxToRem(10)};
    left: 80%;
  }
  input, textarea, .ant-select  {
    font-size: ${pxToRem(15)};
  }
  .inp__label {
  font-size: ${pxToRem(17)};
  }
}
`;

export { StyledInput };
