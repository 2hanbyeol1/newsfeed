import styled from "styled-components";
import NewsFeed from "../../component/NewsFeed";
import { Link } from "react-router-dom";

function Main() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
  `;
  return (
    <div>
      <Container>
        <NewsFeed />
      </Container>
      <Link to={"/mypage"}>mypage로 이동하기</Link>
    </div>
  );
}

export default Main;
