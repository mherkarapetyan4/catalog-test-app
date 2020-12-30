import useProduct from "../../hooks/useProduct";
import styled from "styled-components";
import { Spinner } from "../../components/UI/Spinner";
import ProductItem from "../../components/ProductItem";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Filter from "../../components/Filter";
import { PRICE_FILTERS } from "../../constants/common";
import useIntersectionObserver from "../../hooks/useInfiniteScroll";
const Main = () => { 

  const {isNext} = useIntersectionObserver( );
  const {
    isFetching,
    products,
    handleSearch,
    categories,
    handlePriceChange,
    handleCategoryChange,
    searchChange,
    searchValue,
  } = useProduct(isNext); 
  return (
    <MainWrapper>
      <Searchbar>
        <Input
          placeholder="Search something..."
          onChange={searchChange}
          value={searchValue}
        />
        <Button onClick={() => handleSearch(searchValue)} label="Search" />
        <Filter
          label={"Цена"}
          options={PRICE_FILTERS}
          onChange={handlePriceChange}
        />
        <Filter
          label={"Категория"}
          options={categories}
          onChange={handleCategoryChange}
        />
      </Searchbar>
      <div>
        <ProductsWrapper>
          {isFetching ? (
            <Spinner />
          ) : (
            products.map((el, i) => <ProductItem key={i} product={el} />)
          )}
        </ProductsWrapper>
        <div
          className="ais-InfiniteHits-sentinel"
          style={{ marginTop: 5 }}
        ></div>
      </div>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
`;

const Searchbar = styled.div`
  display: flex;
  align-items: center;
`;
