import styled from "styled-components";
import NewsFeed from "../components/NewsFeed";

const Container = styled.div`
  width: 100%;
`;
function Main() {
  return (
    <div>
      <Container>
        <NewsFeed />
      </Container>
    </div>
  );
}

export default Main;
