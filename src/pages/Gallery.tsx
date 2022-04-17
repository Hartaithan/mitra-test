import React from "react";
import { Container } from "react-bootstrap";
import Alert from "../components/Alert/Alert";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";
import GalleryTabs from "../components/GalleryTabs/GalleryTabs";
import Loader from "../components/Loader/Loader";
import useActions from "../hooks/useActions";
import useTypedSelector from "../hooks/useTypedSelector";

const Gallery: React.FC = () => {
  const { list, isLoading, error } = useTypedSelector((state) => state.gallery);
  const { albumId } = useTypedSelector((state) => state.app);
  const { getGalleryAction } = useActions();

  const getAlbumIdList = [...list].filter((item) => item.albumId === albumId);

  React.useEffect(() => {
    getGalleryAction();
  }, []); // eslint-disable-line

  return (
    <Container>
      <GalleryTabs />
      {error && <Alert>{error}</Alert>}
      {isLoading ? (
        <Loader className="mt-3" />
      ) : (
        <GalleryGrid list={getAlbumIdList} />
      )}
    </Container>
  );
};

export default Gallery;
