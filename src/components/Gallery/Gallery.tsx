import React, { useEffect } from "react";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
import { useDispatch } from "react-redux";
import { photoActions } from "../../store/slices/PhotoSlice";
import PhotoList from "../PhotoList/PhotoList";
import Preloader from "../Preloader/Preloader";

const Gallery = () => {
  const naturePhotos = useAppSelector((state) => state.photo.naturePhotos);
  const oceanPhotos = useAppSelector((state) => state.photo.oceanPhotos);
  const kittyPhotos = useAppSelector((state) => state.photo.kittyPhotos);
  const tigersPhotos = useAppSelector((state) => state.photo.tigersPhotos);
  const status = useAppSelector((state) => state.photo.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(photoActions.startGetPhotos());
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
        <>
          <PhotoList photos={naturePhotos} title={"Nature"} />
          <PhotoList photos={oceanPhotos} title={"Ocean"} />
          <PhotoList photos={kittyPhotos} title={"Kitty"} />
          <PhotoList photos={tigersPhotos} title={"Tigers"} />{" "}
        </>
      ) : (
        <Preloader customText={"Loading..."} />
      )}
    </div>
  );
};

export default Gallery;
