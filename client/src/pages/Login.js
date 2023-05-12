import React, { useState } from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false); // State for Remember Me checkbox

  // Form validation rules
  const emailValidationRules = [
    { required: true, message: "Please input your email!" },
    { type: "email", message: "Please enter a valid email address!" },
  ];
  const passwordValidationRules = [
    { required: true, message: "Please input your password!" },
    { min: 6, message: "Password must be at least 6 characters long!" },
  ];

  // Form submit handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };

  // Remember Me checkbox handler
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className="form-container">
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="register-form"
      >
        <h3 className="text-center">Login Form</h3>

        <Form.Item label="Email" name="email" rules={emailValidationRules}>
          <Input placeholder="Enter your email" className="form-input" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={passwordValidationRules}
        >
          <Input.Password
            placeholder="Enter your password"
            className="form-input"
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: "5px" }}>
          <Checkbox checked={rememberMe} onChange={handleRememberMeChange}>
            Remember me
          </Checkbox>
        </Form.Item>

        <Link to="/register" className="m-2">
          Not a user? Register here
        </Link>

        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
