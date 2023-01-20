import React from 'react'
import { useLoad } from '../../hooks/request'
import { counts, transactions } from '../../utils/urls'
import { Card, Col, Row } from 'antd';

const Dashboard = () => {

  const getData = useLoad({url: counts})
  const getTrans = useLoad({url: transactions})
  console.log(getData, 'data')
  console.log(getTrans, 'transsss')

  return (
   <div className='dashboard'>
      <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
   </div>
  )
}

export default Dashboard