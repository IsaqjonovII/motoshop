/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "components/Input";
import StyledAuth from "./style";

const Login = () => {
  const loginUser = (e: SubmitEvent) => {
    console.log(e.target);
  };

  return (
    <StyledAuth>
      <h1 className="auth__title">Login</h1>
      <form onSubmit={(e: any) => loginUser(e)} autoComplete="off">
        <Input className="inp" id="name" name="name" label="Ismingiz" />
        <Input
          type="number"
          className="inp"
          id="phone"
          name="phone"
          label="Telefon raqam"
        />
        <Input
          className="inp"
          type="email"
          id="email"
          name="email"
          label="Email"
        />
        <Input
          className="inp"
          label="Parol"
          type="password"
          id="password"
          name="password"
        />
        <button>Hisobga kirish</button>
      </form>
    </StyledAuth>
  );
};

export default Login;
