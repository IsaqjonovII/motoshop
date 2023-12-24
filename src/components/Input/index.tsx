import { IInput } from "interfaces/components";
import { StyledInput } from "./style";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";

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
  const [isPassword, setIsPassword] = useState(false);
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
            type={isPassword ? "text" : "password"}
            required
            value={value}
            minLength={8}
            onChange={onChange}
          />
          {isPassword ? (
            <EyeOutlined onClick={() => setIsPassword(!isPassword)} />
          ) : (
            <EyeInvisibleOutlined onClick={() => setIsPassword(!isPassword)} />
          )}
        </div>
      ) : type === "phone" ? (
        <div className="inp__phone">
          <div className="phone__code">+998</div>
          <input
            className={className}
            name={name}
            type="tel"
            id={id}
            min={0}
            value={value}
            minLength={9}
            maxLength={9}
            pattern="[0-9]{9}"
            onChange={onChange}
            placeholder={placeholder}
            required
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
          min={type === "number" ? 1 : 0}
        />
      )}
    </StyledInput>
  );
};
