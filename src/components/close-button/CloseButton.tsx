import React from "react";

import "./close-button.scss";

type CloseButtonProps = {
  onPrev: () => void;
};

export const CloseButton: React.FC<CloseButtonProps> = (props) => {
  return (
    <button className="close-button" onClick={props.onPrev}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <line
          x1="2.34484"
          y1="1.94067"
          x2="22.6264"
          y2="22.2223"
          stroke="black"
          strokeWidth="3"
        />
        <line
          x1="1.6576"
          y1="22.2223"
          x2="21.9392"
          y2="1.94067"
          stroke="black"
          strokeWidth="3"
        />
      </svg>
    </button>
  );
};
