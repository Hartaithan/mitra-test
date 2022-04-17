import * as GalleryActions from "./galleryActions";
import * as AppActions from "./appActions";

const rootActions = {
  ...GalleryActions,
  ...AppActions,
};

export default rootActions;
