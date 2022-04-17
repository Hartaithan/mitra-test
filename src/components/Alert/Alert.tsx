import React from "react";
import { Alert as BootstrapAlert } from "react-bootstrap";

interface IAlertProps {
  variant?: string;
  children: string;
  dismissible?: boolean;
}

const Alert: React.FC<IAlertProps> = (props) => {
  const { variant = "danger", children = "", dismissible = false } = props;
  return (
    <BootstrapAlert variant={variant} dismissible={dismissible}>
      {children}
    </BootstrapAlert>
  );
};

export default Alert;
