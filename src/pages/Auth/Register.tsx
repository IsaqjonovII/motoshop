import { LoginOutlined } from "@ant-design/icons";
import { ChangeEvent, FormEvent, useState } from "react";
import StyledAuth from "./style";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { baseUrl } from "constants";

const Register = () => {
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

  const registerUser = async (e: FormEvent) => {
    e.preventDefault();
    console.log(authForm);

    try {
      const response = await fetch(`${baseUrl}auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(authForm),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      console.log("Fetching is completed");
    }
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
          <LoginOutlined /> Hisob yaratish
        </Button>
      </form>
    </StyledAuth>
  );
};

export default Register;
