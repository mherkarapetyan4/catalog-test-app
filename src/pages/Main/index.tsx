import useProduct from "../../hooks/useProduct"
import styled from "styled-components";
import { Spinner } from "../../components/UI/Spinner";
import ProductItem from "../../components/ProductItem";
const Main = () => {
    const {isFetching, products} = useProduct()
    
    return <MainWrapper>
            {
                isFetching ? <Spinner /> : products.map((el,i) => <ProductItem key={i} product={el}/>)
            }

    </MainWrapper>
}

export default Main

const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    // align-items: f;
    width: 100%;
    box-sizing: border-box
`