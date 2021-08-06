import React from "react";
import { PhoneNumberMask } from "../phone-number-mask/PhoneNumberMask";
import { NumberButtons } from "../number-buttons/NumberButtons";
import { Checkbox } from "../checkbox/Checkbox";
import { Button } from "../button/Button";

import "./number-field.scss";

type NumberFieldProps = {
  onSubmit: () => void;
};

export const NumberField: React.FC<NumberFieldProps> = (props) => {
  const [phoneNumber, setPhoneNumber] = React.useState<number[]>([]);
  const [checked, setChecked] = React.useState(false);
  const onChecked = () => {
    setChecked(!checked);
  };

  const onNumber = (n: number) => {
    setPhoneNumber(phoneNumber.concat(n));
  };

  const onDelete = () => {
    setPhoneNumber(phoneNumber.splice(0, phoneNumber.length - 1));
  };

  return (
    <div className="number-field">
      <div className="number-field__title">
        Введите ваш номер мобильного телефона
      </div>
      <PhoneNumberMask phoneNumber={phoneNumber.join("")} />
      <div className="number-field__information">
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </div>
      <NumberButtons onNumber={onNumber} onDelete={onDelete} />
      <Checkbox
        text="Согласие на обработку персональных данных"
        checked={checked}
        onChecked={onChecked}
      />
      <Button
        text="подтвердить номер"
        onClick={props.onSubmit}
        stretch={true}
        disable={!(phoneNumber.length === 10) || !checked}
      />
    </div>
  );
};
