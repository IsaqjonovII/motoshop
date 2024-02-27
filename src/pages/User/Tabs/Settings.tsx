import { Form } from "antd";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Input } from "components/Input";
import CustomModal from "components/Modal";
import { Text } from "components/Text";
import { useAppSelector } from "hooks";

export const ChangeUserInfo = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const user = useAppSelector(({ auth }) => auth.user);
  const [userForm, setUserForm] = useState<{ name: string, phone: number | string }>({
    name: (user!).name,
    phone: (user!).phone
  });

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
  function handleDelete() {
    setIsOpen(false);
  }

  return (
    <CustomModal
      close={close}
      handleOk={handleDelete}
      isOpen={isOpen}
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
export const DeleteUser = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  function close() {
    setIsOpen(false);
  }
  function handleDelete() {
    setIsOpen(false);
  }

  return (
    <CustomModal
      close={close}
      handleOk={handleDelete}
      isOpen={isOpen}
      title="O'chirish"
      okText="Ha, O'chirmoqchiman"
    >
      <Text size="md">
        Rostdan ham hisobingizni butunlay o'chirmoqchimisiz?
      </Text>
    </CustomModal>
  );
};
