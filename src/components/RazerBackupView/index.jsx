import React, { useState } from "react";
import { Button, Drawer, Collapse, Space, Card, Table } from "antd";
import { useLoad } from "../../hooks/request";
import { razerAccount } from "../../utils/urls";
import { EditOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const RazerBackupView = ({ open, setOpen, editId, setEditId }) => {
  const { response } = useLoad({ url: `${razerAccount}/${editId}` });
  const data = response?.data;

  const columns = [
    { key: "backup_code", dataIndex: "backup_code" },
    Table.EXPAND_COLUMN,
    {
      dataIndex: "",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button>
            <EditOutlined />
          </Button>
        </Space>
      ),
    }
  ];

  const counts = data?._count;

  const onClose = () => {
    setOpen(false);
    setEditId(0);
  };
  console.log(data, "getttttttt");

  const text = "text";

  return (
    <Drawer
      width={"80%"}
      title="Razer Account"
      placement="right"
      onClose={onClose}
      open={open}
      className="viewDrawer"
    >
      <Space direction="vertical">
        <Card>
          <div>
            <span>Razer account history: {counts?.razer_account_history}</span>
          </div>
          <div>
            <span>Razerbackup codes: {counts?.razer_backup_codes}</span>
          </div>
          <div>
            <span>Transactions: {counts?.transaction}</span>
          </div>
          <div>
            <span>Last updated: {data?.updated_at.slice(0, 10)}</span>
          </div>
        </Card>
        <Collapse collapsible="header">
          <Panel header="History" key="1">
            {data?.razer_account_history?.map((item) => {
              return (
                <Card key={item?.id}>
                  <div>
                    <span>Action:</span>
                    <span>{item?.action}</span>
                  </div>
                  <div>
                    <span>Amount UC:</span>
                    <span>{item?.amout_uc}</span>
                  </div>
                  <div>
                    <span>Created at:</span>
                    <span>{item?.date.slice(0, 10)}</span>
                  </div>
                </Card>
              );
            })}
          </Panel>
        </Collapse>
        <Collapse collapsible="icon" className="backup-table">
          <Panel header="Backup Codes" key="1">
            <Button type="primary" style={{ margin: 10, float: "right" }}>
              qo'shish
            </Button>
            <Table
              columns={columns}
              pagination={false}
              dataSource={data?.razer_backup_codes}
              rowKey={(record) => record.id.toString()}
              expandable={{
                expandedRowRender: (record) => (
                  <div
                    style={{
                      margin: 0,
                    }}
                    key={record.id}
                  >
                    <div>
                      <span>Status:</span>
                      <span>{record.status}</span>
                    </div>
                    <div>
                      <span>Created at:</span>
                      <span>{record.created_at.slice(0, 10)}</span>
                    </div>
                    <div>
                      <span>Updated at:</span>
                      <span>{record.updated_at.slice(0, 10)}</span>
                    </div>
                  </div>
                ),
                // rowExpandable: (record) => record.name !== 'Not Expandable',
              }}
            />
          </Panel>
        </Collapse>
        <Collapse collapsible="icon">
          <Panel header="Transaction" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Space>
    </Drawer>
  );
};

export default RazerBackupView;
