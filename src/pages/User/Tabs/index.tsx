import StyledTabs from "./style";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { useState } from "react";
import { ChangeUserInfo, DeleteUser } from "./Settings";

const UpdateUser = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  return (
    <StyledTabs>
      <div className="row">
        <Text size="md">Ma'lumotlarni o'zgaritirish</Text>
        <Button onClick={() => setIsFormModalOpen(true)}>
          O&apos;zgartirish
        </Button>
      </div>
      <div className="danger__zone">
        <div className="row">
          <Text size="md">Hisobni o&apos;chirish</Text>
          <Button onClick={() => setIsDeleteModalOpen(true)}>
            O&apos;chirish
          </Button>
        </div>
      </div>

      <ChangeUserInfo isOpen={isFormModalOpen} setIsOpen={setIsFormModalOpen} />
      <DeleteUser isOpen={isDeleteModalOpen} setIsOpen={setIsDeleteModalOpen} />
    </StyledTabs>
  );
};
export default UpdateUser;
