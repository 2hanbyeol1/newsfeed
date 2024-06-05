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
      console.log("user => ", userData);

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
        console.log(loggedUserError);
        return;
      }
      console.log("loggedUser => ", loggedUser);
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
      console.log("post =>", loggedPosts);

      const { data } = supabase.storage.from("avatars").getPublicUrl("default-profile.png");
      if (loggedUser.profile_image !== null) {
        setProfileUrl(loggedUser.profile_image);
      } else {
        setProfileUrl(data.publicUrl);
      }
      console.log("loggedUser.introduce => ", loggedUser.introduce);
    };

    fetchData();
  }, [isLoggedIn]);

  if (!user) {
    return null;
  }
  return (
    <>
      <MyInfo user={user} profileUrl={profileUrl} setProfileUrl={setProfileUrl} />
      <MyPost user={user} posts={posts} />
    </>
  );
};

export default MyPage;
