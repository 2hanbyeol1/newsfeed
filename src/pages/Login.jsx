import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import LoginForm from "../components/LoginForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-width: 300px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 7px 0;
  width: 100%;
  margin-top: 13px;
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
  return (
    <Wrapper>
      <Link to={"/"}>
        <img width="110" src={Logo} />
      </Link>
      <LoginForm />
      <ButtonGroup>
        {/* ! 올바른 주소 연결 필요 */}
        <StyledLink to={"/"}>로그인 정보를 잊으셨나요?</StyledLink>
        <StyledLink to={"/signup"}>회원가입</StyledLink>
      </ButtonGroup>
    </Wrapper>
  );
}

export default Login;
