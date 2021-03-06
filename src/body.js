import React from "react";
import "./body.css";
import Header from "./header";
import { useDataLayerValue } from "./dataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./songRow";
const url =
  "data:image/jpeg;base64,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";
function Body({ spotifyApi }) {
  const [{ default_playlist }, dispatch] = useDataLayerValue();
  // console.log("default_playlist", default_playlist);
  return (
    <div className="body">
      <Header spotifyApi={spotifyApi} />
      <div className="body__info">
        <img src={default_playlist?.images[0]?.url}></img>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{default_playlist?.name}</h2>
          <p>{default_playlist?.description}</p>
        </div>
      </div>
      <div className="body__song">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__playIcons" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
      </div>
      {default_playlist?.tracks.items?.map((item, index) => {
        return <SongRow Key={index} item={item} spotifyApi={spotifyApi} />;
      })}
    </div>
  );
}

export default Body;
