import React from "react";
import qrcodeImg from "../qrcode-img/qrcode-img.png";
import { Button } from "../button/Button";

import "./banner.scss";

type BannerProps = {
  onNext: () => void;
};

export const Banner: React.FC<BannerProps> = (props) => {
  return (
    <div className="banner">
      <div className="banner__title">
        <div>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!</div>
        <div>ПОДАРИТЕ ЕМУ СОБАКУ!</div>
      </div>
      <img className="banner__qrcode" src={qrcodeImg} alt="qrcode" />
      <div className="banner__information">
        Сканируйте QR-код или нажмите ОК
      </div>
      <Button text="ок" onClick={props.onNext} />
    </div>
  );
};
