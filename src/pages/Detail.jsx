import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const DetailWrap = styled.div`
  margin-top: 100px;
`;

const Detail = () => {
  return (
    <div>
      <Header />
      <DetailWrap>Detail페이지 입니다.</DetailWrap>
    </div>
  );
};

export default Detail;
