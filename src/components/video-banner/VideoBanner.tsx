import React from "react";
import banner from "./assets/banner.png";
import { Banner } from "../banner/Banner";

import "./video-banner.scss";

export const VideoBanner: React.FC = () => {
  const [showVideo, setShowVideo] = React.useState(true);
  const [showBanner, setShowBanner] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setShowVideo(false), 60000);
    setTimeout(() => setShowBanner(true), 5000);
  }, []);

  return (
    <div className="video-banner">
      {showVideo && (
        <iframe
          className="video-banner__video"
          src="https://www.youtube.com/embed/dbvi_S3fy2M?start=1197&autoplay=1&mute=1&controls=0&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; start; controls;"
          allowFullScreen
        ></iframe>
      )}
      {!showVideo && (
        <img className="video-banner__image" src={banner} alt="dog" />
      )}
      <div className="video-banner__stub"></div>
      {showBanner && <Banner />}
    </div>
  );
};
