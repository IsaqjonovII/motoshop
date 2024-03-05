import { IText } from "interfaces/components";
import { StyledH1 } from "./style";

export const Text = ({ className, children, size, bold, center }: IText) => {
  return (
    <StyledH1
      className={className}
      $size={size}
      $bold={bold}
      style={center ? { textAlign: "center" } : { textAlign: "unset" }}
    >
      {children}
    </StyledH1>
  );
};
