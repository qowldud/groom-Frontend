import React, { useEffect, useState } from "react";
import "./style/Main.css";
import Send from "./Send.js";
import List from "./List.js";
import Cost from "./Cost.js";
import Header from "./Header.js";

export default function Main() {
  //변수 ===> 렌더링 ==> 초기화
  //useRdf ==> ref.current ==> 렌더링 => 초기화X
  //state ===> 페이지 새로고침 => 초기화

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");
  useEffect(() => {}, [items]);

  const handlSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      const editItem = items.find((item) => item.id === id);
      editItem.name = name;
      editItem.price = price;
      setName("");
      setPrice(0);
      setIsEdit(false);
    } else {
      if (price && name) {
        const newItem = { name, price, id: crypto.randomUUID() };
        setItems([...items, newItem]);
        setName("");
        setPrice(0);
        setSubmit(true);
      }
    }
  };

  const edit = (item) => {
    setIsEdit(true);
    setName(item.name);
    setPrice(item.price);
    setId(item.id);
  };

  return (
    <main>
      <Header
        submit={submit}
        setSubmit={setSubmit}
        remove={remove}
        setRemove={setRemove}
      ></Header>
      <div className="main-container">
        <div className="main">
          <Send
            name={name}
            setName={setName}
            price={price}
            setPrice={setPrice}
            handlSubmit={handlSubmit}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
          <List
            items={items}
            setItems={setItems}
            setRemove={setRemove}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            edit={edit}
          />
        </div>
        <div>
          <Cost items={items} />
        </div>
      </div>
    </main>
  );
}
