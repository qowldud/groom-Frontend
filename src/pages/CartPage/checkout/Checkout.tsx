import styles from "./Checkout.module.scss";
import { useAppSelector } from "../../../hooks/redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTotalPrice, postOrder } from "../../../store/cart/cart.slice";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export default function Checkout() {
  const cart = useAppSelector((state) => state.cartSlice);
  const { isAuth } = useAuth();

  const dispatch = useDispatch();

  const sendOrder = () => {
    dispatch(postOrder(cart));
  };

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cart]);

  return (
    <div className={styles.checkout}>
      <div>
        <p>
          <span>합계: </span> $ {cart.totalPrice.toFixed(2)}
        </p>

        {isAuth ? (
          <button
            className={styles.checkout_button}
            onClick={() => sendOrder()}
          >
            계산하기
          </button>
        ) : (
          <Link className={styles.checkout_button} to={"/login"}>
            로그인
          </Link>
        )}
      </div>
    </div>
  );
}
