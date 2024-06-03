import { useRef } from "react";
import styled from "styled-components";
import { FaImage } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  min-width: 320px;
  max-width: 940px;
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
  bottom: 0;
  padding: 17px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;

  div {
    min-width: 320px;
    max-width: 940px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
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
    background-color:
      0.3s,
      color 0.3s;
  }

  button.done:hover {
    background-color: #5bb4f8;
    color: #ffffff;
  }
`;

const WriteForm = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    console.log("File selected:", event.target.files[0]);
  };
  return (
    <>
      <FormWrap>
        <FormWidthWrap>
          <Title>
            <input type="text" id="title" name="title" placeholder="제목을 입력하세요." aria-label="제목 입력" />
            <div></div>
          </Title>
          <TagInput>
            <input type="text" id="tags" name="tags" placeholder="태그를 입력하세요." aria-label="태그 입력" />
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
              id="content"
              name="content"
              placeholder="나의 개발 이야기를 적어보세요..."
              aria-label="내용 작성"
            ></textarea>
          </Content>
        </FormWidthWrap>
      </FormWrap>
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
    </>
  );
};

export default WriteForm;
