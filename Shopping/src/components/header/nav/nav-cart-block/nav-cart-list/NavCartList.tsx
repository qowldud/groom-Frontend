import styles from "./NavCartList.module.scss";
import { useAppSelector } from "../../../../../hooks/redux";
import NavCartItem from "./nav-cart-item/NavCartItem";

export default function NavCartList() {
  const { products } = useAppSelector((state) => state.cartSlice);
  return (
    <div className={styles.nav_cart_list}>
      {products.map((item) => (
        <NavCartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
