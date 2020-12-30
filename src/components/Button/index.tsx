import styled from "styled-components";

const Button = (props: ButtonType) => {
  return <ButtonComponent onClick={props.onClick}>{props.label}</ButtonComponent>;
};
const ButtonComponent = styled.div`
border: 1px solid darkgray;
padding: 5px;
width: max-content;
box-sizing:border-box;
cursor: pointer; 
`

type ButtonType = {
  onClick: () => void;
  label: string;
};

export default Button;
