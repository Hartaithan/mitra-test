import {
  GalleryActionTypes,
  GetGalleryAction,
  GetGalleryErrorAction,
  GetGallerySuccessAction,
  IGalleryItem,
} from "../../models/galleryModel";

export const getGalleryAction = (): GetGalleryAction => ({
  type: GalleryActionTypes.GET_GALLERY,
});

export const getGallerySuccessAction = (
  payload: IGalleryItem[]
): GetGallerySuccessAction => ({
  type: GalleryActionTypes.GET_GALLERY_SUCCESS,
  payload,
});

export const getGalleryErrorAction = (
  payload: string
): GetGalleryErrorAction => ({
  type: GalleryActionTypes.GET_GALLERY_ERROR,
  payload,
});
