import { ProductState } from './types';
import { actionKeys } from './../../constants/actionKeys'; 
const initialState: ProductState = {
  data: [],
  categories: [],
  isFetching: false,
  count: 10,
};

export default function createReducer(state = initialState, action: { type: String, payload?: Array<Object> | Object | number}) {
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
      case actionKeys.SET_COUNT: 
      return {
        ...state,
        count: typeof action.payload === 'undefined' ? state.count : +action.payload
      }
    case actionKeys.GET_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };
      case actionKeys.GET_ALL_CATEGORIES: 
        return {
          ...state,
          categories: action.payload
        }
    default:
      return state;
  }
}
