import "./style/List.css";
import Li from "./Li";

export default function List({ items, setItems, setRemove, edit }) {
  return (
    <div className="main_list">
      <div className="main_list-cost">
        <span>지출 목록</span>
        {items.map((item, index) => {
          return (
            <Li
              item={item}
              index={index}
              items={items}
              setItems={setItems}
              setRemove={setRemove}
              key={item.id}
              edit={edit}
            />
          );
        })}
      </div>
      <button
        type="submit"
        className="main_list-btn"
        onClick={() => {
          setItems([]);
        }}
      >
        목록 지우기
      </button>
    </div>
  );
}
