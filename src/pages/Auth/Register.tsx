import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters, AiOutlineUserAdd } from "react-icons/ai";
import { useAppDispatch } from "hooks";
import { IServerError } from "interfaces";
import { logIn } from "store/reducers/UserSlice";
import { useRegisterMutation } from "services/auth";
import StyledAuth from "./style";
import { Input } from "components/Input";
import { routes } from "constants/routes";
import { Button } from "components/Button";

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
      console.log(error);
      const { data, status } = error as IServerError;
      if (data?.message) {
        toast.error(data.message);
      }
      if (isNaN(parseInt(status))) {
        toast.error("Serverda xatolik. Iltimos birozdan so'ng urinib ko'ring");
      }
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    if (data) {
      toast.success(data.message);
      dispatch(logIn(data.user));
      navigate(HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
        <br />
        <Button type="submit" className="auth__btn">
          {" "}
          {isLoading ? (
            <AiOutlineLoading3Quarters className="spinning icon" />
          ) : (
            <AiOutlineUserAdd className="icon" />
          )}
          Hisob yaratish
        </Button>
      </form>
    </StyledAuth>
  );
};

export default Register;
