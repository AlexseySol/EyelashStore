import React from "react";
import header from "./Header.module.scss";
import { ReactComponent as Burger } from "./burger.svg";
export const Header = () => {
  return (
    <header>
      <div className={header.wrapper}>
        <div className={header.container}>
  
            <ul className={header.header_nav}>
              <li>
                ИНТЕНСИВ <br /> ЮЛИИ ВОРМАН
              </li>
              <li className={header.burger}>
                <button>
                  <Burger />
                </button>
              </li>
              <div className={header.header_navInfo}>
                {" "}
                <li>ДЛЯ КОГО?</li>
                <li>ЧТО БУДЕТ НА ИНТЕНСИВЕ?</li>
                <li>О ЮЛИИ</li>
                <li>ТАРИФЫ</li>
              </div>
            </ul>
      
          <div className={header.wrapper_info}>
            <div className={header.info}>
              <h2>ПЕРВЫЙ В МИРЕ ИНТЕНСИВ</h2>
              <h1>
                {" "}
                <b>ПО СКОРОСТНОМУ НАРАЩИВАНИЮ РЕСНИЦ</b>{" "}
              </h1>
              <h3>
                ХОЧЕШЬ НАРАЩИВАТЬ 4D ЗА 1 ЧАС? НАУЧУ ТЕБЯ НА ИНТЕНСИВЕ 29 МАРТА
              </h3>
              <div className={header.block_btn}>
                <button>ЗАПИСАТЬСЯ</button>
                <button>ПРОГРАММА</button>
              </div>
            </div>

            <img className={header.img_block} src="/img/header.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
