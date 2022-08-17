import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const { Search } = Input;

const SearchBar = ({
  onSearch,
  placeHolder = "Search",
}: {
  onSearch: (value: string) => void;
  placeHolder?: string;
}) => {
  const navigate = useNavigate();
  return (
    <StyledDiv>
      <StyledSearch
        placeholder={placeHolder ?? "Search"}
        allowClear
        enterButton="Search"
        size="large"
        onSearch={(value: string) => {
          onSearch(value);
          navigate(`/search`, {
            state: { artistName: value ?? "" },
          });
        }}
      />
    </StyledDiv>
  );
};

export default SearchBar;

const StyledSearch = styled(Search)`
  width: 50rem;
  display: flex;
`;

const StyledDiv = styled.div`
  justify-content: center;
  display: flex;
`;
