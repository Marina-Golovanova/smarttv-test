import React from "react";

import "./checkbox.scss";

type CheckboxProps = {
  text: string;
};

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const [checked, setChecked] = React.useState(false);
  const onChecked = () => {
    setChecked(!checked);
  };
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input" onChange={onChecked} />
      <div className="checkbox__custom-input">
        {checked && (
          <svg width="24" height="20" viewBox="0 0 24 20">
            <line
              x1="1.06066"
              y1="11.5659"
              x2="8.06066"
              y2="18.5659"
              stroke="black"
              stroke-width="3"
            />
            <line
              x1="6.2953"
              y1="18.5659"
              x2="22.9218"
              y2="1.9394"
              stroke="black"
              stroke-width="3"
            />
          </svg>
        )}
      </div>

      <div className="checkbox__text">{props.text}</div>
    </label>
  );
};
