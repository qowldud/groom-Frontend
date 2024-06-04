import React from "react";
import "./style/Cost.css";

export default function Cost({ items }) {
  return (
    <footer>
      <h1 className="footer">
        총지출:{" "}
        {items.reduce((acc, curr) => {
          return (acc += curr.price);
        }, 0)}
      </h1>
    </footer>
  );
}
