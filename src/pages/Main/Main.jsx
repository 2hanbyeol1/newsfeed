import styled from "styled-components";
import NewsFeed from "../../components/NewsFeed";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
function Main() {
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
