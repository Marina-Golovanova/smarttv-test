import React from "react";
import qrcodeImg from "../qrcode-img/qrcode-img.png";

import "./qrcode-zone.scss";

export const QrcodeZone: React.FC = () => {
  return (
    <div className="qrcode-zone">
      <div className="qrcode-zone__information">
        Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
      </div>
      <img className="qrcode-zone__img" src={qrcodeImg} alt="qrcode" />
    </div>
  );
};
