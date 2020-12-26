import { RootState } from "./../store/reducers/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions";

const useProduct = () => {
  const isFetching: boolean = useSelector((state: RootState) => state.products.isFetching);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  });
  return { isFetching };
};

export default useProduct;
