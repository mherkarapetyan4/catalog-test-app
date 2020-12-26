import { ProductState } from './types';
import { actionKeys } from './../../constants/actionKeys'; 
const initialState: ProductState = {
  data: [],
  isFetching: false,
};

export default function createReducer(state = initialState, action: { type: String, payload?: Array<Object> | Object}) {
  switch (action.type) {
    case actionKeys.START_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case actionKeys.END_FETCHING:
      return {
        ...state,
        isFetching: false,
      };
    case actionKeys.GET_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
