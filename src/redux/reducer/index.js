import { VIEW_ALBUM, VIEW_ARTIST } from "../../action";

const intialState = {
  album: [],
  artist: [],
};

const HomePageReducer = (state = intialState, action) => {
  switch (action.type) {
    case VIEW_ALBUM:
      return {
        ...state,
        album: [action.payload],
      };
    case VIEW_ARTIST:
      return {
        ...state,
        artist: [action.payload],
      };
    default:
      return state;
  }
};

export default HomePageReducer;
