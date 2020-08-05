import React from "react";
import { Layout } from "antd";
import MessageList from "../components/MessageList";
import InputMessage from "../components/InputMessage";
import {isLoggedInState} from "../components/authentication/LoginForm"
import {add} from "../actions/messages";
import {connect} from "react-redux";
import backgroundImage from "../images/chat_background.jpg";

const mapStateToProps = state => {
    return {messages: state.messages, authentication: state.authentication, theme: state.theme};
}

const MessageLayout = props => (
  <Layout style={{ height: "calc(100%)" }}>
    <Layout.Content style={{ padding: "0 50px", height: "calc(80%)" }}>
      <Layout
        style={{
          padding: "24px 0",
          background: "#fff",
          backgroundImage: `url(${backgroundImage})`,
          height: "calc(100%)"
        }}
      >
        <Layout.Content style={{ padding: "0 24px", height: "calc(80%)" }}>
          <MessageList {...props}/>
        </Layout.Content>
      </Layout>
    </Layout.Content>
    <Layout.Footer
      style={{
        padding: "0 50px",
        textAlign: "center",
        height: "calc(20%)"
      }}
    >
      <InputMessage onSubmit={elt => props.dispatch(add(elt, props.authentication.userName))}/>
    </Layout.Footer>
  </Layout>
);

export default isLoggedInState(connect(mapStateToProps)(MessageLayout));