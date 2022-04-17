import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios, { AxiosResponse } from "axios";
import { GalleryActionTypes, IGalleryItem } from "../../models/galleryModel";
import {
  getGalleryErrorAction,
  getGallerySuccessAction,
} from "../actions/galleryActions";

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const getGallery = () =>
  axios.get<IGalleryItem[]>(
    "https://jsonplaceholder.typicode.com/photos?_limit=24"
  );

function* getGalleryWorker() {
  try {
    const res: AxiosResponse<IGalleryItem[]> = yield call(getGallery);
    yield delay(500);
    yield put(getGallerySuccessAction(res.data));
  } catch (e) {
    yield put(getGalleryErrorAction("Failed to get gallery photos"));
  }
}

export function* galleryWatcher() {
  yield takeEvery(GalleryActionTypes.GET_GALLERY, getGalleryWorker);
}
