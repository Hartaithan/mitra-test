import {
  GalleryAction,
  GalleryActionTypes,
  IGalleryItem,
  IGalleryState,
} from "../../models/galleryModel";

const initialState: IGalleryState = {
  list: [],
  isLoading: false,
  error: null,
};

const splitByAlbumIds = (array: IGalleryItem[]): IGalleryItem[] => {
  const filteredItems: IGalleryItem[] = [...array].map((item, index) => {
    switch (true) {
      case 0 <= index && index < 6:
        return { ...item, albumId: 1 };
      case 6 <= index && index < 12:
        return { ...item, albumId: 2 };
      case 12 <= index && index < 18:
        return { ...item, albumId: 3 };
      case 18 <= index && index < 24:
        return { ...item, albumId: 4 };
      default:
        return item;
    }
  });
  return filteredItems;
};

const galleryReducer = (
  state = initialState,
  action: GalleryAction
): IGalleryState => {
  switch (action.type) {
    case GalleryActionTypes.GET_GALLERY:
      return { ...state, isLoading: true, list: [], error: null };
    case GalleryActionTypes.GET_GALLERY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: splitByAlbumIds(action.payload),
        error: null,
      };
    case GalleryActionTypes.GET_GALLERY_ERROR:
      return { ...state, isLoading: false, list: [], error: action.payload };
    default:
      return state;
  }
};

export default galleryReducer;
