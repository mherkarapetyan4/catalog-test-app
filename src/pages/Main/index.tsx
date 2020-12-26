import useProduct from "../../hooks/useProduct"
import styled from "styled-components";
import { Spinner } from "../../components/UI/Spinner";
const Main = () => {
    const {isFetching} = useProduct()
    
    return <MainWrapper>
            {
                isFetching ? <Spinner /> : <div>asdfdsa</div>
            }

    </MainWrapper>
}

export default Main

const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center
`