import React, { useState } from 'react'
import { Button, Popconfirm, Space, Table } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useLoad } from '../../hooks/request';
import { razerAccount } from '../../utils/urls';
import RazerAccountEdit from '../../components/RazerAccountEdit';
import RazerBackupCode from '../../components/RazerBackupCode';


const { Column } = Table;


const RazerAccount = () => {
  
  const getAccounts = useLoad({url: razerAccount})
  const {loading, response} = getAccounts
  const [open, setOpen] = useState(false)
  const [openBcode, setOpenBcode]= useState(false)

  const addRazerAccount =()=>{
    setOpen(true)
  }

  const openBackup =()=>{
    setOpenBcode(true)
  }

  // console.log(response?.data?.razer_accounts, 'account')
  return (
    <div>
    <Button
      loading={loading}
      onClick={addRazerAccount}
      type="primary"
      style={{
        marginBottom: 16,
      }}
    >
      Qo'shish
    </Button>
    <Table
      dataSource={response?.data?.razer_accounts.map((item) => item)}
      pagination={false}
      rowKey="id"
      loading={loading}
    >
      <Column title={"ID"} dataIndex="uuid" key="uuid" />

      <Column title={"Razer Account"} dataIndex="razer_email" key="razer_email" />
      <Column title={"Status"} dataIndex="status" key="status" />

      <Column
        title="Action"
        key="action"
        render={(_, record) => (
          <Space size="middle" key={record.id}>
            <a onClick={openBackup}>{"Ko'rish"}</a>
            <a onClick={addRazerAccount}>{"Edit"}</a>
            <Popconfirm
              placement="leftBottom"
              title={"Do you want to delete it"}
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: "red",
                  }}
                />
              }
              // onConfirm={()=>deleteUserGroup()}
              okText={"Yes"}
              cancelText={"No"}
            >
              <a >{"Delete"}</a>
            </Popconfirm>
          </Space>
        )}
      />
    </Table>
    <RazerAccountEdit open={open} setOpen={setOpen}/>
    <RazerBackupCode open={openBcode} setOpen={setOpenBcode}/>
    {/* <UserGroupPanel
      open={open}
      select={select}
      setSelect={setSelect}
      setOpen={setOpen}
      getGroups={getGroups}
      editing={editing}
      setEditing={setEditing}
    /> */}
  </div>
  )
}

export default RazerAccount