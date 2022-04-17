import React from "react";
import { Container } from "react-bootstrap";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";

const Gallery: React.FC = () => {
  return (
    <Container>
      <GalleryGrid />
    </Container>
  );
};

export default Gallery;
