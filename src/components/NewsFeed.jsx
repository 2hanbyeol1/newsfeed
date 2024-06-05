import styled from "styled-components";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";
import { useNavigate, Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      let { data } = await supabase.from("posts").select("*");
      setPosts(data);
    };
    fetchCountries();
  }, []);

  return (
    <Wrapper>
      {posts.map((post) => (
        <Link style={{ textDecoration: "none", color: "inherit" }} key={post.id} to={`/detail/${post.id}`}>
          <NewsCard
            title={post.title}
            description={post.description}
            image_url={post.image_url}
            created_by={post.created_by}
          />
        </Link>
      ))}
    </Wrapper>
  );
};

export default NewsFeed;
