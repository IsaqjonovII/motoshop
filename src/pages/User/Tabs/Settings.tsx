import { Form } from "antd";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import type {ChangeEvent, Dispatch, SetStateAction } from "react";
import { useAppSelector, useAppDispatch } from "hooks";
import { IServerError } from "interfaces";
import { logIn, logOut } from "store/reducers/UserSlice";
import { useDeleteUserMutation, useUpdateUserMutation } from "services/auth";
import { Text } from "components/Text";
import { Input } from "components/Input";
import CustomModal from "components/Modal";
import { useNavigate } from "react-router-dom";
import { routes } from "constants/routes";

interface IUpdateForm { name: string, phone: string }

export const ChangeUserInfo = ({isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ auth }) => auth.user);
  const [userForm, setUserForm] = useState<IUpdateForm>({ name: (user!).name, phone: (user!).phone.replace(/998/g, "") });
  const [updateUser, { data, isLoading, error }] = useUpdateUserMutation();

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
      setUserForm({
        ...userForm,
        [name]: value,
      });
  }

  function close() {
    setIsOpen(false);
  }
  function handleChange() {
    updateUser({
      id: user?._id,
      ...userForm,
      phone: "998" + userForm.phone,
    })
  }

  useEffect(() => {
    if(data){
      setIsOpen(false);
      dispatch(logIn(data))
    } 
  }, [data, dispatch, setIsOpen])

  useEffect(() => {
    if(error) console.log(error);
  }, [error])

  return (
    <CustomModal
      close={close}
      handleOk={handleChange}
      isOpen={isOpen}
      isLoading={isLoading}
      title="Ma'lumotlarni o'zgaritirish"
      okText="O'zgartirish"
    >
      <Form autoComplete="off">
        <Input
          name="name"
          id="user-name"
          label="Ismingiz"
          value={userForm.name}
          onChange={handleInputChange}
        />
        <Input
          name="phone"
          type="phone"
          id="user-phone"
          label="Telefon raqamingiz"
          value={userForm.phone}
          onChange={handleInputChange}
        />
      </Form>
    </CustomModal>
  );
};

const { HOME }  =routes;

export const DeleteUser = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>>}) => {
  const navigate = useNavigate();
  const userId = useAppSelector(({ auth }) => auth.user?._id);
  const [deleteUser, { data, isLoading, error }] = useDeleteUserMutation();
  const dispatch = useAppDispatch();
  
  function close() {
    setIsOpen(false);
  }
  function handleDelete() {
    deleteUser(userId);
  }
  useEffect(() => {
    if(data?.message) {
      dispatch(logOut());
      setIsOpen(false);
      toast.success("Hisobingiz o'chirildi :(")
      navigate(HOME);
    }
  }, [data, dispatch, navigate, setIsOpen])

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
  }, [error])

  return (
    <CustomModal
      close={close}
      handleOk={handleDelete}
      isOpen={isOpen}
      title=" Rostdan ham hisobingizni butunlay o'chirmoqchimisiz?"
      okText="Ha, O'chirmoqchiman"
      isLoading={isLoading}
    >
      <Text size="sm">
        Barcha e&apos;lonlaringiz va ma&apos;lumotlaringiz o&apos;chib ketadi
      </Text>
    </CustomModal>
  );
};
