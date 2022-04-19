import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import photoReducer from "./slices/PhotoSlice";
import rootSaga from "./sagas/RootSaga";
const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    photo: photoReducer,
  },
  middleware: [saga],
});
saga.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
