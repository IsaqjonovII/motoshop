import { Modal } from "antd";
import { IModal } from "interfaces/components";
import StyledModal from "./style";

const CustomModal = ({
  children,
  title,
  isOpen,
  isLoading,
  close,
  open,
}: IModal) => {
  return (
    <StyledModal>
      <Modal
        title={title}
        open={isOpen}
        onOk={open}
        confirmLoading={isLoading}
        onCancel={close}
      >
        {children}
      </Modal>
    </StyledModal>
  );
};

export default CustomModal;
