import { Outlet } from "react-router";
import { Layout } from "antd";
import styled from "styled-components";
import Background from "../assets/background.jpg";
import { Info } from "../utils";
import SearchBar from "./SearchBar";

const { Header, Footer, Content } = Layout;

const BaseLayout = () => {
  return (
    <Layout>
      <StyledHeader>
        <div>
          <SearchBar
            onSearch={() => {
              console.log("search");
            }}
            placeHolder={Info.searchArtist}
          />
        </div>
      </StyledHeader>
      <StyledContent>
        <BaseContainer>
          <Outlet />
        </BaseContainer>
      </StyledContent>
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
  height: 60vh;
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
  height: 30vh;
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledContent = styled(Content)`
  overflow-y: scroll;
`;
