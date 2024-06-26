import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTotalPrice } from "../../../../store/cart/cart.slice";
import styles from "./NavCartBlock.module.scss";
import NavCartList from "./nav-cart-list/NavCartList";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/redux";

export default function NavCartBlock() {
  const { totalPrice, products } = useAppSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [products]);

  return (
    <div className={styles.nav_cart_block}>
      <NavCartList />
      <div className={styles.nav_cart_price}>
        <p>합계 : $ {totalPrice.toFixed(2)}</p>
      </div>
      <div className={styles.nav_cart_link}>
        <Link to={"cart"}>장바구니로 이동</Link>
      </div>
    </div>
  );
}
