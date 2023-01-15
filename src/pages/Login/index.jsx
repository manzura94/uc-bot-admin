
import React, { useContext, useState } from "react";
import { Button, Form, message, Input } from "antd";
import { login } from "../../utils/urls";
import { Context } from "../../contexts/UserContext";
import { usePostRequest } from "../../hooks/request";


const Login = () => {


  const { setUser} = useContext(Context)
  const postRequest = usePostRequest({url:login})
  const {loading: btnLoading} =postRequest

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    console.log(errorInfo);
  };

  const loginHandler =async(values)=>{
   
    const {response} = await postRequest.request({data:{login: values.username, password: values.password} })
    const {success, error,data} = response
    console.log(response, 'this is response')
    if (
      (success === false && error.response === "AUTH_FAILED_ADMIN_NOT_FOUND") ||
      (success === false && error.message === "AUTH_FAILED_WRONG_PASSWORD") 

    ) {
      message.warning("Login yoki parol xato")
      setUser(false);
    }else{
      setUser(true)
      localStorage.setItem("accessToken", data.token);
      localStorage.setItem("id", data.id);
      localStorage.setItem("user", true);
    }
    
  }
  return (
    <div className="login-page">
    <Form
      name="basic"
      className="block"
      initialValues={{
        remember: true,
      }}
      onFinish={loginHandler}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
          { min: 4, message: "Username must be minimum 5 characters." },
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
          { min: 3, message: 'Username must be minimum 5 characters.' },

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
        <Button  htmlType="submit" loading={btnLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
  )
}

export default Login

//login uc_admin
//parol uc_admin