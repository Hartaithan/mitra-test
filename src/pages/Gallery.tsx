import React from "react";
import { Container } from "react-bootstrap";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";
import GalleryTabs from "../components/GalleryTabs/GalleryTabs";
import useActions from "../hooks/useActions";
import useTypedSelector from "../hooks/useTypedSelector";

const Gallery: React.FC = () => {
  const { list } = useTypedSelector((state) => state.gallery);
  const { getGalleryAction } = useActions();
  const [albumId, setAlbumId] = React.useState(1);

  const getAlbumIdList = [...list].filter((item) => item.albumId === albumId);

  React.useEffect(() => {
    getGalleryAction();
  }, []); // eslint-disable-line

  return (
    <Container>
      <GalleryTabs />
      <GalleryGrid list={getAlbumIdList} />
    </Container>
  );
};

export default Gallery;
