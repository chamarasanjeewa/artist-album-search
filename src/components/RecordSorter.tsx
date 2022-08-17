import { Select, Space, Typography } from "antd";
import styled from "styled-components";
import { SortBy } from "../utils";
const { Text } = Typography;

const { Option } = Select;

const RecordSorter = ({ onSort }: { onSort: (sortBy: SortBy) => void }) => {
  return (
    <StyledDiv>
      <Space>
        <Text>Sort by:</Text>
        <Select
          defaultValue={SortBy.none}
          style={{ width: 120 }}
          onChange={onSort}
        >
          <Option value={SortBy.none}>None</Option>
          <Option value={SortBy.ascending}>Ascending</Option>
          <Option value={SortBy.descending}>Descending</Option>
        </Select>
      </Space>
    </StyledDiv>
  );
};
export { RecordSorter as SortAlbums };

const StyledDiv = styled.div`
  display: flex;
  justify-content: end;
  margin: 1rem;
`;
