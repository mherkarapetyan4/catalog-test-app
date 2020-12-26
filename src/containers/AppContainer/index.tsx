import ProductItem from "../../components/ProductItem";
import { Routes } from "../../routes";

const AppContainer = () => {
  // const isLoggedIn = storage(LOCAL_STORAGE_KEY);
  // console.log(!!isLoggedIn, "ads")

  return (
    <div>
      {/* handle routing  */}
      <ProductItem />
      <Routes />
    </div>
  );
};

export default AppContainer;