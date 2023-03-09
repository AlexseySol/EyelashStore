import React from "react";
import footer from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={footer.bacground}>
      <div className={footer.wrapper}>
        <ul className={footer.block}>
          <li>ЮЛИЯ ВОРМАН</li>
          <li>ИНН:</li>
          <li>ОГРНИП:</li>
        </ul>
        <ul>
          <li>НАВЕРХ</li>
          <li>Design by @kemfetka</li>
        </ul>
        <ul>
          <li>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</li>
          <li>ДОГОВОР-ОФЕРТА</li>
          <li>СВЯЗАТЬСЯ С НАМИ</li>
        </ul>
      </div>
    </footer>
  );
};
