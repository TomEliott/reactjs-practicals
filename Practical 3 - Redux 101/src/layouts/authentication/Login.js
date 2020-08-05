import React from "react";
import { css } from "glamor";
import { connect } from "react-redux";
import VerticallyCenteredModal from "../../components/modals/VerticallyCenteredModal";

import LoginForm from "../../components/authentication/LoginForm";
import Logo from "../../components/Logo";

import authenticate from "../../actions/authentication";
import backgroundImage from "../../images/msn_background.jpg";
import microsoft from "../../images/powered.png";

const backgroundStyle = css({
  width: "calc(100vw)",
  height: "calc(100vh)",
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover"
});

const mapStateToProps = ({ authentication }, ownProps) => ({
  isLoggedIn: authentication.isLoggedIn,
  ...ownProps
});

class LoginLayout extends React.Component {
  handleLogIn({ email, password }) {
    this.props.dispatch(authenticate(email, password));
  }

  render() {
    return (
      <div {...backgroundStyle}>
        <VerticallyCenteredModal
          visible
          closable={false}
          footer={null}
          maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
        >
          <div {...css({ textAlign: "center" })}>
            <Logo
              size="90px"
              {...css({ marginTop: "40px", marginBottom: "10px" })}
            />

            <h3 {...css({ marginTop: "10px", marginBottom: "40px" })}>
              Windows Live Messenger
            </h3>

            <div {...css({ marginLeft: "10%", marginRight: "10%" })}>
              <LoginForm onSubmit={p => this.handleLogIn(p)} />
            </div>
          </div>
          <center>
            <img src={microsoft} alt="Powered by Microsoft" width="182"/>
          </center>
        </VerticallyCenteredModal>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginLayout);
