import { IButton } from "interfaces/components";
import StyledButton from "./style";

export const Button = ({ type, children, className }: IButton) => {
  return (
    <StyledButton className={className} type={type ?? "button"}>
      {children}
    </StyledButton>
  );
};
