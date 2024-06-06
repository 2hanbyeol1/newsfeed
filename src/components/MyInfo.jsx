import { useState } from "react";
import styled from "styled-components";
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
        <div>
          <h2>{user.nickname}님, 반갑습니다! 👋</h2>
          <StTagline>{user.introduce ?? "자기소개를 해주세요."}</StTagline>
        </div>
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
  flex-direction: row;
  align-items: center;
  gap: 25px;
  padding: 20px 20px 30px;
  margin: 20px 0 55px;
  border-bottom: 1px solid #ddd;
`;

const StLeftSection = styled.div`
  display: flex;
  flex-direction: column; /* 버튼과 이미지가 세로로 정렬되도록 */
  align-items: center;
`;

const StRightSection = styled.div`
  display: flex;
  flex-direction: column; /* 텍스트들이 세로로 정렬되도록 */
  align-items: flex-start;
  gap: 20px;

  h2 {
    font-size: 24px; /* 가독성을 위한 크기 조정 */
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

const StImg = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 2px solid #ddd;
  object-fit: cover;
`;

const StTagline = styled.p``;

const StButton = styled.button`
  background-color: #69cffd;
  color: white;
  border: none;
  padding: 6px 20px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #39c0ff;
    transition: background-color 0.3s ease-in-out 0s;
  }
`;
