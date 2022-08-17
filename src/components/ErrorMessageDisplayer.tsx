import styled from "styled-components";
import { Typography } from "antd";
const { Title } = Typography;

export const ErrorMessageDisplayer = ({ error }: { error: string }) => {
  return (
    <StyledDiv>
      <StyledText level={3} type="danger">
        {error}
      </StyledText>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledText = styled(Title)`
  margin-left: auto;
  margin-right: auto;
`;

export default ErrorMessageDisplayer;
