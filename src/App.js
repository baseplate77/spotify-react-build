import React, { useEffect, useState } from "react";
import Login from "./login";
import "./App.css";
import Player from "./player";
import { getTokenFromUrl } from "./spotify";
import { useDataLayerValue } from "./dataLayer";
import spotifyWebApi from "spotify-web-api-js";

const spotifyApi = new spotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const _token = getTokenFromUrl().access_token;
    // console.log("token", _token);
    window.location.hash = "";
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotifyApi.getUserPlaylists().then((playlists) => {
        console.log("playlist          ", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotifyApi.getPlaylist("37i9dQZF1DX2pSTOxoPbx9").then((response) => {
        dispatch({
          type: "SET_DEFAULT_PALYLIST",
          default_playlist: response,
        });
      });
    }
  });
  return (
    <div className="App">
      {token ? <Player spotifyApi={spotifyApi} /> : <Login />}
    </div>
  );
}

export default App;
