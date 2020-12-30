import styled from "styled-components";
import Select, { optionStringChecking, SelectOptionType } from "../Select";
const Filter = (props: FilterType) => { 
  return (
    <FilterWrapper>
      <p>{props.label}</p>
      <Select
        value={optionStringChecking(props.options[0], 'title')}
        options={props.options}
        onChange={props.onChange}
      />
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

type FilterType = {
  label: string;
  options: Array<SelectOptionType | string>;
  onChange: (val: string) => void;
  //   value: string;
};

export default Filter;
