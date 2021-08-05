import React from "react";

import "./submitted-field.scss";

export const SubmittedField: React.FC = () => {
  return (
    <div className="submitted-field">
      <div className="submitted-field__title">заявка принята</div>
      <div className="submitted-field__information">
        <div>Держите телефон под рукой.</div>
        <div>Скоро с Вами свяжется наш менеджер.</div>
      </div>
    </div>
  );
};
