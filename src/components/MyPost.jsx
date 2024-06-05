import styled from "styled-components";

const MyPost = ({ user, posts }) => {
  return (
    <StPosts>
      <h3>내 게시글</h3>

      <StPostGrid>
        {posts.map((post) => (
          <StPost key={post.id}>
            <img src={post.image_url} alt="Post" />
            <h4>{post.title}</h4>
            <p>{post.description}</p>
            <p>{new Date(post.created_at).toLocaleDateString()}</p>
            <h2>{user.nickname}</h2>
          </StPost>
        ))}
      </StPostGrid>
    </StPosts>
  );
};

export default MyPost;

const StPosts = styled.section`
  display: flex;
  flex-direction: column; /* 컬럼 방향으로 변경 */
  border-radius: 10px;
  margin: 20px auto;
  background-color: #fff;

  h3 {
    display: flex;
    font-size: 24px;
    font-weight: 700;
  }
`;

const StPostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  margin-top: 20px;
`;

const StPost = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    transform: translateY(-9px); /* 게시글 클릭 시 위로 이동하는 호버 효과 */
    transition-duration: 0.4s;
  }

  img {
    width: 100%; /* 이미지의 너비를 전체로 설정 */
    height: 70%;
    border-radius: 10px;
    object-fit: cover;
  }
  h4 {
    margin: 10px 0 5px;
  }
  p {
    font-size: 0.9em;
    color: #666;
  }
`;
