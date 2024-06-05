import { Link } from "react-router-dom";
import styled from "styled-components";
import Github from "../../assets/github.svg";
import Logo from "../../assets/logo.png";
import LoginForm from "../../components/LoginForm";
import supabase from "../../supabase/supabase";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-width: 300px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px 0;
  width: 100%;
  margin-top: 13px;
`;

const SocialLoginGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 7px 20px;
  width: 100%;
  margin-top: 20px;
`;

const SocialLoginButton = styled.button`
  width: 100%;
  height: 35px;
  background-color: ${({ $color }) => ($color ? $color : "transparent")};
  border: 1px solid #999999;
  outline: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & > img {
    border-radius: 50%;
  }
`;

const StyledLink = styled(Link)`
  color: #7d7d7d;
  text-decoration: none;
  font-size: 13px;
  transition: 0.5s;

  &:hover {
    font-weight: 600;
  }
`;

function Login() {
  async function loginWithOAuth(provider) {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider
    });
    if (error) alert(error);
  }
  return (
    <Wrapper>
      <Link to={"/"}>
        <img width="110" src={Logo} />
      </Link>
      <LoginForm />
      <ButtonGroup>
        <StyledLink to={"/signup"}>회원가입</StyledLink>
      </ButtonGroup>
      <SocialLoginGroup>
        <SocialLoginButton onClick={() => loginWithOAuth("github")}>
          <span>Continue with GitHub</span>
          <img width="20" src={Github} />
        </SocialLoginButton>
      </SocialLoginGroup>
    </Wrapper>
  );
}

export default Login;
