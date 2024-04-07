import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters, AiOutlineLogin } from "react-icons/ai";
import StyledAuth from "./style";
import { useAppDispatch } from "hooks";
import { IServerError } from "interfaces";
import { routes } from "constants/routes";
import { logIn } from "store/reducers/UserSlice";
import { useLoginMutation } from "services/auth";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { ILoginForm } from "interfaces/forms";

const { HOME } = routes;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { data, isLoading, error }] = useLoginMutation();
  const [authForm, setAuthForm] = useState<ILoginForm>({
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
    if (error) {
      const { data, status } = error as IServerError;
      if (data?.message) {
        toast.error(data.message);
      }
      if (isNaN(parseInt(status))) {
        toast.error("Serverda xatolik. Iltimos birozdan so'ng urinib ko'ring");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  useEffect(() => {
    if (data) {
      dispatch(logIn(data.user));
      toast.success(data.message);
      navigate(HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
        <br />
        <Button type="submit" className="auth__btn" disabled={isLoading}>
          {" "}
          {isLoading ? (
            <AiOutlineLoading3Quarters className="spinning icon" />
          ) : (
            <AiOutlineLogin className="icon" />
          )}{" "}
          Hisobga kirish
        </Button>
      </form>
    </StyledAuth>
  );
};

export default Login;
