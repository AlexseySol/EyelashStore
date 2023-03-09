import React from "react";
import programs from "./Programs.module.scss";

export const Programs = () => {
  return (
    <section>
      <div className={programs.wrapper}>
        <h1 className={programs.title}>ВОТ ТАКАЯ ПРОГРАММА ИНТЕНСИВА</h1>
        <ul className={programs.block}>
          <li>
            УРОК 1. ВВОДНЫЙ УРОК<span>+</span>
          </li>
          <li>
            УРОК 2. СКОРОСТНОЕ СНЯТИЕ РЕСНИЦ<span>+</span>
          </li>
          <li>
            УРОК 3. РАБОТА С КЛЕЕМ. КАК ПРОДЛИТЬ НОСКУ<span>+</span>
          </li>
          <li>
            УРОК 4. ЗДОРОВЬЕ МАСТЕРА<span>+</span>
          </li>
          <li>
            УРОК 5. ЛИЧНЫЙ БРЕНД В INSTAGRAM: ПОЧЕМУ УВЯДАЮТ КОММЕРЧЕСКИЕ
            АККАУНТЫ<span>+</span>
          </li>
          <li>
            УРОК 6. ЛОМАЕМ СТЕРЕОТИПЫ МОДЕЛИРОВАНИЯ: ЧЕМ СЛОЖНЕЕ ПРИДУМАЛ, ТЕМ
            СЛОЖНЕЕ ЖИТЬ<span>+</span>
          </li>
          <li>
            УРОК 7. КЛАССИЧЕСКОЕ НАРАЩИВАНИЕ РЕСНИЦ<span>+</span>
          </li>
          <li>
            УРОК 8. ПУЧОК. КАК БЫСТРО И ПРАВИЛЬНО ФОРМИРОВАТЬ ТЕБЯ, ДРУЖОК?
            <span>+</span>
          </li>
          <li>
            УРОК 9. НАРАЩИВАЕМ ОБЪЕМЫ 2D+ <span>+</span>
          </li>
        </ul>
        <div className={programs.block_footer}>
          <h2>Все еще думаешь? А места разбирают уже сейчас</h2>
          <button>Записаться</button>
        </div>
        <img className={programs.img} src="/img/woman_footer.png" alt="" />
      </div>
    </section>
  );
};
