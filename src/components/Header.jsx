import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <StHeader>
      <StContent>
        <StLogo src={logo} alt="Logo" onClick={() => navigate("/")} />
        <StNav>
          <ul>
            <li>글쓰기</li>
            <li>로그아웃</li>
          </ul>
        </StNav>
      </StContent>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  border-bottom: 3px solid #e1e1e1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background: white;
  z-index: 1000;
`;

const StContent = styled.div`
  display: flex;
  width: 96%;
  max-width: 1350px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const StLogo = styled.img`
  width: 110px;
  cursor: pointer;
`;

const StNav = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li + li {
      margin-left: 30px;
    }
  }
`;
