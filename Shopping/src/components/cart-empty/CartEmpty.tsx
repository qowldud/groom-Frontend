import { Link } from "react-router-dom";
import styles from "./CartEmpty.module.scss";
import { FC } from "react";

type CartEmptyProps = {
  title: string;
};

const CartEmpty: FC<CartEmptyProps> = ({ title }) => {
  return (
    <div className={styles.cart_empry}>
      <img src="img/empty-cart.png" alt="cart empty" />
      <h1>{title}가 비어 있습니다.</h1>
      <p>{title}에 상품을 넣어주세요.</p>
      <Link to={"/"}>계속 쇼핑하기</Link>
    </div>
  );
};

export default CartEmpty;
