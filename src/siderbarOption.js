import React from "react";
import "./siderbarOption.css";
import { useDataLayerValue } from "./dataLayer";

function SiderbarOption({ title, Icon, id, spotifyApi }) {
  const [{}, dispatch] = useDataLayerValue();
  const handleClick = () => {
    spotifyApi.getPlaylist(id).then((response) => {
      dispatch({
        type: "SET_DEFAULT_PALYLIST",
        default_playlist: response,
      });
    });
  };
  return (
    <div className="siderbarOption" onClick={handleClick}>
      {Icon && <Icon className="siderbarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SiderbarOption;
