import MyInfo from "../components/MyInfo";
import MyPost from "../components/MyPost";
import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.login);

  if (!isLoggedIn) {
    confirm("로그인이 필요합니다");
    navigate("/login");
  }

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
        error: userError
      } = await supabase.auth.getUser();
      console.log("user => ", user);

      if (userError) {
        console.error(userError);
        return;
      }

      const { data: loggedUser, error: error } = await supabase.from("Users").select().eq("id", user.id);
      if (error) {
        console.log(error);
        return;
      }
      setUsers(loggedUser);

      const { data: loggedPosts, error: postsError } = await supabase
        .from("posts")
        .select("*")
        .eq("created_by", user.id);
      if (postsError) {
        console.error(postsError);
        return;
      }
      setPosts(loggedPosts);
      console.log("post =>", loggedPosts);
    };

    fetchData();
  }, [isLoggedIn]);

  return (
    <>
      <MyInfo users={users} />
      <MyPost users={users} posts={posts} />
    </>
  );
};

export default MyPage;
