import React from "react";
import { Button, Modal, Form, Input, Select, Radio, Space  } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";
import { usePatchRequest } from "../../hooks/request";
import { partner } from "../../utils/urls";

const PartnerEdit = ({ open, setOpen, select, setSelect,getData }) => {
  const [value, setValue] = useState('');
  const [form] = Form.useForm();
  const id = select.id

  const editRequest = usePatchRequest({url: `${partner}/${id}`})

  const editPartnerHandler= async (values)=>{
    const { response } = await editRequest.request({
      data: { ...values },
    });
    console.log(response);
    form.setFieldsValue(response.data);
    setOpen(false);
    setSelect(null)
    form.resetFields();
    getData.request();
  }
  

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  }; 

  const closeHandler = () => {
    setOpen(false);
  };

  useEffect(()=>{
   if(select){
    form.setFieldsValue(select)
   }
  },[select])

  return (
    <Modal
      title={"Fill out the form"}
      centered
      open={open}
      onCancel={() => closeHandler()}
      width={900}
      className="partner-add"
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
        onFinish={editPartnerHandler}
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
            <Radio value={"ACTIVATE"}>Activate</Radio>
              <Radio value={"UPDATE"}>Update</Radio>
              <Radio value={"DEACTIVATE"}>Deactivate</Radio>
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

export default PartnerEdit;
