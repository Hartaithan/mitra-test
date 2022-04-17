import { AppActionTypes, SetAlbumIdAction } from "../../models/appModel";

export const setAlbumIdAction = (payload: number): SetAlbumIdAction => ({
  type: AppActionTypes.SET_ALBUM_ID,
  payload,
});
