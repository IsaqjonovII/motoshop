import { LoginOutlined } from "@ant-design/icons";
import { ChangeEvent, FormEvent, useState } from "react";
import StyledAuth from "./style";
import { Input } from "components/Input";
import { Button } from "components/Button";

const Login = () => {
  const [authForm, setAuthForm] = useState({
    phone: "",
    password: "",
  });

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthForm({
      ...authForm,
      [name]: value,
    });
  };

  const loginUser = (e: FormEvent) => {
    e.preventDefault();

  };

  return (
    <StyledAuth>
      <h1 className="auth__title">Login</h1>
      <form onSubmit={loginUser} autoComplete="off">
        <Input
          type="number"
          className="inp"
          id="phone"
          name="phone"
          label="Telefon raqam"
          value={authForm.phone}
          onChange={handleChanges}
        />
        <Input
          className="inp"
          label="Parol"
          type="password"
          id="password"
          name="password"
          value={authForm.password}
          onChange={handleChanges}
        />
        <Button type="submit" className="auth__btn">
          {" "}
          <LoginOutlined /> Hisobga kirish
        </Button>
      </form>
    </StyledAuth>
  );
};

export default Login;
