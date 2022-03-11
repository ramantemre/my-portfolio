import React from "react";
import style from "./main.module.css";

const Main = () => {
  return (
    <div className={style.box}>
      <h1>👋 Hi, I'm Raman.</h1>
      <p className={style.boxText}>
        I'm a web developer from Indore (M.P.), India. I’m currently the
        developer at a local agency,
        <a
          href="https://www.systango.com/"
          target="_blank"
          rel="noopener"
          className="text-decoration-none"
        >
          Systango.
        </a>
        In my spare time I like DIY, gaming and building my own projects.
      </p>
      <p className="mt-4">
        I'm on
        <a
          href="https://github.com/"
          target="_blank"
          className="text-decoration-none"
        >
          GitHub,
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          className="text-decoration-none"
        >
          Twitter
        </a>
        and
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="text-decoration-none"
        >
          Instagram.
        </a>
      </p>
    </div>
  );
};

export default Main;
