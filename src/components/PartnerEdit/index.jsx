import React from 'react'
import { Button, Modal, Form, Input, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";



const PartnerEdit = ({open, setOpen}) => {

    const closeHandler=()=>{
        setOpen(false)
    }
    
  return (
    <Modal
    title={"Fill out the form"}
      centered
      open={open}
      onCancel={() => closeHandler()}
      width={900}
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
         {/* <Form.Item label="Select"
         name="usergroupid"
         rules={[
           {
             required: true,
             message: "Please choose your group!",
           },
         ]}
         >
        {/* <Select>
          {response?.map((item)=>(
          <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
          ))}
        </Select> 
      </Form.Item> */}
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name={["email"]}
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
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
          <Input.Password />
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

export default PartnerEdit