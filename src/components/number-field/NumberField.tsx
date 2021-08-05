import React from "react";
import { PhoneNumberMask } from "../phone-number-mask/PhoneNumberMask";
import { NumberButtons } from "../number-buttons/NumberButtons";
import { Checkbox } from "../checkbox/Checkbox";
import { Button } from "../button/Button";

import "./number-field.scss";

export const NumberField: React.FC = () => {
  return (
    <div className="number-field">
      <div className="number-field__title">
        Введите ваш номер мобильного телефона
      </div>
      <PhoneNumberMask />
      <div className="number-field__information">
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </div>
      <NumberButtons />
      <Checkbox text="Согласие на обработку персональных данных" />
      <Button
        text="подтвердить номер"
        onClick={() => {}}
        stretch={true}
        disable={true}
      />
    </div>
  );
};
