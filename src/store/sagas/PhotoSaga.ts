import { call, takeEvery, put, all, fork } from "redux-saga/effects";
import { IPhotosResponse } from "../../types/ResponseTypes";
import PhotoService from "../../api/Services";
import { photoActions } from "../slices/PhotoSlice";

export function* getNaturePhotos() {
  try {
    const { data }: IPhotosResponse = yield call(
      PhotoService.getPhotos,
      "nature"
    );
    yield put({
      type: photoActions.endGetNaturePhotos.type,
      payload: data.photos,
    });
  } catch (e: any) {
    yield put({ type: photoActions.setError.type, payload: e });
  }
}
export function* getOceanPhotos() {
  try {
    const { data }: IPhotosResponse = yield call(
      PhotoService.getPhotos,
      "ocean"
    );
    yield put({
      type: photoActions.endGetOceanPhotos.type,
      payload: data.photos,
    });
  } catch (e: any) {
    yield put({ type: photoActions.setError.type, payload: e });
  }
}
export function* getKittyPhotos() {
  try {
    const { data }: IPhotosResponse = yield call(
      PhotoService.getPhotos,
      "kitty"
    );
    yield put({
      type: photoActions.endGetKittyPhotos.type,
      payload: data.photos,
    });
  } catch (e: any) {
    yield put({ type: photoActions.setError.type, payload: e });
  }
}
export function* getTigersPhotos() {
  try {
    const { data }: IPhotosResponse = yield call(
      PhotoService.getPhotos,
      "tigers"
    );
    yield put({
      type: photoActions.endGetTigersPhotos.type,
      payload: data.photos,
    });
  } catch (e: any) {
    yield put({ type: photoActions.setError.type, payload: e });
  }
}

export function* setPhotos() {
  try {
    yield all([
      call(getNaturePhotos),
      call(getOceanPhotos),
      call(getKittyPhotos),
      call(getTigersPhotos),
    ]);
    yield put({ type: photoActions.endGetPhotos.type });
  } catch (e: any) {
    yield put({ type: photoActions.setError.type, payload: e });
  }
}

export function* getPhoto({
  payload,
}: ReturnType<typeof photoActions.startGetPhotoById>) {
  try {
    const { data } = yield call(PhotoService.getPhoto, payload);
    yield put({ type: photoActions.endGetPhotoById.type, payload: data });
  } catch (e: any) {
    yield put({ type: photoActions.setError.type, payload: e.message });
  }
}

export function* setPhotosSagaWatcher() {
  yield takeEvery(photoActions.startGetPhotos.type, setPhotos);
}

export function* getPhotoSagaWatcher() {
  yield takeEvery(photoActions.startGetPhotoById.type, getPhoto);
}

export function* photoSagaWatcher() {
  yield all([fork(setPhotosSagaWatcher), fork(getPhotoSagaWatcher)]);
}
