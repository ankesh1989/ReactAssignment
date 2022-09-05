import React, { useEffect, useRef, useState } from "react";
import { Button, Table, Tag, message, Form, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getUsers,
  createUser,
  editUser,
} from "../thunks/userThunk";
import styles from "./User.module.css";
import { selectUser } from "../services/userSlice";
import AppModel from "../components/AppModel";
import UserForm from "../components/UserForm";

const User = () => {
  const [selectedRow, setSelectedRow] = useState("");
  const [form] = Form.useForm();
  const [appModel, setAppModel] = useState({
    isVisible: false,
    title: "Model Title",
    okText: "Ok",
    action: "",
  });
  const dispatch = useDispatch();
  const firstRender = useRef(true);

  const users = useSelector(selectUser);

  const onSelectChange = (newSelectedRowKey, selectedRows) => {
    const [selectedRow] = selectedRows;
    setSelectedRow(selectedRow);
  };

  const rowSelection = {
    selectedRowKeys: [selectedRow?._id],
    onChange: onSelectChange,
  };

  useEffect(() => {
    if (firstRender?.current) {
      firstRender.current = false;
      dispatch(getUsers());
    } else {
    }
  }, [dispatch]);
  const columns = [
    {
      title: "Name",
      dataIndex: "firstname",
      render: (_, data) => data?.firstname + " " + data?.lastname,
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "confirmed",
      render: (confirmed) =>
        confirmed ? (
          <Tag color="green">Confirmed</Tag>
        ) : (
          <Tag color="volcano">Not Confirmed</Tag>
        ),
      key: "status",
    },
  ];

  const onNewUser = () => {
    form.resetFields();
    setAppModel((prev) => {
      return {
        ...prev,
        isVisible: true,
        title: "Create User",
        okText: "Create",
        action: "create",
      };
    });
  };

  const onUserEdit = () => {
    const fieldsValues = { ...selectedRow, confirm: selectedRow?.password };
    form.setFieldsValue({
      ...fieldsValues,
    });
    setAppModel((prev) => {
      return {
        ...prev,
        isVisible: true,
        title: "Edit User",
        okText: "Save",
        action: "edit",
      };
    });
  };

  const onSubmitHandler = (values) => {
    const payload = values;
    delete payload.confirm;

    payload.phone = +(payload.prefix + payload.phone);
    delete payload.prefix;

    appModel?.action === "create" &&
      dispatch(createUser(payload)).then((res) => {
        console.log("res :>> ", res);
        if (res?.type?.includes("fulfilled")) {
          message?.success("User created successfully");
          form.resetFields();
          onAppModelCancel();
          dispatch(getUsers());
          setSelectedRow("");
        } else if (res?.type?.includes("rejected")) {
          message?.error(res?.payload?.data?.message);
        }
      });

    appModel?.action === "edit" &&
      dispatch(
        editUser({ pathParams: { id: selectedRow?._id }, body: payload })
      ).then((res) => {
        if (res?.type?.includes("fulfilled")) {
          message?.success("User updated successfully");
          form.resetFields();
          onAppModelCancel();
          dispatch(getUsers());
          setSelectedRow("");
        }
      });
  };

  const onOkHandler = () => {
    form
      .validateFields()
      .then((values) => {
        onSubmitHandler(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const onUserDelete = () => {
    dispatch(
      deleteUser({
        pathParams: { id: selectedRow?._id },
      })
    )?.then((res) => {
      if (res?.type?.includes("fulfilled")) {
        message?.success(res?.payload?.message);
        dispatch(getUsers());
        setSelectedRow([]);
      }
    });
  };

  const onAppModelCancel = () => {
    setAppModel((prev) => {
      return {
        ...prev,
        isVisible: false,
        title: "Model Title",
        okText: "Ok",
      };
    });
  };

  return (
    <section>
      <div className={`${styles?.tableWarpper}`}>
        <div className={`${styles?.btnWrapper}`}>
          {selectedRow && (
            <Button type="primary" onClick={() => setSelectedRow("")}>
              Clear Selection
            </Button>
          )}

          <div className={`${styles?.rgtButtons}`}>
            <Button type="primary" onClick={onNewUser}>
              New
            </Button>
            {selectedRow && (
              <>
                <Button type="primary" onClick={onUserEdit}>
                  Edit
                </Button>
                <Popconfirm
                  title="Are you sure to delete this user?"
                  onConfirm={onUserDelete}
                  okText="Confirm"
                  cancelText="Cancel"
                >
                  <Button type="danger">Delete</Button>
                </Popconfirm>
              </>
            )}
          </div>
        </div>

        <Table
          dataSource={users?.users}
          columns={columns}
          pagination={false}
          rowSelection={{
            type: "radio",
            ...rowSelection,
          }}
          rowKey={(record) => record?._id}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setSelectedRow(record);
              },
            };
          }}
        />
      </div>

      {appModel?.isVisible && (
        <AppModel
          setIsModalVisible
          isModalVisible={appModel?.isVisible}
          setModelState={setAppModel}
          title={appModel?.title}
          okText={appModel?.okText}
          footer={[
            <div>
              <Button type="secondary" onClick={onAppModelCancel}>
                Back
              </Button>
              <Button type="primary" onClick={onOkHandler}>
                {appModel?.okText}
              </Button>
            </div>,
          ]}
        >
          <UserForm form={form} />
        </AppModel>
      )}
    </section>
  );
};

export default User;
