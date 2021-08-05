import React from "react";
import { NumberField } from "../number-field/NumberField";
import { SubmittedField } from "../submitted-field/SubmittedFiled";
import { CloseButton } from "../close-button/CloseButton";
import { QrcodeZone } from "../qrcode-zone/QrcodeZone";

import "./phone-number-screen.scss";

type PhoneNumberScreenProps = {
  onPrev: () => void;
};

export const PhoneNumberScreen: React.FC<PhoneNumberScreenProps> = (props) => {
  const [stateScreen, setStateScreen] = React.useState<
    "NumberField" | "SubmittedField"
  >("NumberField");

  return (
    <div className="phone-number-screen">
      {stateScreen === "NumberField" && <NumberField />}
      {stateScreen === "SubmittedField" && <SubmittedField />}
      <CloseButton onPrev={props.onPrev} />
      <QrcodeZone />
    </div>
  );
};
