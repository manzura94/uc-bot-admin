import React from "react";
import { Button, Drawer, Collapse, Space, Card } from "antd";
import { useLoad } from "../../hooks/request";
import { razerAccount } from "../../utils/urls";

const { Panel } = Collapse;

const RazerBackupView = ({ open, setOpen, editId, setEditId }) => {
  const {response} = useLoad({ url: `${razerAccount}/${editId}` });
  const data  = response?.data



  const history = data?.razer_account_history?.[0];
  const counts = data?._count;

  const onClose = () => {
    setOpen(false);
    setEditId(0);
  };
  console.log(response, editId, 'ifgfhdufybsvubdsjvdsfy','getttttttt');

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
            <span>Last updated: {data?.updated_at}</span>
          </div>
        </Card>
        <Collapse collapsible="header">
          <Panel header="History" key="1">
            <div>
              <span>Action:</span>
              <span>{history?.action}</span>
            </div>
            <div>
              <span>Amount UC:</span>
              <span>{history?.amout_uc}</span>
            </div>
            <div>
              <span>Created at:</span>
              <span>{Date(history?.date)}</span>
            </div>
          </Panel>
        </Collapse>
        <Collapse collapsible="icon">
          <Panel header="Backup Codes" key="1">
            <p>{text}</p>
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
