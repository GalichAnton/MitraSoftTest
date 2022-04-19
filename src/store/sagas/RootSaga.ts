import { all, spawn } from "redux-saga/effects";
import { photoSagaWatcher } from "./PhotoSaga";
export default function* rootSaga() {
  const sagas = [photoSagaWatcher];
  yield all(sagas.map((s) => spawn(s)));
}
