import Link from "next/link";
import React from "react";
import ProfileLogo from "../../public/profile_pic.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__section ">
        <a href="">
          <picture>
            <source type="image/webp" srcSet="/img/" />
            <source type="image/jpeg" srcSet="/img/" />
            <img
              width="100"
              height="100"
              srcSet={"../../public/profile_pic.png"}
              alt="Headshot"
            />
          </picture>
        </a>
      </div>

      <div className="header__section">
        <a className="logo" href="">
          Raman
        </a>

        <nav className="menu">
          <Link href="/" as={process.env.BACKEND_URL + "/"}>
            <a>Work</a>
          </Link>
          <Link href="/" as={process.env.BACKEND_URL + "/"}>
            <a>Projects</a>
          </Link>
          <Link href="/" as={process.env.BACKEND_URL + "/"}>
            <a>Articles</a>
          </Link>
          <Link href="/" as={process.env.BACKEND_URL + "/"}>
            <a>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
