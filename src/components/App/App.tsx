import React from "react";
import { Layout } from "../layout/Layout";
import { VideoBanner } from "../video-banner/VideoBanner";
import { PhoneNumberScreen } from "../phone-number-screen/PhoneNumberScreen";

import "./App.scss";

export const App: React.FC = () => {
  const [stateScreen, setStateScreen] = React.useState<
    "videoBannerScreen" | "PhoneNumberScreen"
  >("videoBannerScreen");

  const onNext = () => {
    setStateScreen("PhoneNumberScreen");
  };

  const onPrev = () => {
    setStateScreen("videoBannerScreen");
  };

  return (
    <Layout>
      {stateScreen === "videoBannerScreen" && <VideoBanner onNext={onNext} />}
      {stateScreen === "PhoneNumberScreen" && (
        <PhoneNumberScreen onPrev={onPrev} />
      )}
    </Layout>
  );
};
