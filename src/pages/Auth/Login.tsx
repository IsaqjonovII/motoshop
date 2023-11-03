import { Loading3QuartersOutlined, LoginOutlined } from "@ant-design/icons";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import StyledAuth from "./style";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { useLoginMutation } from "services/user";
import { IBackendErr } from "interfaces";
import { routes } from "constants/routes";
import { logIn } from "store/reducers/AuthSlice";
import { useAppDispatch } from "hooks";

const { HOME } = routes;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
      dispatch(logIn(data.user));
      toast.success(data.msg);
      navigate(HOME);
    }
    if (error) {
      const err = error as IBackendErr;
      if (err?.status === "FETCH_ERROR") {
        toast.error("Serverda xatolik. Iltimos birozdan so'ng urinib ko'ring");
      } else {
        toast.error(err.data.msg);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

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
