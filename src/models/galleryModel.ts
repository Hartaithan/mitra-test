export interface IGalleryItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IGalleryState {
  list: IGalleryItem[];
  isLoading: boolean;
  error: string | null;
}

export enum GalleryActionTypes {
  GET_GALLERY = "GET_GALLERY",
  GET_GALLERY_SUCCESS = "GET_GALLERY_SUCCESS",
  GET_GALLERY_ERROR = "GET_GALLERY_ERROR",
}

export interface GetGalleryAction {
  type: GalleryActionTypes.GET_GALLERY;
}

export interface GetGallerySuccessAction {
  type: GalleryActionTypes.GET_GALLERY_SUCCESS;
  payload: IGalleryItem[];
}

export interface GetGalleryErrorAction {
  type: GalleryActionTypes.GET_GALLERY_ERROR;
  payload: string;
}

export type GalleryAction =
  | GetGalleryAction
  | GetGallerySuccessAction
  | GetGalleryErrorAction;
