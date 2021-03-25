import { takeLatest, call, put } from "redux-saga/effects";
import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR
} from "../constants/action-types";
import { GET_IMAGES_API, CLIENT_ID } from "../assets/constants/ApiConstants";

export default function* getImagesWatcher() {
  yield takeLatest(GET_IMAGES, getImagesSaga);
}

function* getImagesSaga(payload) {
  try {
    const resp = yield call(getImages, payload.payload);
    if (resp?.data?.length) {
      yield put({ type: GET_IMAGES_SUCCESS, resp });
    }
  } catch (e) {
    yield put({ type: GET_IMAGES_ERROR, resp: e });
  }
}

function getImages(payload) {
  return fetch(GET_IMAGES_API(payload.pageNumber, payload.searchText), {
    method: "get",
    headers: { authorization: `Client-ID ${CLIENT_ID}` }
  }).then((response) => response.json());
}
