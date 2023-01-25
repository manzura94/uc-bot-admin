import React, { useState } from "react";
import { Modal, Form, Input, InputNumber, Button, Radio, Space } from "antd";
import { usePatchRequest } from "../../hooks/request";
import { razerAccount } from "../../utils/urls";
import { useEffect } from "react";

const RazerAccountEdit = ({ edit, setEdit, select, getData, setSelect }) => {

  const id  = select.id

  const editRequest = usePatchRequest({ url: `${razerAccount}/${id}` });
  const [form] = Form.useForm();
  const [value, setValue] = useState('');

  
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const editHandler = async (values) => {
    const { response } = await editRequest.request({
      data: { ...values },
    });
    console.log(response);
    form.setFieldsValue(response.data);
    setEdit(false);
    setSelect(null)
    form.resetFields();
    getData.request();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const closeHandler = () => {
    setEdit(false);
    setSelect(null)
  };

  useEffect(()=>{
    if(select){
      let count = 0
      count++
      console.log(count);
      const newData = { password: select.razer_password, email: select.razer_email, balance_uc: select.balance_uc}
      form.setFieldsValue(newData)
    }
  },[select])

  return (
    <Modal
      className="razeraccount-modal"
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
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item
          label="Balance in uc"
          name={["balance_uc"]}
          rules={[
            {
              required: true,
              message: "Please input balance !",
            },
            {
              type: "number",
              message: "The input is not valid !",
            },
          ]}
        >
          <InputNumber size="large" />
        </Form.Item>
        <Form.Item
          label="Action"
          name={["action"]}
          rules={[
            {
              required: true,
              message: "Please input action status!",
            },
          ]}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={"UPDATE"}>Update</Radio>
              <Radio value={"DEACTIVATE"}>Deactivate</Radio>
              <Radio value={"MONEY_IN"}>Money In</Radio>
              <Radio value={"MONEY_OUT"}>Money Out</Radio>
            </Space>
          </Radio.Group>
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
  );
};

export default RazerAccountEdit;
