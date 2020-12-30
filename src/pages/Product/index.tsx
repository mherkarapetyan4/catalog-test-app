import styled from "styled-components";
import { Spinner } from "../../components/UI/Spinner";
import useDetailProduct from "../../hooks/useDetailProduct";

const Product = () => {
  const { isFetching, product } = useDetailProduct();
  return (
    <ProductWrapper>
      {isFetching ? (
        <Spinner />
      ) : (
        <ProductInfo>
          <h1>{product?.title}</h1>
          <h2>${product?.price}</h2>
          <ImgWrapper>
            <img src={product?.image} alt={product?.title} />
          </ImgWrapper>
          <Paragraph>
              {product?.description}
          </Paragraph>
        </ProductInfo>
      )}
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`;

const ImgWrapper = styled.div`
    width: 20%;
    & > img {
        width: 100%
    }
`

const Paragraph = styled.p`
    margin-top: 15px
`

export default Product;
