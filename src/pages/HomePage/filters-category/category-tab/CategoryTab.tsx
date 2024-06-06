import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { setActiveCategory } from "../../../../store/categories/categories.slice";
import styles from "./CategoryTab.module.scss";
import { fetchProducts } from "../../../../store/products/products.slice";
import { CategoriesName } from "../../../../store/categories/categories.type";

type CategoryTabProprs = {
  text: string;
  categoryName: CategoriesName;
};

const CategoryTab: FC<CategoryTabProprs> = ({ text, categoryName }) => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.categoriesSlice);

  useEffect(() => {
    dispatch(fetchProducts(category?.toLowerCase()));
  }, [category]);

  const getActiveCategory = () => {
    dispatch(setActiveCategory(categoryName));
  };

  return (
    <button
      className={
        categoryName === category
          ? styles.active_category
          : styles.category_button
      }
      onClick={getActiveCategory}
    >
      {text}
    </button>
  );
};

export default CategoryTab;
