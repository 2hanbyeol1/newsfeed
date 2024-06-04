import styled from "styled-components";
import logo from "../assets/logo.png";

import { useNavigate, Link } from "react-router-dom";


const StHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  background: white;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px;

  @media only screen and (max-width: 734px) {
    height: 60px;
  }
`;

const StContent = styled.div`
  display: flex;
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1068px) {
    width: 710px;
  }

  @media only screen and (max-width: 734px) {
    width: 300px;
    font-size: 14px;
  }
`;

const StLogo = styled.img`
  width: 82px;
  cursor: pointer;

  @media only screen and (max-width: 734px) {
    width: 72px;
  }
`;

const StNav = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li + li {
      margin-left: 30px;
    }
    a {
      text-decoration: none;
      color: #000000;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <StHeader>
      <StContent>
        <StLogo src={logo} alt="Logo" onClick={() => navigate("/")} />

        <StNav>
          <ul>
            <li>
              <Link to="/write">글쓰기</Link>
            </li>
            <li>로그아웃</li>
          </ul>
        </StNav>
      </StContent>
    </StHeader>
  );
};

export default Header;
