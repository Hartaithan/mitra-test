import { all } from "redux-saga/effects";
import { galleryWatcher } from "./gallerySaga";

export function* rootWatcher() {
  yield all([galleryWatcher()]);
}
