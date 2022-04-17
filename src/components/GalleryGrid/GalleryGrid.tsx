import React from "react";
import { IGalleryGridProps } from "../../models/galleryGridModel";
import "./galleryGrid.scss";

const GalleryGrid: React.FC<IGalleryGridProps> = ({ list }) => {
  return (
    <div className="galleryGrid">
      {list.map((item) => (
        <img key={item.id} src={item.url} alt={item.id.toString()} />
      ))}
    </div>
  );
};

export default GalleryGrid;
