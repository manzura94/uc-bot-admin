import React from "react";
import { useLoad } from "../../hooks/request";
import { counts, transactions } from "../../utils/urls";
import { Card, Col, Row } from "antd";

const Dashboard = () => {
  const getData = useLoad({ url: counts });
  const getTrans = useLoad({ url: transactions });
  const { response, loading } = getData;
 
  console.log(getData, "data");
  console.log(getTrans, "transsss");

  return (
    <div className="dashboard">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Razer Accounts" bordered={false} loading={loading}>
            <div>
              <span>razer_accounts_active:</span>
              <span>{response?.data?.razer_accounts_active}</span>
            </div>
            <div>
              <span>razer_accounts_deleted:</span>
              <span>{response?.data?.razer_accounts_deleted}</span>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Partners" bordered={false} loading={loading}>
            <div>
              <span>partners:</span>
              <span>{response?.data?.partners}</span>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Backup Codes" bordered={false} loading={loading}>
            <div>
              <div>
                <span>razer_backup_codes_active:</span>
                <span>{response?.data?.razer_backup_codes_active}</span>
              </div>
              <div>
                <span>razer_backup_codes_used:</span>
                <span>{response?.data?.razer_backup_codes_used}</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Transactions" bordered={false} loading={loading}>
            <div>
              <span>failed_transactions:</span>
              <span>{response?.data?.failed_transactions}</span>
            </div>
            <div>
              <span>successful_transactions:</span>
              <span>{response?.data?.successful_transactions}</span>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
