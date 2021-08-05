import React from "react";

import "./number-buttons.scss";

export const NumberButtons: React.FC = () => {
  const numbers = Array.from({ length: 9 }).map((_, idx) => idx + 1);

  return (
    <div className="number-buttons">
      {numbers.map((n) => (
        <div className="number-buttons__item">{n}</div>
      ))}
      <div className="number-buttons__item number-buttons__item--long">
        стереть
      </div>
      <div className="number-buttons__item">0</div>
    </div>
  );
};
