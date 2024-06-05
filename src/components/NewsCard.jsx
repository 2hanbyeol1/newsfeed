import { useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "../supabase/supabase";

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

const NewsCard = ({ image_url, title, description, created_by }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchCountries = async () => {
      let { data } = await supabase.from("Users").select("*").eq("id", created_by);
      setUser(data[0]);
      console.log(data[0]);
    };
    fetchCountries();
  }, []);
  return (
    <Item>
      <div className="card-header">
        <img className="profile" src={user?.profile_image} />
        <div className="writer">{user?.nickname}</div>
      </div>
      <div className="card-content">
        <img className="content-img" src={image_url} alt="이미지" />
        <div className="title">{title}</div>
        <div className="content">{description}</div>
      </div>
    </Item>
  );
};

export default NewsCard;
