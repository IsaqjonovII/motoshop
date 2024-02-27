import { Modal } from "antd";
import { IModal } from "interfaces/components";
import StyledModal from "./style";

const CustomModal = ({
  children,
  title,
  isOpen,
  isLoading,
  close,
  handleOk,
  cancelText,
  okText,
}: IModal) => {
  return (
    <StyledModal>
      <Modal
        title={title}
        open={isOpen}
        onOk={handleOk}
        confirmLoading={isLoading}
        onCancel={close}
        cancelText={cancelText ?? "Bekor qilish"}
        okText={okText ?? "Tasdiqlash"}
        centered
      >
        {children}
      </Modal>
    </StyledModal>
  );
};

export default CustomModal;
