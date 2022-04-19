import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { photoActions } from "../../store/slices/PhotoSlice";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
import { Card, Container } from "react-bootstrap";
import Preloader from "../Preloader/Preloader";

const PhotoCard = () => {
  const dispatch = useDispatch();
  const photo = useAppSelector((state) => state.photo.selectedPhoto.photo);
  const status = useAppSelector((state) => state.photo.selectedPhoto.status);
  const { photoId } = useParams();
  useEffect(() => {
    photoId && dispatch(photoActions.startGetPhotoById(photoId));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {status === "success" ? (
        <Card
          border="success"
          style={{ width: "80%" }}
          className="bg-dark text-white"
        >
          <Card.Header>Photo</Card.Header>
          <Card.Img variant="top" src={photo.src.landscape} />
          <Card.Body>
            <Card.Title>By {photo.photographer}</Card.Title>

            <Card.Link href={photo.photographer_url}>
              Photographer link
            </Card.Link>
          </Card.Body>
        </Card>
      ) : (
        <Preloader customText={"Loading..."} />
      )}
    </div>
  );
};

export default PhotoCard;
