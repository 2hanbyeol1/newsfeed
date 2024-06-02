import styled from "styled-components";
import NewsFeed from "../../component/NewsFeed";

const Main = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <Container>
      <NewsFeed />
    </Container>
  );
};

export default Main;
