import React from "react";
import classes from "./Photo.module.scss";
import { Image } from "react-bootstrap";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { IPhoto } from "../../../types/ResponseTypes";
interface IPhotoProps {
  photo: IPhoto;
}
const Photo = ({ photo }: IPhotoProps) => {
  return (
    <NavLink to={`photo/${photo.id}`}>
      <div className={classes.image}>
        <Image
          thumbnail={true}
          className={classes.image__img}
          src={photo.src.tiny}
          alt="Photo"
        />
        <div className={cn(classes.image__overlay)}>
          <div className={classes.image__title}>More</div>
        </div>
      </div>
    </NavLink>
  );
};

export default Photo;
