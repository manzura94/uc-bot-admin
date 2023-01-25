import React, { useState } from 'react'
import { Button, Modal, Form, Input  } from "antd";
import { UserOutlined } from "@ant-design/icons";


const PartnerAdd = ({openAdd, setOpenAdd}) => {

    const closeHandler=()=>{
        setOpenAdd(false)
    }

  return (
    <Modal
    title={"Fill out the form"}
    centered
    open={openAdd}
    onCancel={() => closeHandler()}
    width={900}
    className="partner-add"
  >
    <Form
      // form={form}
      name="control-hooks"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      className="usergroup-form"
      // onFinish={onSubmit}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Login"
        name="login"
        rules={[
          {
            required: true,
            message: "Please input your login!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="login"
          size="large"
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password  size="large"/>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Modal>
  )
}

export default PartnerAdd