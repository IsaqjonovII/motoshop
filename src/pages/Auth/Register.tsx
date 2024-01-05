import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Loading3QuartersOutlined, UserAddOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import StyledAuth from "./style";
import { IServerError } from "interfaces";
import { Input } from "components/Input";
import { routes } from "constants/routes";
import { Button } from "components/Button";
import { logIn } from "store/reducers/AuthSlice";
import { useRegisterMutation } from "services/user";
import { useAppDispatch } from "hooks";

const { HOME } = routes;

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [register, { data, isLoading, error }] = useRegisterMutation();
  const [authForm, setAuthForm] = useState({
    name: "",
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
  useEffect(() => {
    if (error) {
      const { status, data } = error as IServerError;
      if (status.includes("FETCH_ERROR"))
        toast.error("Serverda xatolik. Iltimos birozdan so'ng urinib ko'ring");
      if (data?.message) toast.error(data.message);
      console.log(error);
    }
    if (data) {
      toast.success(data.message);
      dispatch(logIn(data.user));
      navigate(HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, data]);

  const registerUser = async (e: FormEvent) => {
    e.preventDefault();
    const { name, phone, password } = authForm;
    await register({ phone: "998" + phone, password, name });
  };
  return (
    <StyledAuth>
      <h1 className="auth__title">Ro'yhatdan o'tish</h1>
      <form onSubmit={registerUser} autoComplete="off">
        <Input
          className="inp"
          id="name"
          name="name"
          label="Ismingiz"
          value={authForm.name}
          onChange={handleChanges}
        />
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
          {isLoading ? <Loading3QuartersOutlined spin /> : <UserAddOutlined />}
          Hisob yaratish
        </Button>
      </form>
    </StyledAuth>
  );
};

export default Register;
