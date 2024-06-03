import styled from "styled-components";

const dummyPosts = [
  {
    id: 1,
    title: "5월 4주차 TOP 10",
    description: "[TOP 10] 개발자에게 도움이 될 만한...",
    imageUrl: "https://velog.velcdn.com/images/oneoneone/post/1b46c1d0-c393-4f6a-b2c3-1dc33ea5fa85/image.png"
  },
  {
    id: 2,
    title: "난 주니어 개발자다",
    description: "주니어 개발자의 이야기를 담은...",
    imageUrl:
      "https://media.licdn.com/dms/image/sync/D5627AQE3g3IxscKSWg/articleshare-shrink_800/0/1712043794313?e=2147483647&v=beta&t=GVXU-SfLHlHXX2Dg1EkRb6wRSmou5mDOUen_fnwCwUE"
  },
  {
    id: 3,
    title: "새로운 클라우드 구축하기",
    description: "클라우드 인프라를 구축하는 방법...",
    imageUrl: "https://i.ytimg.com/vi/Br2Z5wCk98o/maxresdefault.jpg"
  },
  {
    id: 4,
    title: "AI 산업에 있어서 앞으로의 난관",
    description: "대충 주가 떨어지는 소리가...",
    imageUrl:
      "https://img.freepik.com/free-vector/businessman-feeling-down-about-economic-crisis-caused-by-coronavirus-vector_53876-169103.jpg?w=1380&t=st=1717247942~exp=1717248542~hmac=309975c34ed043cd68461d30260b849cff10713b91cf1d3884b12c61a5aae68f"
  },
  {
    id: 5,
    title: "리액트에서 useEffect에 대한 고찰",
    description: "컴포넌트의 여러 값들을 활용해 ...",
    imageUrl: "https://velog.velcdn.com/images/alsgud8311/post/b921f9e8-3153-4092-9fff-cc13691cd805/image.jpg"
  },
  {
    id: 6,
    title: "최근 개발자 취업에 대해서",
    description: "요즘 취업시장이 정말 얼음장 같은...",
    imageUrl:
      "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe3095240-9720-4e92-a88b-0d24d2a649e2%2F%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8C%E1%85%A6%E1%86%AB%E1%84%90%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%A7%E1%86%AB1.jpg&blockId=756956c2-9d68-4e62-b84e-e36b39006e3c"
  }
];

const MyPost = () => {
  const handleEdit = (postId) => {
    console.log(`Edit post with id: ${postId}`);
    // 추가 로직 작성
  };

  const handleDelete = (postId) => {
    console.log(`Delete post with id: ${postId}`);
    // 추가 로직 작성
  };
  return (
    <StPosts>
      <h3>내 게시글</h3>
      <StPostGrid>
        {dummyPosts.map((post) => (
          <StPost key={post.id}>
            <img src={post.imageUrl} alt="Post" />
            <h4>{post.title}</h4>
            <p>{post.description}</p>
            <StButtonGroup>
              <button onClick={() => handleEdit(post.id)}>수정</button>
              <button onClick={() => handleDelete(post.id)}>삭제</button>
            </StButtonGroup>
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
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 1100px;
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

const StButtonGroup = styled.div`
  margin-top: 10px;

  button {
    flex: 1;
    padding: 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.3s;

    &:first-child {
      margin-right: 10px;
      background-color: #b3b3b3;
      color: white;

      &:hover {
        background-color: #8e8d8d;
      }
    }

    &:last-child {
      background-color: #f44336;
      color: white;

      &:hover {
        background-color: #e43431;
      }
    }
  }
`;
