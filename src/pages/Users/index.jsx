import React from 'react'
import { Button, Popconfirm, Space, Table } from "antd";


const { Column } = Table;


const Users = () => {
  return (
    <div className='user-section'>
    <Button
    //   loading={loading}
    //   onClick={addUserGroup}
      type="primary"
      style={{
        marginBottom: 16,
      }}
    >
      Qo'shish
    </Button>
    <Table
    //   dataSource={tableGroup?.map((item) => item)}
      pagination={false}
      rowKey="id"
    //   loading={loading}
    >
      <Column title={"UserGroup"} dataIndex="name" key="name" />
      <Column
        title="Action"
        key="action"
        // render={(_, record) => (
        //   <Space size="middle" key={record.id}>
        //     <a onClick={() => editUserGroup(record)}>{"Edit"}</a>
        //     <Popconfirm
        //       placement="leftBottom"
        //       title={"Do you want to delete it"}
        //       icon={
        //         <QuestionCircleOutlined
        //           style={{
        //             color: "red",
        //           }}
        //         />
        //       }
        //       onConfirm={()=>deleteUserGroup()}
        //       okText={"Yes"}
        //       cancelText={"No"}
        //     >
        //       <a onClick={()=>setSelect(record)}>{"Delete"}</a>
        //     </Popconfirm>
        //   </Space>
        // )}
      />
    </Table>
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

export default Users