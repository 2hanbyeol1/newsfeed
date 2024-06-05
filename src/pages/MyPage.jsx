import MyInfo from "../components/MyInfo";
import MyPost from "../components/MyPost";
import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";
import { useSelector } from "react-redux";

const MyPage = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const isLoggedIn = useSelector((state) => state.login);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
        error: userError
      } = await supabase.auth.getUser();
      if (userError) {
        console.error(userError);
        return;
      }
      setUsers(user);
      console.log(user);

      const { data: posts, error: postsError } = await supabase.from("posts").select("*");
      if (postsError) {
        console.error(postsError);
        return;
      }
      setPosts(posts);
      console.log(posts);
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
