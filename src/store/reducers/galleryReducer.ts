import {
  GalleryAction,
  GalleryActionTypes,
  IGalleryState,
} from "../../models/galleryModel";

const initialState: IGalleryState = {
  list: [],
  isLoading: false,
  error: null,
};

const galleryReducer = (
  state = initialState,
  action: GalleryAction
): IGalleryState => {
  switch (action.type) {
    case GalleryActionTypes.GET_GALLERY:
      return { ...state, isLoading: true, list: [], error: null };
    case GalleryActionTypes.GET_GALLERY_SUCCESS:
      return { ...state, isLoading: false, list: action.payload, error: null };
    case GalleryActionTypes.GET_GALLERY_ERROR:
      return { ...state, isLoading: false, list: [], error: action.payload };
    default:
      console.error("galleryReducer switch case error");
      return state;
  }
};

export default galleryReducer;
