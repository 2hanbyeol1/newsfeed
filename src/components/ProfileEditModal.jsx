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
        <ProfileForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nickname">닉네임</Label>
            <Input
              type="text"
              id="nickname"
              name="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
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
          </FormGroup>
          <FormImgGroup>
            <ImageUpload>
              <FileInput type="file" id="profile-image" name="profile-image" onChange={handleFileInputChange} />
              {profileUrl && <ProfileImage src={profileUrl} alt="Profile" />}
            </ImageUpload>
            <ImgButton htmlFor="profile-image">이미지 변경하기</ImgButton>
          </FormImgGroup>
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
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-weight: bold;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #3abef9;
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-around;
  align-items: center;

  label:first-child {
    padding-right: 0px;
  }

  label.description-label {
    padding-right: 15px;
  }
`;

const FormImgGroup = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const ImgButton = styled.label`
  margin-top: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  background: #3abef9;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-align: center;

  &:hover {
    background: #0aa4eb;
  }
`;

const Input = styled.input`
  width: calc(100% - 90px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const ImageUpload = styled.div`
  display: flex;
  align-items: center;
`;

const FileInput = styled.input`
  display: none;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SubmitButton = styled.button`
  width: 150px;
  padding: 10px;
  background: #3abef9;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0aa4eb;
  }
`;
