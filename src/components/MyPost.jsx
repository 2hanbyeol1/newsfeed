import styled from "styled-components";

const dummyPosts = [
  {
    id: 1,
    title: "5월 4주차 TOP 10",
    description: "[TOP 10] 개발자에게 도움이 될 만한...",
    imageUrl:
      "https://velog.velcdn.com/images/oneoneone/post/1b46c1d0-c393-4f6a-b2c3-1dc33ea5fa85/image.png",
  },
  {
    id: 2,
    title: "난 주니어 개발자다",
    description: "주니어 개발자의 이야기를 담은...",
    imageUrl:
      "https://media.licdn.com/dms/image/sync/D5627AQE3g3IxscKSWg/articleshare-shrink_800/0/1712043794313?e=2147483647&v=beta&t=GVXU-SfLHlHXX2Dg1EkRb6wRSmou5mDOUen_fnwCwUE",
  },
  {
    id: 3,
    title: "새로운 클라우드 구축하기",
    description: "클라우드 인프라를 구축하는 방법...",
    imageUrl: "https://i.ytimg.com/vi/Br2Z5wCk98o/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "IT 산업에 있어서 앞으로의 난관",
    description: "대충 주가 떨어지는 소리는...",
    imageUrl:
      "https://img.freepik.com/free-vector/businessman-feeling-down-about-economic-crisis-caused-by-coronavirus-vector_53876-169103.jpg?w=1380&t=st=1717247942~exp=1717248542~hmac=309975c34ed043cd68461d30260b849cff10713b91cf1d3884b12c61a5aae68f",
  },
  {
    id: 5,
    title: "리액트에서 리렌더링에 대한 고찰",
    description: "나는 리액트의 리렌더링에 대해서...",
    imageUrl:
      "data:image/png;base64,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",
  },
  {
    id: 6,
    title: "최근 개발자 취업에 대해서",
    description: "요즘 취업시장이 정말 얼음장 같은...",
    imageUrl:
      "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe3095240-9720-4e92-a88b-0d24d2a649e2%2F%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8C%E1%85%A6%E1%86%AB%E1%84%90%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%A7%E1%86%AB1.jpg&blockId=756956c2-9d68-4e62-b84e-e36b39006e3c",
  },
];

const MyPost = () => {
  return (
    <StPosts>
      <h3>내 게시글</h3>
      <StPostGrid>
        {dummyPosts.map((post) => (
          <StPost key={post.id}>
            <img src={post.imageUrl} alt="Post" />
            <h4>{post.title}</h4>
            <p>{post.description}</p>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 1100px;
  margin: 20px auto;
  background-color: #fff;

  h3 {
    font-size: 24px;
  }
`;

const StPostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const StPost = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  img {
    width: 100%; /* 이미지의 너비를 전체로 설정 */
    height: auto; /* 이미지의 높이를 자동으로 설정 */
    border-radius: 10px;
  }
  h4 {
    margin: 10px 0 5px;
  }
  p {
    font-size: 0.9em;
    color: #666;
  }
`;
