import styled from 'styled-components';
const ProductItem = (props: {product: ProductType}) => {
  const { title, price, description, image} = props.product;
return <CardWrapper>
  <Title>{title}</Title>
  <ImageWrapper>
     <img src={image} />
  </ImageWrapper>
   <Description> {description}</Description> <h4>${price}</h4>
   </CardWrapper>
};

export default ProductItem;
const CardWrapper = styled.div`
  width: 33.3%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 5px; 
  margin-bottom:10px;
  box-sizing: border-box;
  align-items: center;
  margin-right: 5px;
  border: 1px solid #ccc;
  cursor: pointer
  `
const Title = styled.h3`
display: block;
display: -webkit-box;
height: 16px;
line-height: 1rem;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
`
const Description = styled.p`
display: block;
display: -webkit-box;
height: 32px;
line-height: 1rem;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
width: 100%;
text-overflow: ellipsis;
`


const ImageWrapper = styled.div`
width: 50%;
margin: 0 auto;
height: 110px;
display: flex;
justify-content: center;
align-items: center;
  & > img {
    width: 80%;
    height: 100%;
    object-fit: contain;
  }
`
export type ProductType = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string
}