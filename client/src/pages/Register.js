import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message, Button } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  const nameRules = [
    {
      required: true,
      message: "Please input your name",
    },
  ];

  const emailRules = [
    {
      type: "email",
      message: "Please enter a valid email address",
    },
    {
      required: true,
      message: "Please input your email",
    },
  ];

  const passwordRules = [
    {
      required: true,
      message: "Please input your password",
    },
    {
      min: 6,
      message: "Password must be at least 6 characters",
    },
  ];

  const passwordConfirmationRules = [
    {
      required: true,
      message: "Please confirm your password",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject("The passwords do not match");
      },
    }),
  ];
  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onfinishHandler} className="register-form" compact>
        <h3 className="form-heading">Register Form</h3>
        <Form.Item label="Name" name="name" rules={nameRules}>
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={emailRules}>
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={passwordRules}>
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item label="Confirm Password" name="confirmPassword" rules={passwordConfirmationRules}>
          <Input.Password placeholder="Confirm your password" />
        </Form.Item>
        <Link to="/login" className="link">
          Already a user? Login Here
        </Link>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn-register">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
  
};

export default Register;
