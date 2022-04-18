import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IGalleryGridProps } from "../../models/galleryGridModel";
import "./galleryGrid.scss";

const GalleryGrid: React.FC<IGalleryGridProps> = ({ list }) => {
  return (
    <Row className="galleryGrid">
      {list.map((item) => (
        <Col className="mb-4" xs={6} lg={4} key={item.id}>
          <Card className="galleryGrid__card text-white">
            <Card.Img
              className="galleryGrid__card__image"
              src={item.url}
              alt={item.id.toString()}
            />
            <Card.ImgOverlay className="galleryGrid__card__overlay">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{`Album ${item.albumId}`}</Card.Text>
              <NavLink to={`/details/${item.id}`}>
                <Button className="galleryGrid__card__button">Read more</Button>
              </NavLink>
            </Card.ImgOverlay>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default GalleryGrid;
