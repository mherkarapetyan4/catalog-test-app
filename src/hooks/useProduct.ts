import { ProductType } from "./../components/ProductItem/index";
import { RootState } from "./../store/reducers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getAllCategories,
  getProductsByCategory,
} from "../store/actions";

const useProduct = (isNext: boolean) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [count, setCount] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const isFetching: boolean = useSelector(
    (state: RootState) => state.products.isFetching
  );
  const data = useSelector((state: RootState) => state.products.data); 
  const categories = useSelector(
    (state: RootState) => state.products.categories
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAllCategories());
  }, []);
  useEffect(() => { 
    if (isNext) {  
      setCount((c) => c + 5);
    }
  }, [isNext]);

  useEffect(() => { 
    setProducts(data.slice(0, count));
  }, [data]);

  useEffect(() => {
    const buffProducts: Array<ProductType> = searchValue
      ? [...products]
      : [...data];
    setProducts(buffProducts.slice(0, count));
  }, [count]);

  const handleSearch = (val: string) => {
    if (val === "") {
      setProducts(data);
    } else {
      const buffProducts: Array<ProductType> = data.filter((el: ProductType) =>
        el.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
      setProducts(buffProducts);
    }
  };

  const handlePriceChange = (val: string) => {
    const buffProducts: Array<ProductType> = searchValue
      ? [...products]
      : [...data];
    if (val === "0") {
      setProducts(
        buffProducts.sort((a, b) => Number(a.price) - Number(b.price))
      );
    } else {
      setProducts(
        buffProducts.sort((a, b) => Number(b.price) - Number(a.price))
      );
    }
  };

  const searchChange = (val: string) => {
    setSearchValue(val);
  };

  const handleCategoryChange = (val: string) => {
    if (searchValue) {
      const buffProducts: Array<ProductType> = [...data];

      setProducts(
        buffProducts
          .filter((el) =>
            el.title
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          )
          .filter((el) => {
            if(val === 'all') {
              return true
            }
            return el.category === val;
          })
      );
    } else {
      if (val === "all") {
        dispatch(getProducts());
      } else {
        dispatch(getProductsByCategory(val));
      }
    }
  };

  return {
    isFetching,
    products,
    handleSearch,
    categories: ["all", ...categories],
    handlePriceChange,
    searchChange,
    searchValue,
    handleCategoryChange, 
  };
};

export default useProduct;
