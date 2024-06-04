import React, { useEffect } from "react";
import "./style/Header.css";

export default function Header({ submit, setSubmit, remove, setRemove }) {
  const item = document.createElement("div");
  item.className = "header-alert";
  item.innerText = submit
    ? "아이템을 생성하였습니다."
    : "아이템이 삭제되었습니다.";
  item.style.backgroundColor = submit
    ? "rgb(125, 195, 239)"
    : "rgb(163, 59, 59)";

  useEffect(() => {
    if (submit) {
      document.querySelector(".header").before(item);
      setTimeout(() => {
        item.remove();
        setSubmit(false);
      }, 5000);
    }
  }, [submit]);

  useEffect(() => {
    if (remove) {
      document.querySelector(".header").before(item);
      setTimeout(() => {
        item.remove();
        setRemove(false);
      }, 5000);
    }
  }, [remove]);

  return (
    <header className="header">
      <h1>예산 계산기</h1>
    </header>
  );
}
