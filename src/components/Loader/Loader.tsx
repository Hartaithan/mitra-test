import React from "react";
import { Spinner } from "react-bootstrap";

interface ILoaderProps {
  className?: string;
}

const Loader: React.FC<ILoaderProps> = (props) => {
  return (
    <div
      className={
        `w-100 d-flex align-items-center justify-content-center ` +
        props.className
      }
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
