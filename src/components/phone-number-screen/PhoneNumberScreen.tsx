import React from "react";
import { NumberField } from "../number-field/NumberField";
import { CloseButton } from "../close-button/CloseButton";
import { QrcodeZone } from "../qrcode-zone/QrcodeZone";

import "./phone-number-screen.scss";

export const PhoneNumberScreen: React.FC = () => {
  return (
    <div className="phone-number-screen">
      <NumberField />
      <CloseButton />
      <QrcodeZone />
    </div>
  );
};
