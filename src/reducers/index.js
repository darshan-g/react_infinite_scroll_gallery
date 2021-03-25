import {
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
  SET_SEARCH_TEXT,
  REMOVE_IMAGES,
  SET_PAGE_NUMBER,
  SET_VIEWER
} from "../constants/action-types";

const initialState = {
  images: [],
  searchText: "",
  pageNumber: 0,
  error: "",
  isImageViewerOpen: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.resp.data
      };
    case GET_IMAGES_ERROR:
      return {
        ...state,
        error: action.resp.e
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      };
    case REMOVE_IMAGES:
      return {
        ...state,
        images: [],
        pageNumber: 0
      };
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload
      };
    case SET_VIEWER:
      return {
        ...state,
        isImageViewerOpen: action.payload
      };
    default:
      return {
        ...state
      };
  }
}

export default rootReducer;
