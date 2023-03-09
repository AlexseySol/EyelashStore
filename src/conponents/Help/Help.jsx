import React from "react";
import help from "./Help.module.scss";

export const Help = () => {
  return (
    <section>
      <div className={help.wrapper}>
        <h1 className={help.title}>А ТАКИЕ ВОПРОСЫ МОГУТ БЫТЬ У ВАС</h1>
        <ul className={help.block}>
          <li>
          Я ТОЧНО ВСЕМУ НАУЧУСЬ? У МЕНЯ ПОЛУЧИТСЯ?<span>+</span>
          </li>
          <li>
          КАК Я БУДУ УЧИТЬСЯ СКОРОСТНОМУ НАРАЩИВАНИЮ ОНЛАЙН?<span>+</span>
          </li>
          <li>
          СКОЛЬКО ВРЕМЕНИ БУДЕТ УХОДИТЬ НА ВЫПОЛНЕНИЕ ДЗ?<span>+</span>
          </li>
          <li>
          КАК ЧАСТО БУДУТ ВЫХОДИТЬ УРОКИ?<span>+</span>
          </li>
          <li>
          КАКАЯ ТЕХНИКА БУДЕТ ОТРАБАТЫВАТЬСЯ: РУЧНАЯ ИЛИ ЛЕНТОЧНАЯ?<span>+</span>
          </li>
        </ul>
        <div className={help.block_footer}>
          <h2>У ВАС ЕСТЬ ДРУГОЙ ВОПРОС? НАПИШИТЕ МНЕ В ТЕЛЕГРАМ</h2>
          <button>Написать</button>
        </div>
        <img className={help.img} src="/img/woman_footer.png" alt="" />
      </div>
    </section>
  );
};
