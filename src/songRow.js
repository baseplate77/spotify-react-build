import React from "react";
import "./songrow.css";
import { useDataLayerValue } from "./dataLayer";
function SongRow({ item, spotifyApi }) {
  const [{}, dispatch] = useDataLayerValue();
  const handleClick = () => {
    dispatch({
      type: "SET_ITEM",
      item: item,
    });
  };
  return (
    <div className="songrow" onClick={handleClick}>
      <img
        className="songrow__image"
        src={item?.track.album.images[0].url}
      ></img>
      <div className="songrow__info">
        <h4>{item?.track.album.name}</h4>
        <p>{item?.track.artists.map((artist) => artist.name).join(",")}</p>
      </div>
    </div>
  );
}

export default SongRow;
