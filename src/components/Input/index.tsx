import { IInput } from "interfaces/components";
import { StyledInput } from "./style";

export const Input = ({
  id,
  name,
  type,
  className,
  label,
  placeholder,
  value,
  onChange,
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
            value={value}
            minLength={8}
            onChange={onChange}
          />
        </div>
      ) : (
        <input
          className={className}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type ?? "text"}
          required
        />
      )}
    </StyledInput>
  );
};
