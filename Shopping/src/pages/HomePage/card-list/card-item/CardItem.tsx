import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import styles from "./CardItem.module.scss";
import { addTocart } from "../../../../store/cart/cart.slice";
import { FC } from "react";
import { IProduct } from "../../../../store/products/product.type";

type ItemProps = {
  item: IProduct;
};
const CardItem: FC<ItemProps> = ({ item }) => {
  const { products } = useAppSelector((state) => state.cartSlice);
  const productMatching = products.some((el) => el.id === item.id);
  const dispatch = useAppDispatch();

  const addItemToCart = () => {
    dispatch(addTocart(item));
  };
  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          width={"80%"}
          height={"200px"}
          alt="product card"
        ></img>
      </Link>

      <h5>{item.title.substring(0, 15)}...</h5>

      <div>
        <button
          disabled={productMatching}
          onClick={() => !productMatching && addItemToCart()}
        >
          {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
        </button>
        <p>$ {item.price}</p>
      </div>
    </li>
  );
};

export default CardItem;
