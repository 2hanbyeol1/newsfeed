import { Outlet } from "react-router-dom";
import styled from "styled-components";

const CenteredView = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

function CenteredLayout() {
  return (
    <CenteredView>
      <Outlet />
    </CenteredView>
  );
}

export default CenteredLayout;
