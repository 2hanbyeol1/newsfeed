import styled from "styled-components";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let { data } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <Wrapper>
      {posts.map((post) => (
        <Link key={post.id} to={`/detail/${post.id}`}>
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
