import React, { useState } from "react";
import { Button, Space, Table } from "antd";
import { useLoad } from "../../hooks/request";
import { getPartner } from "../../utils/urls";
import PartnerEdit from "../../components/PartnerEdit";
import PartnerView from "../../components/PartnerView";
import PartnerAdd from "../../components/PartnerAdd";


const { Column } = Table;

const Partner = () => {
  const getPartners = useLoad({ url: getPartner });
  const { loading, response } = getPartners;
  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openAdd, setOpenAdd] = useState(false)
  const [select, setSelect]= useState(false)

  console.log(response);

  const editPartnerHandler=(record)=>{
    setOpen(true);
    setSelect(record)
  }

  const addPartnerHandler = () => {
  setOpenAdd(true)
  };

  const addOpenHandler = () => {
    setOpenView(true);
  };
  console.log(response, getPartner, "response");
  return (
    <div className="user-section">
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
        <Column title={"Partner name"} dataIndex="login" key="login" />
        <Column title={"Status"} dataIndex={"status"} key="status" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle" key={record.id}>
              <Button onClick={addOpenHandler}>{"Ko'rish"}</Button>
              <Button type="primary" ghost onClick={()=>editPartnerHandler(record)}>
                {"Edit"}
              </Button>
            </Space>
          )}
        />
      </Table>
      {openAdd && <PartnerAdd openAdd={openAdd} setOpenAdd={setOpenAdd}/>}
      {open && <PartnerEdit getData={getPartners} open={open} setOpen={setOpen} select={select} setSelect={setSelect}/>}
      {openView && (
        <PartnerView openView={openView} setOpenView={setOpenView} />
      )}
    </div>
  );
};

export default Partner;
