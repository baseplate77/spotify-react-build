export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  default_playlist: null,
  playing: false,
  token: "",
  // token:
  //   "BQCA-v17yvqe4C8HGedsHUGbrl3Fjht_bNP2Sng5DMUXqNj48DNA5rYA4Gnyi1M9XE7H-HI2mUtJG53tsQg1MC6-YRfG2HBeNahmiHPfTRrU39HkHeZVWasHz1w6drTA51b4jNPpuZ9HSdaYeHDbWD3gXbJ2C1qcinTojvoAJUg5yA",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DEFAULT_PALYLIST":
      return {
        ...state,
        default_playlist: action.default_playlist,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
