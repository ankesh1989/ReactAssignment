import { Modal } from "antd";

const AppModel = ({
  setModelState,
  isModalVisible,
  children,
  title,
  okText,
  footer,
  handleOk,
}) => {
  const handleCancel = () => {
    setModelState((prev) => {
      return {
        ...prev,
        isVisible: false,
        title: "Model Title",
        okText: "Ok",
      };
    });
  };

  return (
    <>
      <Modal
        destroyOnClose={true}
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={okText}
        cancelText="Back"
        footer={footer}
      >
        {children}
      </Modal>
    </>
  );
};

export default AppModel;
