import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import useActions from "../../hooks/useActions";

const GalleryTabs: React.FC = () => {
  const albums = [
    {
      id: 1,
      name: "Album 1",
    },
    {
      id: 2,
      name: "Album 2",
    },
    {
      id: 3,
      name: "Album 3",
    },
    {
      id: 4,
      name: "Album 4",
    },
  ];
  const { setAlbumIdAction } = useActions();

  const handleSelect = (key: string | null) => {
    setAlbumIdAction(Number(key));
  };

  return (
    <Tabs
      defaultActiveKey={albums[0].id}
      onSelect={handleSelect}
      className="mb-3"
    >
      {albums.map((album) => (
        <Tab eventKey={album.id} title={album.name} />
      ))}
    </Tabs>
  );
};

export default GalleryTabs;
