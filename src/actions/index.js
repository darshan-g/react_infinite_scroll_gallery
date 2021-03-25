import {
  GET_IMAGES,
  SET_SEARCH_TEXT,
  REMOVE_IMAGES,
  SET_PAGE_NUMBER,
  SET_VIEWER
} from "../constants/action-types";

export function getImages(payload) {
  return { payload, type: GET_IMAGES };
}

export function setSearchText(payload) {
  return { payload, type: SET_SEARCH_TEXT };
}

export function removeImages() {
  return { type: REMOVE_IMAGES };
}

export function setPageNumber(payload) {
  return { payload, type: SET_PAGE_NUMBER };
}

export function setViewer(payload) {
  return { payload, type: SET_VIEWER };
}
