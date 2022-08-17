import styled from "styled-components";
import { Typography } from "antd";
const { Text } = Typography;

export const ErrorMessage = ({ error }: { error: string }) => {
  return <StyledText type="danger">{error}</StyledText>;
};

const StyledText = styled(Text)`
  margin-left: auto;
  margin-right: auto;
`;

export default ErrorMessage;
