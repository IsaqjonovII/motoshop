import { IInput } from "interfaces/components";
import { StyledInput } from "./style";

export const Input = ({
  id,
  name,
  type,
  className,
  label,
  placeholder,
}: IInput) => {
  return (
    <StyledInput>
      <label className="inp__label" htmlFor={id}>
        {label}
      </label>
      {type?.includes("password") ? (
        <div className="inp__password">
          <input
            className={className}
            name={name}
            id={id}
            placeholder={placeholder}
            type="password"
            required
            minLength={8}
          />
        </div>
      ) : (
        <input
          className={className}
          name={name}
          id={id}
          placeholder={placeholder}
          type={type ?? "text"}
          required
        />
      )}
    </StyledInput>
  );
};
