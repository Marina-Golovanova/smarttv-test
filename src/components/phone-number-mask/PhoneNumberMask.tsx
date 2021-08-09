import React from "react";

import "./phone-number-mask.scss";

type PhoneNumberMaskProps = {
  phoneNumber: string;
};

export const PhoneNumberMask: React.FC<PhoneNumberMaskProps> = (props) => {
  const mask = (pattern: string, value: string) => {
    value.split("").forEach((_, idx) => {
      pattern = pattern.replace("_", value[idx]);
    });

    return pattern;
  };

  return (
    <div className="phone-number-mask">
      +7{mask("(___)___-__-__", props.phoneNumber)}
    </div>
  );
};
