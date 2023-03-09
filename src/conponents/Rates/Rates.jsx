import React from "react";
import rates from "./Rates.module.scss";

export const Rates = () => {
  return (
    <section className={rates.background}>
      <div className={rates.wrapper}>
        <h1>ТАРИФЫ УЧАСТИЯ</h1>
      </div>

      <div className={rates.wrapper_block}>
        <div className={rates.card}>
          <img className={rates.img}  src="/img/card1.png" alt="" />
          <h3>LITE (САМОСТОЯТЕЛЬНЫЙ)</h3>
          <ul className={rates.card_block}>
            <li>
              {" "}
              <span>+</span>9 ПОДРОБНЫХ УРОКОВ
            </li>
            <li>
              {" "}
              <span>+</span>9 ЗАДАНИЙ НА ПОСТРОЕНИЕ СКОРОСТНОЙ РАБОТЫ
            </li>
            <li>
              {" "}
              <span>+</span>ЧАТ С ЕДИНОМЫШЛЕННИКАМИ{" "}
            </li>
            <li>
              {" "}
              <span>+</span>ДОПОЛНИТЕЛЬНЫЙ УРОК: ЛИЧНЫЙ БРЕНД ДЛЯ БЬЮТИ-СФЕРЫ
            </li>
            <li>
              {" "}
              <span>-</span>2 МАСТЕРМАИНДА С ЮЛИЕЙ ВОРМАН
            </li>
            <li>
              {" "}
              <span>-</span>ЛИЧНОЕ ВЕДЕНИЕ ОТ ЮЛИИ ВОРМАН
            </li>
          </ul>
          <h2>ДЛИТЕЛЬНОСТЬ: 14 ДНЕЙ</h2>
          <h4>
            КАЖДЫ2 20 ОПЛАТ + 1111 Р. <span>6666 Р.</span>
          </h4>
          <button>ОПЛАТИТЬ</button>
        </div>

       <div className={rates.card}>
          <img className={rates.img}  src="/img/card2.png" alt="" />
          <h3>LITE (САМОСТОЯТЕЛЬНЫЙ)</h3>
          <ul className={rates.card_block}>
            <li>
              {" "}
              <span>+</span>9 ПОДРОБНЫХ УРОКОВ
            </li>
            <li>
              {" "}
              <span>+</span>9 ЗАДАНИЙ НА ПОСТРОЕНИЕ СКОРОСТНОЙ РАБОТЫ
            </li>
            <li>
              {" "}
              <span>+</span>ЧАТ С ЕДИНОМЫШЛЕННИКАМИ{" "}
            </li>
            <li>
              {" "}
              <span>+</span>ДОПОЛНИТЕЛЬНЫЙ УРОК: ЛИЧНЫЙ БРЕНД ДЛЯ БЬЮТИ-СФЕРЫ
            </li>
            <li>
              {" "}
              <span>+</span>2 МАСТЕРМАИНДА С ЮЛИЕЙ ВОРМАН
            </li>
            <li>
              {" "}
              <span>+</span>ЛИЧНОЕ ВЕДЕНИЕ ОТ ЮЛИИ ВОРМАН
            </li>
          </ul>
          <h2>ДЛИТЕЛЬНОСТЬ: 14 ДНЕЙ</h2>
          <h4>
            КАЖДЫ2 20 ОПЛАТ + 1111 Р. <span>11111 Р.</span>
          </h4>
          <button>ОПЛАТИТЬ</button>
        </div>

        <div className={rates.card}>
          <img className={rates.img}  src="/img/card3.png" alt="" />
          <h3>LITE (САМОСТОЯТЕЛЬНЫЙ)</h3>
          <ul className={rates.card_block}>
            <li>
              {" "}
              <span>+</span>9 ПОДРОБНЫХ УРОКОВ
            </li>
            <li>
              {" "}
              <span>+</span>9 ЗАДАНИЙ НА ПОСТРОЕНИЕ СКОРОСТНОЙ РАБОТЫ
            </li>
            <li>
              {" "}
              <span>+</span>ЧАТ С ЕДИНОМЫШЛЕННИКАМИ{" "}
            </li>
            <li>
              {" "}
              <span>+</span>ДОПОЛНИТЕЛЬНЫЙ УРОК: ЛИЧНЫЙ БРЕНД ДЛЯ БЬЮТИ-СФЕРЫ
            </li>
            <li>
              {" "}
              <span>+</span>2 МАСТЕРМАИНДА С ЮЛИЕЙ ВОРМАН
            </li>
            <li>
              {" "}
              <span>+</span>ЛИЧНОЕ ВЕДЕНИЕ ОТ ЮЛИИ ВОРМАН
            </li>
          </ul>
          <h2>ДЛИТЕЛЬНОСТЬ: 14 ДНЕЙ</h2>
          <h4>
            КАЖДЫ2 20 ОПЛАТ + 1111 Р. <span>33333 Р.</span>
          </h4>
          <button>ОПЛАТИТЬ</button>
        </div> 
      </div>
      <div className={rates.footer}>
        <img  src="/img/Info4.png" alt="" />
        <h2>
          ИДЕТЕ НА ИНТЕНСИВ? ВЫЛОЖИТЕ ОБ ЭТОМ СТОРИС-ШАБЛОН С ОТМЕТКОЙ ЮЛИИ
          ВОРМАН И ВАС БУДЕТ ЖДАТЬ РОЗЫГРЫШ ДОПОЛНИТЕЛЬНОГО ПОДАРКА!
        </h2>
        <button>СТОРИС-ШАБЛОН</button>
        <h5>@ULIAVORMAN</h5>
      </div>
    </section>
  );
};
