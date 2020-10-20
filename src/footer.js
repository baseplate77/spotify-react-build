import React, { useEffect } from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "./dataLayer";
const ablumimg =
  "data:image/jpeg;base64,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";

function Footer({ spotifyApi }) {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotifyApi.getMyCurrentPlayingTrack().then((r) => {
      console.log("response", r);
      dispatch(
        {
          type: "SET_PLAYING",
          playing: r.is_playing,
        },
        (err) => {
          console.log("err", err);
        }
      );

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotifyApi]);
  const handlePlaypause = () => {
    if (playing) {
      spotifyApi.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotifyApi.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__ablumimg"
          src={item?.track.album.images[0].url}
          // alt={item?track.ablum.artists}
        ></img>
        {item ? (
          <div className="footer__songInfo">
            <h4>{item?.track.name}</h4>
            <p>{item?.track.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
      <div className="footer__middle">
        <ShuffleIcon className="footer__icon" />
        <SkipPreviousIcon className="footer__icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlaypause}
            className="footer__icon"
            fontSize="large"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlaypause}
            className="footer__icon"
            fontSize="large"
          />
        )}

        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__icon" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2} justify="flex-start" alignItems="center">
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs={6}>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
