import { useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "../supabase/supabase";

const ProfileEditModal = ({ closeModal, user, profileUrl, setProfileUrl }) => {
  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setNickname(user.nickname);
    setDescription(user.introduce);
  }, [user]);

  async function handleFileInputChange(e) {
    const files = e.target.files;
    const [file] = files;

    if (!file) {
      return;
    }

    const { data, error } = await supabase.storage.from("avatars").upload(`avatar_${Date.now()}.png`, file);

    if (error) {
      console.error("Error uploading file:", error);
      return;
    }
    setProfileUrl(`https://sdqrgpszdtttiucabwkd.supabase.co/storage/v1/object/public/avatars/${data.path}`);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("Users")
      .update({ nickname: nickname, profile_image: profileUrl, introduce: description })
      .eq("id", user.id);

    if (error) {
      console.error("Error updating profile:", error);
      return;
    }

    alert("프로필 수정 완료!");
    closeModal();
    location.reload();
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
            <Label htmlFor="description">소개</Label>
            <Textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="profile-image">프로필 이미지</Label>
            <ImageUpload>
              <FileInput type="file" id="profile-image" name="profile-image" onChange={handleFileInputChange} />
              {profileUrl && <ProfileImage src={profileUrl} alt="Profile" />}
            </ImageUpload>
          </FormGroup>
          <SubmitButton type="submit">프로필 수정 완료</SubmitButton>
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
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: calc(100% - 90px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
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

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #218838;
  }
`;
