import { Loading3QuartersOutlined, LoginOutlined } from "@ant-design/icons";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import StyledAuth from "./style";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { useLoginMutation } from "services/user";
import { toast } from "react-toastify";
import { IBackendResponse } from "interfaces";
import { routes } from "constants/routes";
import { useNavigate } from "react-router-dom";
import { logIn } from "store/reducers/AuthSlice";

const { HOME } = routes;
const Login = () => {
  const navigate = useNavigate();
  const [login, { data, isLoading, error }] = useLoginMutation();
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

  const loginUser = async (e: FormEvent) => {
    e.preventDefault();
    const { phone, password } = authForm;
    await login({ phone: "998" + phone, password });
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      logIn(data);
      toast.success(data.msg);
      navigate(HOME);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      const err = error as IBackendResponse;
      toast.error(err.data.msg);
    }
  }, [error]);

  return (
    <StyledAuth>
      <h1 className="auth__title">Kirish</h1>
      <form onSubmit={loginUser} autoComplete="off">
        <Input
          type="phone"
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
          {isLoading ? (
            <Loading3QuartersOutlined spin />
          ) : (
            <LoginOutlined />
          )}{" "}
          Hisobga kirish
        </Button>
      </form>
    </StyledAuth>
  );
};

export default Login;
