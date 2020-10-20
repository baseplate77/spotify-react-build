const clientID = "fcd5171635324db5ad488067b3ae92b2";
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/";
const scope = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-modify-playback-state",
  "user-top-read",
  "user-read-playback-state",
  "playlist-read-private",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initialState, item) => {
      var part = item.split("=");
      initialState[part[0]] = part[1];
      return initialState;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scope.join(
  "%20"
)}&response_type=token&show_dialog=true`;
