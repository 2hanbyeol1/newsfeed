import styled from "styled-components";
import { useState } from "react";
import ProfileEditModal from "./ProfileEditModal";

const MyInfo = ({ user, profileUrl, setProfileUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태 관리

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <StProfileContainer>
      <StLeftSection>
        <StImg src={profileUrl} alt="Profile" />
      </StLeftSection>
      <StRightSection>
        <h2>{user.nickname}님, 반갑습니다!</h2>
        <StTagline>{user.introduce ?? "자기소개를 해주세요."}</StTagline>
        <StButton onClick={openModal}>프로필 수정</StButton>
      </StRightSection>
      {isModalOpen && (
        <ProfileEditModal closeModal={closeModal} user={user} profileUrl={profileUrl} setProfileUrl={setProfileUrl} />
      )}
    </StProfileContainer>
  );
};

export default MyInfo;

const StProfileContainer = styled.div`
  display: flex;
  flex-direction: row; /* 요소들을 가로로 정렬 */
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  margin-bottom: 80px;
`;

const StLeftSection = styled.div`
  display: flex;
  flex-direction: column; /* 버튼과 이미지가 세로로 정렬되도록 */
  align-items: center;
  margin-right: 20px; /* 왼쪽 섹션과 오른쪽 섹션 사이의 간격 */
`;

const StRightSection = styled.div`
  display: flex;
  flex-direction: column; /* 텍스트들이 세로로 정렬되도록 */
  align-items: flex-start;
  margin-left: 2em;
  margin-bottom: 60px;

  h2 {
    margin: 20px 0;
    font-size: 24px; /* 가독성을 위한 크기 조정 */
    font-weight: 700;
  }
`;

const StImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #ddd;
  margin-bottom: 20px; /* 이미지와 버튼 사이의 간격 조정 */
`;

const StTagline = styled.p`
  background-color: #3abef9;
  color: #fff;
  padding: 15px 50px;
  border-radius: 20px;
  margin-top: 10px; /* 소개 텍스트와 위 텍스트 사이의 간격 조정 */
  font-size: 20px;
  font-weight: 600;
`;

const StButton = styled.button`
  background-color: #3abef9;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: rgb(10, 123, 175);
    transition: background-color 0.3s ease-in-out 0s;
  }
`;
