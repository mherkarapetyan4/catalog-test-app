import { ProductType } from './../../components/ProductItem';
export interface ProductState {
  data: [];
  categories: [],
  isFetching: boolean;
  count: number,
  detail: ProductType | null
}
