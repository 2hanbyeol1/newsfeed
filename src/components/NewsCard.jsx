import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import supabase from "../supabase/supabase";
import default_Img from "../assets/noImg.png";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Item = styled.div`
  padding: 10px;
  text-align: center;
  box-shadow: 0px 0px 20px silver;
  width: 300px;
  margin: 32px 32px auto;
  background-color: #a5d8ff;
  border-radius: 10px;
  border: 1px solid #000;

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
    padding: 16px;
    text-align: left;
    min-height: 300px;
  }

  .content-img {
    width: 100%;
    height: 210px;
    border-radius: 4px;
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
    -webkit-line-clamp: 2; /* 최대 줄 수 */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  .markdown-content {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 최대 줄 수 */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

const NewsCard = ({ image_url, title, description, created_by }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      let { data } = await supabase.from("Users").select("*").eq("id", created_by);
      setUser(data[0]);
    };
    fetchCountries();
  }, [created_by]);

  const onErrorImg = (e) => {
    e.target.src = default_Img;
  };

  return (
    <Container>
      <Item>
        <div className="card-header">
          <img className="profile" src={user?.profile_image} />
          <div className="writer">{user?.nickname}</div>
        </div>
        <div className="card-content">
          <img className="content-img" src={image_url || default_Img} onError={onErrorImg} alt="이미지" />
          <div className="title">{title}</div>
          <div className="content">
            <ReactMarkdown className="markdown-content">{description}</ReactMarkdown>
          </div>
        </div>
      </Item>
    </Container>
  );
};

export default NewsCard;
