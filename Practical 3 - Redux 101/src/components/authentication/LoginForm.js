import React from 'react';
import { css } from 'glamor';
import { Form, Icon, Input, Button } from 'antd';
import LoginLayout from "../../layouts/authentication/Login";
import {connect} from "react-redux";

const iconStyle = css({
  color: 'rgba(0,0,0,.25)',
});

const handleSubmit = (e, { validateFields }, onSubmit) => {
  e.preventDefault();

  validateFields((err, { email, password }) => {
    if (!err) {
      onSubmit({ email, password });
    }
  });
};

export const isLoggedInState = Component => {
    const check = props => {
        if ( props.authentication.isLoggedIn) {
            return <Component/>;
        }
        return <LoginLayout/>;
    };
    const loginState = ({ authentication }) => ({authentication});
    return connect(loginState)(check);
};

const LoginForm = ({ form, onSubmit }) => {
  const { getFieldDecorator } = form;

  return (
    <Form onSubmit={e => handleSubmit(e, form, onSubmit)} className="login-form">
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please enter your MSN email' }],
        })(<Input prefix={<Icon type="user" {...iconStyle} />} placeholder="ex: 'qpre@msn.fr'" />)}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please enter your MSN password' }],
        })(<Input
          prefix={<Icon type="lock" {...iconStyle} />}
          type="password"
          placeholder="ex: 'reactislife'"
        />)}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in to MSN
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(LoginForm);
