import { useParams } from 'react-router-dom';
// import { ProductType } from "./../components/ProductItem/index";
import { RootState } from "./../store/reducers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleProduct, 
} from "../store/actions";

interface ParamTypes {
    id: string
}
 
const useDetailProduct = () => {
  const params = useParams<ParamTypes>(); 
  const isFetching: boolean = useSelector(
    (state: RootState) => state.products.isFetching
  );
  const product = useSelector((state: RootState) => state.products.detail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, []); 
  return {
    product,
    isFetching,
  };
};

export default useDetailProduct;
