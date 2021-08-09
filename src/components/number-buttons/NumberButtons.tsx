import React from "react";
import cn from "classnames";

import "./number-buttons.scss";

type NumberButtonsProps = {
  onNumber: (n: number) => void;
  onDelete: () => void;
};

export const NumberButtons: React.FC<NumberButtonsProps> = (props) => {
  const { onNumber, onDelete } = props;
  const numbers = Array.from({ length: 9 }).map((_, idx) => idx + 1);
  const [activeButton, setActiveButton] = React.useState<number | null>(null);

  React.useEffect(() => {
    const [left, up, right, down] = [37, 38, 39, 40];
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 13) {
        if (activeButton !== null) {
          activeButton !== -1 ? onNumber(activeButton) : onDelete();
        }

        return;
      }

      if (activeButton === null) {
        if (e.keyCode >= left && e.keyCode <= down) {
          setActiveButton(1);
        }
      } else if (e.keyCode === left) {
        if (activeButton === -1) {
          setActiveButton(9);
        } else {
          setActiveButton(activeButton - 1);
        }
      } else if (e.keyCode === right) {
        if (activeButton === 9) {
          setActiveButton(-1);
        } else {
          setActiveButton(activeButton + 1);
        }
      } else if (e.keyCode === down) {
        if (activeButton === 7 || activeButton === 8) {
          setActiveButton(-1);
        } else if (activeButton === -1) {
          setActiveButton(1);
        } else if (activeButton === 9) {
          setActiveButton(0);
        } else {
          setActiveButton(activeButton + 3);
        }
      } else if (e.keyCode === up) {
        if (activeButton === 1 || activeButton === 2) {
          setActiveButton(-1);
        } else if (activeButton === 0) {
          setActiveButton(9);
        } else if (activeButton === -1) {
          setActiveButton(7);
        } else {
          setActiveButton(activeButton - 3);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeButton, onDelete, onNumber]);

  return (
    <div className="number-buttons">
      {numbers.map((n) => (
        <button
          className={cn("number-buttons__item", {
            "number-buttons__item--active": activeButton === n,
          })}
          onClick={() => onNumber(n)}
          key={n}
          tabIndex={0}
        >
          {n}
        </button>
      ))}
      <button
        className={cn("number-buttons__item number-buttons__item--long", {
          "number-buttons__item--active": activeButton === -1,
        })}
        onClick={onDelete}
        tabIndex={0}
      >
        стереть
      </button>
      <button
        className={cn("number-buttons__item", {
          "number-buttons__item--active": activeButton === 0,
        })}
        onClick={() => onNumber(0)}
        tabIndex={0}
      >
        0
      </button>
    </div>
  );
};
