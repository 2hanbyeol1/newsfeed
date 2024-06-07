import { useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "../supabase/supabase";
import { useNavigate } from "react-router-dom";

const ProfileEditModal = ({ closeModal, user, profileUrl, setProfileUrl }) => {
  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setNickname(user.nickname);
    setDescription(user.introduce);
  }, [user]);

  async function handleFileInputChange(e) {
    const files = e.target.files;
    const [file] = files;

    if (!file) return;

    const { data, error } = await supabase.storage.from("avatars").upload(`avatar_${Date.now()}.png`, file);

    if (error) {
      console.error("Error uploading file:", error);
      return;
    }
    setProfileUrl(`https://sdqrgpszdtttiucabwkd.supabase.co/storage/v1/object/public/avatars/${data.path}`);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nickname === "") return alert("닉네임을 입력해주세요");
    const { error } = await supabase
      .from("Users")
      .update({ nickname, profile_image: profileUrl, introduce: description })
      .eq("id", user.id);

    if (error) {
      console.error("Error updating profile:", error);
      return;
    }

    alert("프로필 수정 완료!");
    closeModal();
    navigate(0);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>프로필 수정</h2>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
        </ModalHeader>
        <FormImgGroup>
          <ImageUpload>
            <FileInput type="file" id="profile-image" name="profile-image" onChange={handleFileInputChange} />
            {profileUrl && <ProfileImage src={profileUrl} alt="Profile" />}
          </ImageUpload>
        </FormImgGroup>
        <ProfileForm onSubmit={handleSubmit}>
          <Label htmlFor="nickname">닉네임</Label>
          <Input
            type="text"
            id="nickname"
            name="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Label className="description-label" htmlFor="description">
            소개
          </Label>
          <Input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <ButtonContainer>
            <SubmitButton type="submit">프로필 수정 완료</SubmitButton>
          </ButtonContainer>
        </ProfileForm>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ProfileEditModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  gap: 15px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  position: relative;

  h2 {
    font-weight: bold;
    font-size: 20px;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  right: 0px;
`;

const ProfileForm = styled.form`
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
  width: 85%;
  gap: 5px 0;
  margin: 0 auto;
`;

const Label = styled.label``;

const FormImgGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const ImageUpload = styled.label`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const FileInput = styled.input`
  display: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  grid-column: span 2;
  margin-top: 3px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #69cffd;
  color: white;
  border: none;
  padding: 7px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #39c0ff;
    transition: background-color 0.3s ease-in-out 0s;
  }
`;
