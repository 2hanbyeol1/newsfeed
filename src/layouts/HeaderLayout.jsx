import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import UpButton from "../components/UpButton";

const StyledLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  margin: 0 auto;
  width: 1090px;
  flex: 1;
  margin-top: 70px;

  @media only screen and (max-width: 1068px) {
    width: 710px;
  }

  @media only screen and (max-width: 734px) {
    width: 310px;
  }
`;

const HeaderLayout = () => {
  return (
    <StyledLayout>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <UpButton />
    </StyledLayout>
  );
};

export default HeaderLayout;
