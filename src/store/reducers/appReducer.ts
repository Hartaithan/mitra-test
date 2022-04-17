import { AppAction, AppActionTypes, IAppState } from "../../models/appModel";

const initialState: IAppState = {
  albumId: 1,
};

const appReducer = (state = initialState, action: AppAction): IAppState => {
  switch (action.type) {
    case AppActionTypes.SET_ALBUM_ID:
      return { ...state, albumId: action.payload };
    default:
      return state;
  }
};

export default appReducer;
