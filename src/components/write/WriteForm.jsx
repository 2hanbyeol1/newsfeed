import { useState, useRef } from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../supabase/supabase";
import { useSelector } from "react-redux";

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

const Content = styled.div`
  width: 100%;
  min-height: 300px;

  textarea {
    width: 100%;
    min-height: 300px;
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
  const isLoggedIn = useSelector((state) => state.login);

  if (!isLoggedIn) {
    confirm("로그인 하고 작성해주세요.");
    navigate("/");
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [createdAt] = useState(new Date().toISOString());

  const descriptionTextareaRef = useRef(null);

  const handleTagButtonClick = (tag) => {
    const textarea = descriptionTextareaRef.current;
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    const beforeText = description.slice(0, selectionStart);
    const selectedText = description.slice(selectionStart, selectionEnd);
    const afterText = description.slice(selectionEnd);

    let newText;
    switch (tag) {
      case "H1":
        newText = `${beforeText}# ${selectedText} ${afterText}`;
        break;
      case "H2":
        newText = `${beforeText}${selectedText}\n## ${afterText}`;
        break;
      case "P":
        newText = `${beforeText}${selectedText}\n${afterText}`;
        break;
      default:
        newText = description;
    }

    setDescription(newText);

    textarea.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      data: { user }
    } = await supabase.auth.getUser();

    const { data, error } = await supabase.from("posts").insert([
      {
        title,
        description,
        created_by: user.id,
        created_at: createdAt,
        tag
      }
    ]);

    if (error) {
      console.error("Error adding post:", error.message, error.details, error.hint);
    } else {
      alert("포스트가 정상적으로 추가되었습니다.");
      console.log("Added post data:", data);
      navigate("/");
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
            <button type="button" aria-label="H1태그로 입력" onClick={() => handleTagButtonClick("H1")}>
              H1
            </button>
            <button type="button" aria-label="H2태그로 입력" onClick={() => handleTagButtonClick("H2")}>
              H2
            </button>
            <button type="button" aria-label="P태그로 입력" onClick={() => handleTagButtonClick("P")}>
              P
            </button>
          </SelectBtn>
          <Content>
            <textarea
              ref={descriptionTextareaRef}
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
