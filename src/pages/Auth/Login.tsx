import { Input } from "antd";
import StyledAuth from "./style";

const Login = () => {
  return (
    <StyledAuth>
      <h1 className="auth__title">Login</h1>
      <form>
        <div>
          <label className="inp__label" htmlFor="name">
            Ismingizni kiriting
          </label>
          <Input className="inp" type="text" id="name" name="name" />
        </div>

        <div>
          <label className="inp__label" htmlFor="email">
            Email
          </label>
          <Input className="inp" type="email" id="email" name="email" />
        </div>

        <div>
          <label className="inp__label" htmlFor="password">
            Parol kiriting
          </label>
          <Input
            className="inp"
            type="password"
            // iconRender={(visible) => (visible ? <EyeTwoTone /> : <Eye />)}
            id="password"
            name="password"
          />
        </div>
      </form>
    </StyledAuth>
  );
};

export default Login;
