import React from "react";
import "./header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDataLayerValue } from "./dataLayer";
function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for song, Atrist, Playlist"></input>
      </div>
      <div className="header__right">
        <Avatar src={user?.image?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
