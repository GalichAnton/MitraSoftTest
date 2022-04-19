import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../../types/ResponseTypes";

export interface IPhotoState {
  status: "idle" | "loading" | "success" | "rejected";
  naturePhotos: IPhoto[];
  oceanPhotos: IPhoto[];
  kittyPhotos: IPhoto[];
  tigersPhotos: IPhoto[];
  selectedPhoto: {
    photo: IPhoto;
    status: "idle" | "loading" | "success" | "rejected";
  };
  error: any;
}

const initialState: IPhotoState = {
  status: "idle",
  naturePhotos: [],
  oceanPhotos: [],
  kittyPhotos: [],
  tigersPhotos: [],
  selectedPhoto: { photo: {} as IPhoto, status: "idle" },
  error: "",
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    // =======================
    startGetPhotos(state) {
      state.status = "loading";
    },
    endGetNaturePhotos(state, action: PayloadAction<IPhoto[]>) {
      state.naturePhotos = action.payload;
    },
    endGetOceanPhotos(state, action: PayloadAction<IPhoto[]>) {
      state.oceanPhotos = action.payload;
    },
    endGetKittyPhotos(state, action: PayloadAction<IPhoto[]>) {
      state.kittyPhotos = action.payload;
    },
    endGetTigersPhotos(state, action: PayloadAction<IPhoto[]>) {
      state.tigersPhotos = action.payload;
    },
    endGetPhotos(state) {
      state.status = "success";
    },
    // =======================
    startGetPhotoById(state, action: PayloadAction<string>) {
      state.selectedPhoto.status = "loading";
    },
    endGetPhotoById(state, action: PayloadAction<IPhoto>) {
      state.selectedPhoto.status = "success";
      state.selectedPhoto.photo = action.payload;
    },
    // =======================
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.status = "idle";
    },
    removeError(state) {
      state.error = initialState.error;
    },
    removePhoto(state) {
      state.selectedPhoto.photo = initialState.selectedPhoto.photo;
      state.selectedPhoto.photo = initialState.selectedPhoto.photo;
    },
  },
});

export const photoActions = photoSlice.actions;
export default photoSlice.reducer;
