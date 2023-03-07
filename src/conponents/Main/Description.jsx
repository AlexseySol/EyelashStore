import React from "react";
import desc from "./Description.module.scss";

export const Description = () => {
  return (
    <section>
      <div className={desc.wrapper}>
        <h1 className={desc.title}> ТЕБЕ НА ИНТЕНСИВ ЕСЛИ ТЫ</h1>
        <div className={desc.card_block}>
          <div className={desc.card}>
            <img className={desc.img} src="/img/woman_card1.png" alt="sdad" />
            <span>
              ЛАШМЕЙКЕР, КОТОРЫЙ ДЕЛАЕТ НАРАЩИВАНИЕ ДОЛЬШЕ ОДНОГО ЧАСА?
            </span>
          </div>

          <div className={desc.card}>
            <img className={desc.img} src="/img/woman_card2.png" alt="" />
            <span>
              МАСТЕР, КОТОРЫЙ ХОЧЕТ ПОМЕНЯТЬ МЫШЛЕНИЕ О НАРАЩИВАНИИ РЕСНИЦ
            </span>
          </div>

          <div className={desc.card}>
            <img className={desc.img} src="/img/woman_card3.png" alt="" />
            <span>
              СПЕЦИАЛИСТ, КОТОРОМУ НЕОБХОДИМЫ ПОДДЕРЖКА И КОМЬЮНИТИ РЯДОМ
            </span>
          </div>
        </div>
        <div className={desc.block_footer}>
          <div>
            <h1>
              ЗАРЯДИСЬ ЭНЕРГИЕЙ И СТАНЬ САМЫМ ЗНАМЕНИТЫМ МАСТЕРОМ СВОЕГО ГОРОДА
            </h1>
            <button>ЗАПИСАТЬСЯ</button>
          </div>

          <img src="/img/woman_footer.png" alt="sd" />
        </div>
      </div>
    </section>
  );
};
