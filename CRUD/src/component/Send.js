import "./style/Send.css";

export default function Send({
  name,
  setName,
  price,
  setPrice,
  handlSubmit,
  isEdit,
  setIsEdit,
}) {
  const getName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const getPrice = (e) => {
    setPrice(e.target.valueAsNumber);
    console.log(e.target.valueAsNumber);
  };

  return (
    <form className="main_send" onSubmit={handlSubmit}>
      <div className="main_send-spending">
        <span className="main_send-spending-title">지출 항목</span>
        <input
          type="text"
          placeholder="예) 렌트비"
          onChange={getName}
          value={name}
        ></input>
      </div>
      <div className="main_send-cost">
        <span className="main_send-cost-title">비용</span>
        <input
          type="number"
          placeholder="예) 100"
          onChange={getPrice}
          value={price}
        ></input>
      </div>

      <button type="submit" className="main_send-btn">
        {isEdit ? "수정" : "제출"}
      </button>
    </form>
  );
}
