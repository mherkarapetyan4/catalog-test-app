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
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => {
        // const buffCount = getState().products.count + 5;

        dispatch(getProductsFullFilled(json));
        // dispatch(setCount(new Response(buffCount.toString())));
        dispatch(endFetching());
      });
  };
};

// const setCount = (payload: Response) => ({
//   type: actionKeys.SET_COUNT,
//   payload,
// });

export const getProductsByCategory = (category: string) => {
  return (dispatch: (arg0: { type: string; payload?: Response }) => void) => {
    dispatch(startFetching());
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(getProductsFullFilled(json));

        dispatch(endFetching());
      });
  };
};

export const getAllCategoriesFullFilled = (payload: Response) => ({
  type: actionKeys.GET_ALL_CATEGORIES,
  payload,
});

export const getAllCategories = () => {
  return (dispatch: (arg0: { type: string; payload?: Response }) => void) => {
    dispatch(startFetching());
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        dispatch(getAllCategoriesFullFilled(json));
        dispatch(endFetching());
      });
  };
};

export const getSingleProductFullFilled = (payload: Response) => ({
  type: actionKeys.GET_SINGLE_PRODUCT,
  payload,
});

export const getSingleProduct = (id: string) => {
  return (dispatch: (arg0: { type: string; payload?: Response; }) => void) => {
    dispatch(startFetching());
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(getSingleProductFullFilled(json));
        dispatch(endFetching());
      });
  };
};
