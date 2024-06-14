import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  const gohome = () => {
    navigate("/");
  };

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <Link to="/">
        <img
          alt="Netflix logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
          className="nav_logo"
          onClick={gohome}
        ></img>
      </Link>
      <input
        value={searchValue}
        onChange={handleChange}
        className="nav_input"
        type="text"
        placeholder="영화를 검색해주세요."
      />

      <img
        alt="User logged"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
        className="nav_avatar"
      ></img>
    </nav>
  );
}
