import React from "react";
import cn from "classnames";

import "./button.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
  stretch?: boolean;
  disable?: boolean;
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={cn(
        "button",
        "button--default",
        {
          "button--stretch": props.stretch,
        },
        { "button--disable": props.disable }
      )}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
