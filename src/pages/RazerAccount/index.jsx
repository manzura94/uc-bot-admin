import React, { useState } from 'react'
import { Button, Popconfirm, Space, Table } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useLoad } from '../../hooks/request';
import { razerAccount } from '../../utils/urls';
import RazerAccountPost from '../../components/RazerAccountPost';
import RazerBackupView from '../../components/RazerBackupView';
import RazerAccountEdit from '../../components/RazerAccountEdit';


const { Column } = Table;


const RazerAccount = () => {
  
  const getAccounts = useLoad({url: razerAccount})
  const {loading, response} = getAccounts
  const [open, setOpen] = useState(false)
  const [edit, setEdit] =useState(false)
  const [openBcode, setOpenBcode]= useState(false)
  const [editId, setEditId] =useState(0)

  const addRazerAccount =()=>{
    setOpen(true)
  }

  const editRazerAccount=(id)=>{
    setEdit(true)
    setEditId(id)
    // console.log(id, 'iddd')
  }

  const openBackup =()=>{
    setOpenBcode(true)
  }

  console.log(response, 'account')
  return (
    <div className='user-section'>
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

      <Column title={"Razer Account"} dataIndex="razer_email" key="razer_email" />
      <Column title={"Balance in $"} dataIndex='balance_dollar' key="balance_dollar" />
      <Column title={"Balance in uc"} dataIndex="balance_uc" key="balance_uc" />
      <Column title={"Status"} dataIndex="status" key="status" />

      <Column
        title="Action"
        key="action"
        render={(_, record) => (
          <Space size="middle" key={record.id}>
            <Button   onClick={openBackup}>{"Ko'rish"}</Button>
            <Button type="primary" ghost onClick={()=>editRazerAccount(record.id)}>{"Edit"}</Button>
            {/* <Popconfirm
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
              <Button danger>{"Delete"}</Button>
            </Popconfirm> */}
          </Space>
        )}
      />
    </Table>
    <RazerAccountPost open={open} setOpen={setOpen} getData={getAccounts}/>
    <RazerBackupView open={openBcode} setOpen={setOpenBcode}/>
    <RazerAccountEdit edit={edit} setEdit={setEdit} getData={getAccounts} editId={editId}/>
  </div>
  )
}

export default RazerAccount