import styled from "styled-components";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
`;

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      let { data } = await supabase.from("posts").select("*");
      setPosts(data);
      console.log(data);
    };
    fetchCountries();
  }, []);

  return (
    <Wrapper>
      {posts.map((post) => (
        <NewsCard
          key={post.id}
          title={post.title}
          description={post.description}
          image_url={post.image_url}
          created_by={post.created_by}
        />
      ))}
    </Wrapper>
  );
};

export default NewsFeed;
