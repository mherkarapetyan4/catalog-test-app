import { Route, Switch } from "react-router-dom";
import { mainRoutes } from "./pages/Main/mainRoutes";
import { productRoutes } from "./pages/Product/productRoutes";

const routesList = [...mainRoutes, ...productRoutes];

export const Routes = () => (
  <Switch>
    {routesList.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </Switch>
);
