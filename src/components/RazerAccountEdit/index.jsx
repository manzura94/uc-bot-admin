import React from 'react'
import { Modal, Form, Input, InputNumber, Button } from 'antd'
import { usePatchRequest } from '../../hooks/request'
import { razerAccount } from '../../utils/urls'


const RazerAccountEdit = ({edit, setEdit, editId, getData}) => {

  const editRequest = usePatchRequest({url: `${razerAccount}/${editId}`})
  const [form] = Form.useForm();


  const editHandler =async(values)=>{
    const { response } = await editRequest.request({
      data: { ...values },
    });
    console.log(response)
    form.setFieldsValue(response.data);
    setEdit(false)
    form.resetFields();
    getData.request()
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

    const closeHandler =()=>{
        setEdit(false)
    }

  return (
    <Modal
    className='razeraccount-modal'
    title={"Fill out the form"}
      centered
      open={edit}
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
        onFinish={editHandler}
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
          label="balance in $"
          name={["balance_dollar"]}
          rules={[
            {
              required: true,
              message: "Please input balance in dollar!",
            },
          ]}
        >
          <InputNumber size="large" />
        </Form.Item>
        <Form.Item
          label="Status"
          name={["balance_uc"]}
          rules={[
            {
              required: true,
              message: "Please input status !",
            },
            {
              type: "number",
              message: "The input is not valid E-mail!",
            }
          ]}
        >
          <InputNumber size="large" />
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

export default RazerAccountEdit