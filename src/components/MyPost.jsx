import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import default_Img from "../assets/noImg.png";

const MyPost = ({ posts }) => {
  return (
    <StPosts>
      <h3>내 게시글</h3>
      <StPostGrid>
        {posts.map((post) => (
          <StyledLink key={post.id} to={`/detail/${post.id}`}>
            <StPost>
              <img src={post.image_url || default_Img} alt="Post" />
              <h4>{post.title}</h4>
              <ReactMarkdown className="markdown-content">{post.description}</ReactMarkdown>
              <time>{new Date(post.created_at).toLocaleDateString()}</time>
            </StPost>
          </StyledLink>
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
    font-size: 24px;
    font-weight: bold;
  }
`;

const StPostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 50px;
  margin-top: 20px;
`;

const StPost = styled.div`
  min-height: 200px;
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

  .markdown-content {
    height: 140px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    text-overflow: ellipsis;
    white-space: normal;

    img {
      display: none;
    }
  }

  img {
    width: 100%; /* 이미지의 너비를 전체로 설정 */
    aspect-ratio: 16 / 9; /* 이미지 비율 설정 */
    border-radius: 10px;
    object-fit: cover;
  }
  h4 {
    font-size: 20px;
    margin: 10px 0;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    color: #666;
    white-space: nowrap;
    overflow: hidden; /* 내용이 넘칠 경우 자르기 */
    text-overflow: ellipsis; /* 내용이 넘칠 경우 ...으로 표시 */
    max-width: 100%;
    margin: 10px 0;
  }
  time {
    color: gray;
    font-size: 12px;
    text-align: end;
    width: 100%;
    display: inline-block;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none; /* 링크의 밑줄 없애기 */
  color: inherit; /* 링크의 색상을 부모 요소의 색상으로 설정 */
`;
