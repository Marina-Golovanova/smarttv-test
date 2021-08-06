import React from "react";

import "./number-buttons.scss";

type NumberButtonsProps = {
  onNumber: (n: number) => void;
  onDelete: () => void;
};

export const NumberButtons: React.FC<NumberButtonsProps> = (props) => {
  const numbers = Array.from({ length: 9 }).map((_, idx) => idx + 1);

  return (
    <div className="number-buttons">
      {numbers.map((n) => (
        <div className="number-buttons__item" onClick={() => props.onNumber(n)}>
          {n}
        </div>
      ))}
      <div
        className="number-buttons__item number-buttons__item--long"
        onClick={props.onDelete}
      >
        стереть
      </div>
      <div className="number-buttons__item" onClick={() => props.onNumber(0)}>
        0
      </div>
    </div>
  );
};
