import styled from "styled-components";
import { Spin } from "antd";

export const Spinner = () => {
  return (
    <StyledSpinner>
      <Spin size="large" />
    </StyledSpinner>
  );
};

const StyledSpinner = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  height: 100%;
  padding-top: 10rem;
`;
