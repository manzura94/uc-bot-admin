import React, { useState } from 'react'
import { Button, Space, Table, Popconfirm } from "antd";
import { useLoad } from '../../hooks/request';
import { getPartner } from '../../utils/urls';
import PartnerEdit from '../../components/PartnerEdit'
import PartnerView from '../../components/PartnerView';
import { QuestionCircleOutlined } from "@ant-design/icons";


const { Column } = Table;


const Partner = () => {

  const getPartners = useLoad({url: getPartner})
  const {loading, response} = getPartners
  const [open, setOpen] = useState(false)
  const [openView, setOpenView] = useState(false)

  const addPartnerHandler =()=>{
    setOpen(true)
  }

  const addOpenHandler=()=>{
    setOpenView(true)
  }
  // console.log(response, 'response')
  return (
    <div>
    <Button
      loading={loading}
      onClick={addPartnerHandler}
      type="primary"
      style={{
        marginBottom: 16,
      }}
    >
      {"Qo'shish"}
    </Button>
    <Table
      dataSource={response?.data?.map((item) => item)}
      pagination={false}
      rowKey="id"
      loading={loading}
    >
      <Column title={"Partner name"} dataIndex="password" key="password" />
      <Column title={"Status"} dataIndex={"status"} key="status" />
      <Column
        title="Action"
        key="action"
        render={(_, record) => (
          <Space size="middle" key={record.id}>
            <a onClick={addOpenHandler}>{"Ko'rish"}</a>
            <a onClick={addPartnerHandler}>{"Edit"}</a>
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
    <PartnerEdit open={open} setOpen={setOpen}/>
    <PartnerView openView={openView} setOpenView={setOpenView}/>
    {/* <UserPanel
      open={open}
      setOpen={setOpen}
      select={select}
      setSelect={setSelect}
      editing={editing}
      setEditing={setEditing}
    /> */}
  </div>
  )
}

export default Partner