import { Select } from "antd";
import StyledSelect from "./style";

import type { SelectProps } from "antd";

interface Props {
  options: SelectProps["options"];
  placeholder: string;
  onChange: (val: string[]) => void;
  mode: "tags" | "multiple";
}

const CustomSelect = ({ options, placeholder, onChange, mode }: Props) => {
  return (
    <StyledSelect>
      <Select
        mode={mode}
        style={{ width: "100%", maxWidth: "100%" }}
        onChange={onChange}
        tokenSeparators={[","]}
        options={options}
        placeholder={placeholder}
      />
    </StyledSelect>
  );
};

export default CustomSelect;
