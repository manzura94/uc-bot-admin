import React from 'react'
import { Button, Modal, Input, Form, InputNumber } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { usePostRequest } from '../../hooks/request';
import { razerAccount } from '../../utils/urls';

const RazerAccountPost = ({open, setOpen, getData}) => {
  const postRequest = usePostRequest({url: razerAccount });
  const [form] = Form.useForm();

  console.log('razeraccountpost')

  const postHandler =async(values)=>{
    const { response } = await postRequest.request({
      data: { ...values },
    });
    form.setFieldsValue(response.data);
    setOpen(false)
    form.resetFields();
    getData.request()
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


    const closeHandler =()=>{
        setOpen(false)
    form.resetFields();
    }

  return (
    <Modal
    className='razeraccount-modal'
    title={"Fill out the form"}
      centered
      open={open}
      onCancel={() => closeHandler()}
      width={800}
    >
      <Form
        form={form}
        name="control-hooks"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        className="usergroup-form"
        onFinish={postHandler}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

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
          <Input size="large" />
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
          label="Balance dollar"
          name={'balance_dollar'}
          rules={[
            {
              type: 'number',
              message: "Input value must be a number!",
            },
            {
              required: true,
              message: "Please enter amount of dollar!",
            },
          ]}
          >
             <InputNumber size='large' addonAfter="$" min={1} />
          </Form.Item>
          <Form.Item 
          label="Balance UC"
          name={'balance_uc'}
          rules={[
            {
              type: 'number',
              message: "Input value must be a number!",
            },
            {
              required: true,
              message: "Please enter amount of uc!",
            },
          ]}
          >
             <InputNumber size='large' addonAfter="uc"   min={1} />
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

export default RazerAccountPost