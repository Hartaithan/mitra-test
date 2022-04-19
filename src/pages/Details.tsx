import React from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Alert from "../components/Alert/Alert";
import Loader from "../components/Loader/Loader";
import useTypedSelector from "../hooks/useTypedSelector";
import { IGalleryItem } from "../models/galleryModel";

const Details: React.FC = () => {
  const { list, isLoading, error } = useTypedSelector((state) => state.gallery);
  let { id } = useParams();
  const [photo, setPhoto] = React.useState<IGalleryItem | null>(null);

  React.useEffect(() => {
    console.log(list);
    if (list.length !== 0) {
      setPhoto(list[Number(id) - 1]);
    }
  }, [list]);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Alert>{error}</Alert>;
  }
  return (
    <Container>
      {photo && (
        <Card className="w-100">
          <Card.Img
            variant="top"
            src={photo.url}
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{photo.title}</Card.Title>
            <Card.Subtitle className="text-muted">{`Album: ${photo.albumId}`}</Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in
              tempora, ut ipsam nostrum facilis cupiditate saepe? Quos labore
              aliquid, praesentium quo unde quibusdam omnis esse saepe ea
              dolores laboriosam.
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Details;
