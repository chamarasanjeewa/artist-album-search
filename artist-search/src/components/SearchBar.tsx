import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;

export default function SearchBar({
  onSearch,
  placeHolder = "Search",
}: {
  onSearch: (value: string) => void;
  placeHolder?: string;
}) {
  return (
    <StyledDiv>
      <StyledSearch
        placeholder={placeHolder ?? "Search"}
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </StyledDiv>
  );
}

const StyledSearch = styled(Search)`
  width: 50rem;
  display: flex;
`;

const StyledDiv = styled.div`
  justify-content: center;
  display: flex;
`;
