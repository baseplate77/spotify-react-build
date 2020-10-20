import React from "react";
import "./siderbar.css";
import SiderBarOption from "./siderbarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./dataLayer";

function Siderbar({ spotifyApi }) {
  const [{ playlists }, dispatch] = useDataLayerValue();
  // console.log("playlists", playlists);
  return (
    <div className="siderbar">
      <img
        className="siderbar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      ></img>
      <SiderBarOption Icon={HomeIcon} title="Home" />
      <SiderBarOption Icon={SearchIcon} title={"Search"} />
      <SiderBarOption Icon={LibraryMusicIcon} title={"Your Libary"} />

      <br></br>
      <h4 className="siderbar__title">PLAYLISTS</h4>
      <hr></hr>
      {playlists.items?.map((playlist, index) => (
        <SiderBarOption
          key={index}
          title={playlist.name}
          id={playlist.id}
          spotifyApi={spotifyApi}
        />
      ))}
    </div>
  );
}

export default Siderbar;
