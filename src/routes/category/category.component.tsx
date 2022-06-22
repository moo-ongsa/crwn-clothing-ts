import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";

import "./category.styles.scss";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [product, setProduct] = useState(categoriesMap[category]);

  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {product &&
            product.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
};

export default Category;
