import React from "react";
import SiderBar from "./siderbar";
import Body from "./body";
import Footer from "./footer";
import "./player.css";

function Player({ spotifyApi }) {
  return (
    <div className="player">
      <div className="player_body">
        <SiderBar spotifyApi={spotifyApi} />
        <Body spotifyApi={spotifyApi} />
      </div>
      <Footer spotifyApi={spotifyApi} />
    </div>
  );
}

export default Player;
