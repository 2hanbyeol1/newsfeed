import MyInfo from "../components/MyInfo";
import MyPost from "../components/MyPost";
import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [profileUrl, setProfileUrl] = useState("");

  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.login);
  if (!isLoggedIn) {
    confirm("로그인이 필요합니다");
    navigate("/login");
  }
  useEffect(() => {
    const fetchData = async () => {
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError) {
        console.error(userError);
        return;
      }

      const { data: loggedUser, error: loggedUserError } = await supabase
        .from("Users")
        .select()
        .eq("id", userData.user.id)
        .single();

      if (loggedUserError) {
        console.error(loggedUserError);
        return;
      }

      setUser(loggedUser);

      const { data: loggedPosts, error: postsError } = await supabase
        .from("posts")
        .select("*")
        .eq("created_by", userData.user.id);

      if (postsError) {
        console.error(postsError);
        return;
      }
      setPosts(loggedPosts);

      const { data } = supabase.storage.from("avatars").getPublicUrl("default-profile.png");
      if (loggedUser.profile_image !== null) {
        setProfileUrl(loggedUser.profile_image);
      } else {
        setProfileUrl(data.publicUrl);
      }
    };

    fetchData();
  }, [isLoggedIn]);

  if (!user) {
    return null;
  }
  return (
    <>
      <MyInfo user={user} profileUrl={profileUrl} setProfileUrl={setProfileUrl} />
      <MyPost posts={posts} />
    </>
  );
};

export default MyPage;
