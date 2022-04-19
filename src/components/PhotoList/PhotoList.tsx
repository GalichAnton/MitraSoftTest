import React, { FC } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { IPhoto } from "../../types/ResponseTypes";
import classes from "./PhotoList.module.scss";
import Photo from "./Photo/Photo";
interface IImageListProps {
  photos: IPhoto[];
  title: string;
}
const PhotoList: FC<IImageListProps> = ({ photos, title }) => {
  return (
    <Container className={"m-4"}>
      <h2 className={classes.title}>{title}</h2>
      <Row>
        {photos.map((photo) => (
          <Col
            className={"mt-2 mb-2"}
            xl={2}
            lg={3}
            md={4}
            sm={6}
            key={photo.id}
          >
            <Photo photo={photo} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PhotoList;
