import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Details: React.FC = () => {
  let { id } = useParams();
  return <Container>Details {id}</Container>;
};

export default Details;
