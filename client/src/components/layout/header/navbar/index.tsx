"use client"

import { useEffect, useState } from "react";


export default function Navbar() {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <nav  style={{
      backgroundColor: navColor,
      height: navSize,
      transition: "all 1s"
    }}>
      <ul>
        <li>
          <a href="#">Главная</a>
        </li>
        <li>
          <a href="#">О компани</a>
        </li>
        <li>
          <a href="#">Услуги</a>
        </li>
        <li>
          <a href="#">Новости</a>
        </li>
        <li>
          <a href="#">Отзовы</a>
        </li>
        <li>
          <a href="#">Контакт</a>
        </li>
      </ul>
      <div>
        <button>Заказать звонок</button>
      </div>
    </nav>
  );
}
