import styled from "styled-components";

const StyledLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  margin: 0 auto;
  width: 1280px;
  flex: 1;

  @media only screen and (max-width: 1068px) {
    width: 710px;
  }

  @media only screen and (max-width: 734px) {
    width: 300px;
  }
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <MainContent>{children}</MainContent>
    </StyledLayout>
  );
};

export default Layout;
