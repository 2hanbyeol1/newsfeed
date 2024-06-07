import styled from "styled-components";
import WriteForm from "../components/WriteForm";

const WriteWrap = styled.div`
  margin-top: 20px;
`;

const Write = () => {
  return (
    <WriteWrap>
      <WriteForm />
    </WriteWrap>
  );
};

export default Write;
