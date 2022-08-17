import { Outlet } from "react-router";
import { Layout, Typography } from "antd";
import styled from "styled-components";
import Background from "../assets/background.jpg";
import { Info } from "../utils";

const { Header, Footer, Content } = Layout;

const BaseLayout = () => {
  return (
    <Layout>
      <StyledHeader>
        <div>
          <Typography.Title>{Info.title}</Typography.Title>
        </div>
      </StyledHeader>
      <Content>
        <BaseContainer>
          <Outlet />
        </BaseContainer>
      </Content>
      <StyledFooter>copy rights ©2022 Created by chamara</StyledFooter>
    </Layout>
  );
};

export default BaseLayout;

const BaseContainer = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  padding-top: 1rem;
  background-color: ${(props) => props.theme.secondary};
  height: 70vh;
  overflow: hidden;
`;

const StyledFooter = styled(Footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  height: 10vh;
`;

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: "center";
  height: 20vh;
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
