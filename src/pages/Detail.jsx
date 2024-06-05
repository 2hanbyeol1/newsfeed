import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import supabase from "../supabase/supabase";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
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
    @media only screen and (max-width: 1068px) {
      font-size: 32px;
    }
    @media only screen and (max-width: 734px) {
      font-size: 28px;
    }
  }
  div {
    background: rgb(73, 80, 87);
    height: 6px;
    width: 3.8vw;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 1px;

    @media only screen and (max-width: 734px) {
      width: 6vw;
    }
  }
`;
const TagInput = styled.div`
  margin: 20px 0 40px 0;
  input {
    padding: 6px;
    border: none;
    border-radius: 6px;
    box-sizing: border-box;
    font-size: ${(props) => (props.isEditMode ? "inherit" : "18px")};
    font-weight: ${(props) => (props.isEditMode ? "inherit" : "800")};
    color: ${(props) => (props.isEditMode ? "inherit" : "#349DED")};
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
const MarkdownPreview = styled.div`
  width: 100%;
  min-height: 400px;
  word-break: keep-all;
  h1,
  h2 {
    margin: 20px 0 10px;
    font-weight: bold;
  }
  h1 {
    font-size: 36px;
    margin: 20px 0;
    @media only screen and (max-width: 1068px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 734px) {
      font-size: 23px;
    }
  }
  h2 {
    font-size: 22px;
    margin: 15px 0;
    @media only screen and (max-width: 1068px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 734px) {
      font-size: 18px;
    }
  }
  p {
    margin: 10px 0;
    font-size: 14px;
    line-height: 1.6;
  }
  ul,
  ol {
    padding-left: 20px;
    margin: 10px 0;
  }
  code {
    background-color: #f5f5f5;
    padding: 2px 4px;
    border-radius: 3px;
    font-family: monospace;
  }
  blockquote {
    border-left: 4px solid #ddd;
    padding-left: 10px;
    color: #555;
    margin: 10px 0;
  }
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
const SubmitBtn = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 17px 0;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  div.flex-box {
    margin: 0 auto;
    width: 1090px;
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
  button.edit {
    padding: 10px 15px;
    border-radius: 7px;
    background-color: #61bafe;
    color: #eef1f3;
    transition:
      background-color 0.3s,
      color 0.3s;
  }
  button.edit:hover {
    background-color: #5bb4f8;
    color: #ffffff;
  }
  button.delete {
    padding: 10px 15px;
    border-radius: 7px;
    background-color: #9f9f9f;
    color: #eef1f3;
    margin-right: 10px;
    transition:
      background-color 0.3s,
      color 0.3s;
  }
  button.delete:hover {
    background-color: #8f8f8f;
    color: #ffffff;
  }
`;
const Detail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.login);
  const [post, setPost] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [markdownText, setMarkdownText] = useState("");
  const [userId, setUserId] = useState(null);
  const descriptionTextareaRef = useRef(null);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("posts").update(post).eq("id", postId);
    if (error) {
      console.error("Error updating post:", error.message);
    } else {
      alert("포스트가 정상적으로 수정되었습니다.");
      setIsEditMode(false);
    }
  };

  const handleDelete = async () => {
    const { error } = await supabase.from("posts").delete().eq("id", postId);
    if (error) {
      console.error("Error deleting post:", error.message);
    } else {
      alert("포스트가 삭제되었습니다.");
      navigate("/");
    }
  };

  const enterEditMode = () => {
    setIsEditMode(true);
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
    if (e.target.name === "description") {
      setMarkdownText(e.target.value);
    }
  };

  const handleTagButtonClick = (tag) => {
    const textarea = descriptionTextareaRef.current;
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    const beforeText = post.description.slice(0, selectionStart);
    const selectedText = post.description.slice(selectionStart, selectionEnd);
    const afterText = post.description.slice(selectionEnd);
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
        newText = post.description;
    }
    setPost({ ...post, description: newText });
    setMarkdownText(newText);
  };

  useEffect(() => {
    const checkLogin = async () => {
      if (isLoggedIn) {
        try {
          const {
            data: { user }
          } = await supabase.auth.getUser();
          if (user) {
            setUserId(user.id);
          } else {
            console.error("사용자 정보를 가져올 수 없습니다.");
          }
        } catch (error) {
          console.error("로그인 상태 확인 중 오류가 발생했습니다:", error.message);
        }
      }
    };
    checkLogin();
  }, [isLoggedIn]);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase.from("posts").select("*").eq("id", postId).single();
      if (error) {
        console.error("Error fetching post:", error.message);
      } else {
        setPost(data);
        setMarkdownText(data.description);
      }
    };
    fetchPost();
  }, [postId]);

  return (
    <div>
      <FormWrap onSubmit={handleUpdate}>
        <FormWidthWrap>
          <Title>
            <input
              type="text"
              name="title"
              placeholder="제목을 입력하세요."
              aria-label="제목 입력"
              value={post.title || ""}
              onChange={handleChange}
              readOnly={!isEditMode}
            />
            <div></div>
          </Title>
          <TagInput iseditmode={isEditMode ? "true" : "false"}>
            <input
              type="text"
              name="tag"
              placeholder="태그를 입력하세요."
              aria-label="태그 입력"
              value={post.tag || ""}
              onChange={handleChange}
              readOnly={!isEditMode}
            />
          </TagInput>
          {isEditMode && (
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
          )}
          <Content>
            {isEditMode ? (
              <textarea
                ref={descriptionTextareaRef}
                name="description"
                placeholder="나의 개발 이야기를 적어보세요..."
                aria-label="내용 작성"
                value={post.description || ""}
                onChange={handleChange}
              ></textarea>
            ) : (
              <MarkdownPreview>
                <ReactMarkdown>{markdownText || ""}</ReactMarkdown>
              </MarkdownPreview>
            )}
          </Content>
        </FormWidthWrap>
        {isLoggedIn && userId === post.created_by && (
          <SubmitBtn>
            <div className="flex-box">
              <button type="button" className="back">
                <FaArrowLeft />
                <Link to="/">나가기</Link>
              </button>
              {isEditMode ? (
                <button className="done" type="submit">
                  수정 완료
                </button>
              ) : (
                <div>
                  <button type="button" className="delete" onClick={handleDelete}>
                    삭제하기
                  </button>
                  <button className="edit" onClick={enterEditMode}>
                    수정하기
                  </button>
                </div>
              )}
            </div>
          </SubmitBtn>
        )}
      </FormWrap>
    </div>
  );
};

export default Detail;
