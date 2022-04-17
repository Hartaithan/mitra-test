import React from "react";
import { Alert as BootstrapAlert } from "react-bootstrap";

interface IAlertProps {
  variant?: string;
  children: string;
  dismissible?: boolean;
}

const Alert: React.FC<IAlertProps> = (props) => {
  const [show, setShow] = React.useState(true);
  const { variant = "danger", children, dismissible = true } = props;

  if (!show) {
    return null;
  }

  return (
    <BootstrapAlert
      variant={variant}
      dismissible={dismissible}
      onClose={() => setShow(false)}
    >
      {children}
    </BootstrapAlert>
  );
};

export default Alert;
