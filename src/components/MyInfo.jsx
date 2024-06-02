import styled from "styled-components";
import profilePic from "../assets/user256.png"; // 프로필 이미지 경로를 맞춰주세요

const MyInfo = () => {
  return (
    <StInfo>
      <StImg src={profilePic} alt="Profile" />
      <h2>정현우님, 반갑습니다!</h2>
      <br />
      <StTagline>INFP, 주니어 개발자</StTagline>
      <br />
      <button>프로필 수정</button>
    </StInfo>
  );
};

export default MyInfo;

const StInfo = styled.div`
  display: flex;
  flex-direction: column; /* 수직 정렬 */
  align-items: center; /* 중앙 정렬 */
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;

  h2 {
    margin: 10px 0;
    font-size: 40px;
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px; /* 버튼과 위 텍스트 사이의 간격 조정 */
  }

  button:hover {
    background-color: rgb(22, 111, 71);
    transition: background-color 0.3s ease-in-out 0s;
  }
`;

const StImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #ddd;
  margin-bottom: 20px; /* 이미지와 텍스트 사이의 간격 조정 */
`;

const StTagline = styled.p`
  background-color: #e7f3ff;
  color: #0073e6;
  padding: 5px 10px;
  border-radius: 20px;
  margin-top: 10px; /* 소개 텍스트와 위 텍스트 사이의 간격 조정 */
  font-size: 20px;
`;
