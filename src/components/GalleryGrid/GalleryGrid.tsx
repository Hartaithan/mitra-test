import React from "react";
import useActions from "../../hooks/useActions";
import useTypedSelector from "../../hooks/useTypedSelector";
import "./galleryGrid.scss";

const GalleryGrid: React.FC = () => {
  const { list } = useTypedSelector((state) => state.gallery);
  const { getGalleryAction } = useActions();
  const [albumId, setAlbumId] = React.useState(1);

  const getAlbumIdList = [...list].filter((item) => item.albumId === albumId);

  React.useEffect(() => {
    getGalleryAction();
  }, []); // eslint-disable-line

  return (
    <div className="galleryGrid">
      {getAlbumIdList.map((item) => (
        <img key={item.id} src={item.url} alt={item.id.toString()} />
      ))}
    </div>
  );
};

export default GalleryGrid;
