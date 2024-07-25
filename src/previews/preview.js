import React from "react";
import Button from "../buttons/button";
import { download } from "../services/service";
import "./preview.css";

export default function Preview({ videoInfo }) {
  const [error, setError] = React.useState(null);
  const [downloading, setDownloading] = React.useState(false);

  const handleButtonClick = async () => {
    if (videoInfo) {
      setDownloading(true);
      try {
        await download(videoInfo);
      } catch (e) {
        console.error("Download error: ", e);
      } finally {
        setDownloading(false);
      }
    } else {
      setError("No video information available.");
    }
  };

  return (
    <div className="preview">
      <p>
        <strong>{videoInfo.details.title}</strong>
      </p>
      <div className="img-container">
        <img
          src={`${videoInfo.details.thumbnails[4].url}`}
          alt="Thumbnail"
        ></img>
      </div>
      <Button text={downloading ? "DOWNLOADING..." : "DOWNLOAD"} onClick={handleButtonClick} />
    </div>
  );
}
