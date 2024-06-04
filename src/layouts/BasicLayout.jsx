import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainContent = styled.main`
  margin: 0 auto;
  width: 1280px;

  @media only screen and (max-width: 1068px) {
    width: 710px;
  }

  @media only screen and (max-width: 734px) {
    width: 300px;
  }
`;

function BasicLayout() {
  return (
    <MainContent>
      <Outlet />
    </MainContent>
  );
}

export default BasicLayout;
