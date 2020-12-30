import { Routes } from "../../routes";

const AppContainer = () => {
  // const isLoggedIn = storage(LOCAL_STORAGE_KEY);
  // console.log(!!isLoggedIn, "ads")

  return (
    <div>
      {/* handle routing  */}
      <Routes />
    </div>
  );
};

export default AppContainer;