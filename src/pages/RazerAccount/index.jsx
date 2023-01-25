import React, { useState } from "react";
import { Button, Popconfirm, Space, Table } from "antd";
// import { QuestionCircleOutlined } from "@ant-design/icons";
import { useLoad } from "../../hooks/request";
import { razerAccount } from "../../utils/urls";
import RazerAccountPost from "../../components/RazerAccountPost";
import RazerBackupView from "../../components/RazerBackupView";
import RazerAccountEdit from "../../components/RazerAccountEdit";

const { Column } = Table;

const RazerAccount = () => {

  const getAccounts = useLoad({ url: razerAccount });
  const { loading, response } = getAccounts;
  const [open, setOpen] = useState(false);
  const [openBcode, setOpenBcode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [select, setSelect] = useState(null);

  const addRazerAccount = () => {
    setOpen(true);
  };

  const editRazerAccount = (record) => {
    setEdit(true);
    setSelect(record)
  };

  const openBackup = (id) => {
    setOpenBcode(true);
    setEditId(id);
  };

  console.log("razeråaccount");
  return (
    <div className="user-section">
      <Button
        loading={loading}
        onClick={addRazerAccount}
        type="primary"
        className="add-button"
        style={{ marginBottom: 20 }}
      >
        Qo'shish
      </Button>
      <Table
        dataSource={response?.data?.razer_accounts.map((item) => item)}
        pagination={false}
        rowKey="id"
        loading={loading}
      >
        <Column
          title={"Razer Account"}
          dataIndex="razer_email"
          key="razer_email"
        />
        <Column
          title={"Balance in uc"}
          dataIndex="balance_uc"
          key="balance_uc"
        />
        <Column title={"Status"} dataIndex="status" key="status" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle" key={record.id}>
              <Button onClick={() => openBackup(record.id)}>{"Ko'rish"}</Button>
              <Button
                type="primary"
                ghost
                onClick={() => editRazerAccount(record)}
              >
                {"Edit"}
              </Button>
            </Space>
          )}
        />
      </Table>

      {open && <RazerAccountPost open={open} setOpen={setOpen} getData={getAccounts} />}

      { openBcode &&
        <RazerBackupView
          open={openBcode}
          setOpen={setOpenBcode}
          editId={editId}
          setEditId={setEditId}
        />
      }
     { edit && <RazerAccountEdit
        getData={getAccounts}
        edit={edit}
        setEdit={setEdit}
        select={select}
        setSelect={setSelect}
      />}
    </div>
  );
};

export default RazerAccount;
