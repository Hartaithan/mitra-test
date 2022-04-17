import React from "react";
import { useParams } from "react-router-dom";

const Details: React.FC = () => {
  let { id } = useParams();
  return <div>Details {id}</div>;
};

export default Details;
