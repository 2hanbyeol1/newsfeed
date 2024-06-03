import styled from "styled-components";

const Item = styled.div`
  padding: 10px;
  text-align: center;
  box-shadow: 0px 0px 20px silver;
  max-width: 300px;
  margin: 24px auto;
  background-color: #a5d8ff;
  border-radius: 10px;
  border: 1px solid #000;
  min-width: 300px;

  .card-header {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }

  .profile {
    width: 40px;
    height: 40px;
    background-color: #d8d8d8;
    border-radius: 50%;
    margin-right: 10px;
  }

  .writer {
    font-size: 14px;
    color: #555;
  }

  .card-content {
    background-color: #fff;
    border-radius: 7px;
    padding: 5px;
    text-align: left;
  }

  .content-img {
    width: 100%;
    height: 210px;
  }

  .title {
    padding: 10px 0px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
  }

  .content {
    font-size: 14px;
    color: #333;
    line-height: 1.5;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* 최대 줄 수 */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

const NewsCard = () => {
  return (
    <Item>
      <div className="card-header">
        <div className="profile"></div>
        <div className="writer">gmltncpfl1</div>
      </div>
      <div className="card-content">
        <img className="content-img" src="/public/images/images.jpg" alt="이미지"></img>
        <div className="title">프론트엔드 추천 자료 모음</div>
        <div className="content">
          사이트 MDN - 가장 유명한 MDN 모던 javascript 튜토리얼 - JS 튜토리얼로 정알 좋음. 타입스크립트 핸드북 - TS
          공식문서 타임 븥 핸드북 캠턴퍼프러블 웹 핸드북 fontawesome 다양한 ICON을 가져올 수 있는 사이트 flatu 사이트
          MDN
        </div>
      </div>
    </Item>
  );
};

export default NewsCard;
