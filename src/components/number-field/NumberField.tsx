import React from "react";
import { PhoneNumberMask } from "../phone-number-mask/PhoneNumberMask";
import { NumberButtons } from "../number-buttons/NumberButtons";
import { Checkbox } from "../checkbox/Checkbox";
import { Button } from "../button/Button";
import { api } from "../../api";

import "./number-field.scss";

type NumberFieldProps = {
  onSubmit: () => void;
};

export const NumberField: React.FC<NumberFieldProps> = (props) => {
  const [phoneNumber, setPhoneNumber] = React.useState<number[]>([]);
  const [checked, setChecked] = React.useState(false);
  const [isIncorrectNumber, setIsIncorrectNumber] = React.useState<true | null>(
    null
  );

  const onChecked = () => {
    setChecked(!checked);
  };

  const onNumber = (n: number) => {
    if (phoneNumber.length < 10) {
      console.log(phoneNumber.length);
      setPhoneNumber(phoneNumber.concat(n));
    }
  };

  const onDelete = () => {
    setPhoneNumber(phoneNumber.slice(0, phoneNumber.length - 1));
  };

  const onSubmit = async () => {
    const res = await api.checkNumber(`7${phoneNumber.join("")}`);
    if (res.valid) {
      props.onSubmit();
      setIsIncorrectNumber(null);
    } else {
      setIsIncorrectNumber(true);
    }
  };

  React.useEffect(() => {
    let phoneNumberLength = 0;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFinite(+e.key)) {
        if (phoneNumberLength < 10) {
          setPhoneNumber((phoneNumber) => phoneNumber.concat(+e.key));
          phoneNumberLength += 1;
        }
      } else if (e.keyCode === 8) {
        setPhoneNumber((phoneNumber) =>
          phoneNumber.slice(0, phoneNumber.length - 1)
        );
        phoneNumberLength -= 1;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
      {isIncorrectNumber && (
        <div className="number-field__error">неверно введен номер</div>
      )}
      <Button
        text="подтвердить номер"
        onClick={onSubmit}
        stretch={true}
        disable={!(phoneNumber.length === 10) || !checked}
      />
    </div>
  );
};
