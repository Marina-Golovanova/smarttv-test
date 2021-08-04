import React from "react";
import qrcode from "./assets/qrcode.png";
import { Button } from "../button/Button";

import "./banner.scss";

export const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner__title">
        <div>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!</div>
        <div>ПОДАРИТЕ ЕМУ СОБАКУ!</div>
      </div>
      <img className="banner__qrcode" src={qrcode} alt="qrcode" />
      <div className="banner__information">
        Сканируйте QR-код или нажмите ОК
      </div>
      <Button text="ок" onButton={() => {}} />
    </div>
  );
};
