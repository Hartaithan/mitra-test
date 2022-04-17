import { combineReducers } from "redux";
import appReducer from "./appReducer";
import galleryReducer from "./galleryReducer";

const rootReducer = combineReducers({
  gallery: galleryReducer,
  app: appReducer,
});

export default rootReducer;
