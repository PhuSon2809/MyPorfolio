import React, { useEffect, useRef } from "react";
import { Button } from "reactstrap";
import "./header.scss";

const navLinks = [
  {
    display: "Home",
    url: "#home",
  },
  {
    display: "About",
    url: "#about",
  },
  {
    display: "Porfolio",
    url: "#porfolio",
  },
  {
    display: "Contact",
    url: "#contact",
  },
];

function Header(props) {
  const menuRef = useRef(null);

  const menuToggle = () => menuRef.current.classList.toggle("menu_active");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header");
      header.classList.toggle("active", window.scrollY > 50);
    });
  }, []);

  return (
    <header className="header">
      <div className="navigation d-flex align-items-center justify-content-between">
        <div className="logo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/porfolio-d552f.appspot.com/o/Avatar%2FCV.JPG?alt=media&token=b919640f-3c43-4f62-acd1-3d4e799ead02"
            alt="avatar"
          />
          <h4>PhuSon</h4>
        </div>
        <div className="menu" ref={menuRef} onClick={menuToggle}>
          <ul className="list">
            {navLinks.map((item, index) => (
              <li className="item" key={index}>
                <a href={item.url}>{item.display}</a>
              </li>
            ))}
            {/* <li className="cv-btn">
              <Button>Download CV</Button>
            </li> */}
          </ul>
        </div>
        <a href="Frontend Developer -Tran Phu Son.pdf" download="Frontend Developer -Tran Phu Son.pdf" className="cv-btn ml-auto">
          <Button>Download CV</Button>
        </a>
        <div className="right">
          <span className="mobile-menu ml-3 btn" onClick={menuToggle}>
            <i className="ri-menu-5-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
