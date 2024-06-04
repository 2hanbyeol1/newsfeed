import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaImage, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../supabase/supabase";

const FormWrap = styled.form`
  width: 100%;

  input,
  textarea,
  button {
    border: none;
    padding: 0;
    margin: 0;
    background: none;
    box-shadow: none;
    outline: none;
    resize: none;
  }

  button {
    cursor: pointer;
  }
`;

const FormWidthWrap = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  box-sizing: border-box;
`;

const Title = styled.div`
  width: 100%;

  input {
    display: block;
    font-size: 48px;
    width: 100%;
    height: fit-content;
    line-height: 1.5;
    font-weight: bold;
  }

  div {
    background: rgb(73, 80, 87);
    height: 6px;
    width: 3.5vw;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 1px;
  }
`;

const TagInput = styled.div`
  margin: 40px 0;
`;

const SelectBtn = styled.div`
  display: flex;
  margin-bottom: 40px;
  button {
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: #747474;
    flex-shrink: 0;
    background-color: #f3f3f3;
    border-right: 1px solid #fff;
    transition:
      background-color 0.3s,
      color 0.3s;

    &:hover {
      background-color: #e0e0e0;
      color: #333;
    }
  }
`;

const ImageUploadButton = styled.label`
  display: inline-block;
  cursor: pointer;
`;

const InputFile = styled.input`
  display: none;
`;

const ButtonIcon = styled.span`
  display: inline-block;
  width: 52px;
  height: 52px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #747474;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #e0e0e0;
    color: #333;
  }
`;

const Content = styled.div`
  width: 100%;
  min-height: 400px;

  textarea {
    width: 100%;
    min-height: 400px;
    overflow: auto;
  }
`;

const SubmitBtn = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 17px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;

  div {
    margin: 0 auto;
    width: 1280px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1068px) {
      width: 710px;
    }

    @media only screen and (max-width: 734px) {
      width: 300px;
    }
  }
  button {
    font-size: 20px;
    border: none;
    padding: 0;
    margin: 0;
    background: none;
    box-shadow: none;
    font: inherit;
    outline: none;
    resize: none;
    cursor: pointer;
  }
  button.back {
    display: flex;
    align-items: center;
    color: #000000;
    svg {
      margin-right: 10px;
    }
    a {
      text-decoration: none;
      color: #000000;
    }
  }

  button.done {
    padding: 10px 15px;
    border-radius: 7px;
    background-color: #61bafe;
    color: #eef1f3;
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  button.done:hover {
    background-color: #5bb4f8;
    color: #ffffff;
  }
`;

const WriteForm = () => {
  let navigate = useNavigate();
  const fileInputRef = useRef(null);
  // const userUniqueId = "d2ae74c5-3d4c-4df3-befa-334170bc93942";
  const userUniqueId = null;
  // useselector를 이용해서 한별님이 만들어 놓은 리덕스 값을 가져와야함

  useEffect(() => {
    if (!userUniqueId) {
      console.log("hi");
      confirm("로그인 하고 작성해주세요.");
      navigate("/");
    }
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [createdAt] = useState(new Date());

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    console.log("File selected:", event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("posts").insert([
      {
        title,
        description,
        created_by: userUniqueId,
        created_at: createdAt,
        tag
      }
    ]);

    if (error) {
      console.error("Error adding post:", error.message, error.details, error.hint);
    } else {
      alert("포스트가 정상적으로 추가되었습니다.");
      console.log("Added post data:", data);
    }
  };

  return (
    <>
      <FormWrap onSubmit={handleSubmit}>
        <FormWidthWrap>
          <Title>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="제목을 입력하세요."
              aria-label="제목 입력"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div></div>
          </Title>
          <TagInput>
            <input
              type="text"
              id="tags"
              name="tags"
              placeholder="태그를 입력하세요."
              aria-label="태그 입력"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </TagInput>
          <SelectBtn>
            <button type="button" aria-label="H1태그로 입력">
              H1
            </button>
            <button type="button" aria-label="H2태그로 입력">
              H2
            </button>
            <button type="button" aria-label="P태그로 입력">
              P
            </button>
            <ImageUploadButton htmlFor="image-upload" aria-label="Image 업로드" onClick={handleButtonClick}>
              <ButtonIcon>
                <FaImage />
              </ButtonIcon>
              <InputFile type="file" id="image-upload" ref={fileInputRef} onChange={handleFileChange} />
            </ImageUploadButton>
          </SelectBtn>
          <Content>
            <textarea
              id="description"
              name="description"
              placeholder="나의 개발 이야기를 적어보세요..."
              aria-label="내용 작성"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </Content>
        </FormWidthWrap>
        <SubmitBtn>
          <div>
            <button className="back">
              <FaArrowLeft />
              <Link to="/">나가기</Link>
            </button>
            <button className="done" type="submit">
              출간하기
            </button>
          </div>
        </SubmitBtn>
      </FormWrap>
    </>
  );
};

export default WriteForm;
