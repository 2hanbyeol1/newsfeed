import React from "react";
import styled from "styled-components";
import WriteForm from "../components/write/WriteForm";

const WriteWrap = styled.div`
  margin-top: 20px;
  position: relative;
`;

const Write = () => {
  return (
    <WriteWrap>
      <WriteForm />
    </WriteWrap>
  );
};

export default Write;
