import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IGalleryGridProps } from "../../models/galleryGridModel";
import "./galleryGrid.scss";

const GalleryGrid: React.FC<IGalleryGridProps> = ({ list }) => {
  return (
    <div className="galleryGrid">
      {list.map((item) => (
        <div className="galleryGrid__item" key={item.id}>
          <div className="galleryGrid__item__overlay">
            <p className="galleryGrid__item__album">{`Album ${item.albumId}`}</p>
            <p className="galleryGrid__item__title">{item.title}</p>
            <NavLink to={`/details/${item.id}`}>
              <Button className="galleryGrid__item__button">Read more</Button>
            </NavLink>
          </div>
          <img
            className="galleryGrid__item__pic"
            src={item.url}
            alt={item.id.toString()}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
