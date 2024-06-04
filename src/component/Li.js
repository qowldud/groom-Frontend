import React, { useEffect } from "react";
import "./style/Li.css";

export default function Li({ item, items, setItems, setRemove, edit }) {
  useEffect(() => {}, [items]);

  const newitmes = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div className="main_list-cost-contents" key={item.id}>
      <div className="main_list-cost-content">
        <div className="cost-name">{item.name}</div>
        <div className="cost-price">{Number(item.price)}원</div>
        <div className="cost-btns">
          <button
            className="cost-btn"
            onClick={() => {
              edit(item);
            }}
          >
            수정
          </button>
          <button
            className="cost-btn"
            onClick={() => {
              setRemove(true);
              newitmes(item.id);
            }}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
