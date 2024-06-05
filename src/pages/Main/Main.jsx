import styled from "styled-components";
import NewsFeed from "../../components/NewsFeed";

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
    </div>
  );
}

export default Main;
