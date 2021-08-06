import React from "react";
import { NumberField } from "../number-field/NumberField";
import { Sidebar } from "../sidebar/Sidebar";
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

  const onSubmit = () => {
    setStateScreen("SubmittedField");
  };

  return (
    <div className="phone-number-screen">
      <Sidebar>
        {stateScreen === "NumberField" && <NumberField onSubmit={onSubmit} />}
        {stateScreen === "SubmittedField" && <SubmittedField />}
      </Sidebar>
      <CloseButton onPrev={props.onPrev} />
      <QrcodeZone />
    </div>
  );
};
