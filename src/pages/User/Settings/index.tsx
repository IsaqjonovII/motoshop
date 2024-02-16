import CustomModal from "components/Modal";
import { useEffect, type Dispatch, type SetStateAction } from "react";
import { useUserInfoQuery } from "services/user";

export const UpdateUser = ({
  isOpen,
  setisOpen,
  userId,
}: {
  userId: string;
  isOpen: boolean;
  setisOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data, isLoading, error, refetch } = useUserInfoQuery(userId);
  const hideModal = () => setisOpen(false);
  const onOk = () => {
    alert("heeelllo");
  };

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomModal
      title="Ma'lumotlarni yangilash"
      open={onOk}
      close={hideModal}
      isOpen={isOpen}
    >
      <h1>Hello</h1>
    </CustomModal>
  );
};
