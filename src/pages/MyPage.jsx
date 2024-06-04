import styled from "styled-components";
import Header from "../components/Header";
import MyInfo from "../components/MyInfo";
import MyPost from "../components/MyPost";

import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";

const MyPage = () => {
  const [users, setUsers] = useState([]);
  const userUuid = "d2ae74c5-3d4c-4df3-befa-334170bc9394";

  useEffect(() => {
    const fetchData = async () => {
      const { data: usersData, error } = await supabase
        .from("Users")
        .select(
          `
      id,
      nickname,
      profile_image,
      posts (
        id,
        title,
        description,
        created_at,
        created_by,
        image_url
      )
`
        )
        .eq("id", userUuid);

      if (error) {
        console.log("error => ", error);
      } else {
        console.log("Users => ", usersData);
        setUsers(usersData);
      }
    };
    fetchData();
  }, []);

  return (
    <StContainer>
      <Header />
      <main>
        <MyInfo users={users} />
        <MyPost users={users} />
      </main>
    </StContainer>
  );
};

export default MyPage;

const StContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 150px;
  text-align: center;
`;
