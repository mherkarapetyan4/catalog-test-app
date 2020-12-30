import { useState } from "react";
import styled from "styled-components";
const Select = (props: SelectType) => {
    const [isSelectable, setIsSelectable] = useState(false);
    const [selected, setSelected] = useState(props.value); 
    const handleOnChange = (val: string ) => {
      setIsSelectable(false);
      props.onChange(val);
    };
  return (
    <SelectWrapper>
      <SelectedOption onClick={() => setIsSelectable(!isSelectable)}>
        {selected}
      </SelectedOption>
      {isSelectable && (
        <Options>
          {props.options
            .filter((el: SelectOptionType) => optionStringChecking(el, "value"))
            .map((el: SelectOptionType) => (
              <OptionElement
                key={optionStringChecking(el, "value")}
                onClick={() => {
                  handleOnChange(optionStringChecking(el, "value"));
                  setSelected(optionStringChecking(el, "title"));
                }}
              >
                {optionStringChecking(el, 'title')}
              </OptionElement>
            ))}
        </Options>
      )}
    </SelectWrapper>
  );
};

export const optionStringChecking = (
  option: SelectOptionType,
  customKey: string
): string =>  (typeof option === "string" ? option : option[customKey]);

const SelectWrapper = styled.div`
  display: flex;
  position: relative;
`;

const SelectedOption = styled.div`
  width: 200px;
  padding: 5px;
  border: 1px solid darkgray;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
const Options = styled.div`
  position: absolute;
  z-index: 1000;
  top: 40px;
  display: "flex";
  flex-direction: column;
  background: white;
`;
const OptionElement = styled.div`
    width: 200px;
    border-bottom: 1px solid #ccc;
    padding: 5px;
    box-sizing: border-box;
`;

export type SelectType = {
  value: string;
  options: Array<SelectOptionType | string>;
  onChange: (val: string) => void;
  //   value: string;
};

export type SelectOptionType = {
  [value: string]: string;
  title: string;
} | string;

export default Select;
