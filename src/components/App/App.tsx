import React from "react";
import { Layout } from "../layout/Layout";
import { VideoBanner } from "../video-banner/VideoBanner";
import { PhoneNumberScreen } from "../phone-number-screen/PhoneNumberScreen";

import "./App.scss";

export const App: React.FC = () => {
  return (
    <Layout>
      {/* <VideoBanner /> */}
      <PhoneNumberScreen />
    </Layout>
  );
};
