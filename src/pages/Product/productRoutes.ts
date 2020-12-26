import { PATHS } from "../../constants/path";
import Product from "./index"; 

export const productRoutes = [
  {
    path: PATHS.product,
    exact: true,
    component: Product,
  },
];
