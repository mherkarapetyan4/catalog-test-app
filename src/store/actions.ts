import { actionKeys } from "./../constants/actionKeys";
export const startFetching = () => ({
  type: actionKeys.START_FETCHING,
});

export const endFetching = () => ({
  type: actionKeys.END_FETCHING,
});

export const getProductsFullFilled = (payload: Response) => ({
  type: actionKeys.GET_PRODUCTS,
  payload,
});

export const getProducts = () => {
  return (dispatch: (arg0: { type: string; payload?: Response }) => void) => {
    dispatch(startFetching());
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "Asd");
        dispatch(getProductsFullFilled(json));
        dispatch(endFetching());
      });
  };
};
