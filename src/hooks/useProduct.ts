import { RootState } from "./../store/reducers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions";

const useProduct = () => {
  const isFetching: boolean = useSelector((state: RootState) => state.products.isFetching);
  const data = useSelector((state: RootState) => state.products.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return { isFetching, products: data };
};

export default useProduct;
