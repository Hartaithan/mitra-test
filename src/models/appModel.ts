export interface IAppState {
  albumId: number;
}

export enum AppActionTypes {
  SET_ALBUM_ID = "SET_ALBUM_ID",
}

export interface SetAlbumIdAction {
  type: AppActionTypes.SET_ALBUM_ID;
  payload: number;
}

export type AppAction = SetAlbumIdAction;
