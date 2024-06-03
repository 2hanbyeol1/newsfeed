import styled from "styled-components";
import Header from "../components/Header";
import MyInfo from "../components/MyInfo";
import MyPost from "../components/MyPost";
import { Outlet } from "react-router-dom";

const MyPage = () => {
  return (
    <StContainer>
      <Header />
      <main>
        <MyInfo />
        <MyPost />
      </main>
      <Outlet />
    </StContainer>
  );
};

export default MyPage;

const StContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 150px;
  text-align: center;
`;