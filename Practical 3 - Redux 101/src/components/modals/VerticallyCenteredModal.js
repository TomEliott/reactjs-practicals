import React from "react";
import { Modal } from "antd";

import "./VerticallyCenteredModal.scss";

const VerticallyCenteredModal = ({ children, ...props }) => (
  <Modal {...props} wrapClassName="vertical-center-modal">
    {children}
  </Modal>
);

export default VerticallyCenteredModal;
