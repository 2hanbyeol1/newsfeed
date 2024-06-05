import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { logout } from "../redux/slices/login.slice";
import supabase from "../supabase/supabase";

const StHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  background: white;
  z-index: 100;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px;

  @media only screen and (max-width: 734px) {
    height: 60px;
  }
`;

const StContent = styled.div`
  display: flex;
  width: 1080px;
  height: 100%;
  margin-left: 32px;
  margin-right: 32px;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1068px) {
    width: 710px;
  }

  @media only screen and (max-width: 734px) {
    width: 310px;
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

    li + li {
      margin-left: 30px;
      @media only screen and (max-width: 734px) {
        margin-left: 20px;
      }
    }
    a {
      text-decoration: none;
      color: #000000;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login);

  const handleLogoutClick = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) alert(error.message);
    dispatch(logout());
    alert("로그아웃 되었습니다.");
  };

  return (
    <StHeader>
      <StContent>
        <StLogo src={logo} alt="Logo" onClick={() => navigate("/")} />
        <StNav>
          <ul>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/mypage">마이페이지</Link>
                </li>
                <li>
                  <Link to="/write">글쓰기</Link>
                </li>
                <li onClick={handleLogoutClick}>
                  <Link>로그아웃</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">로그인</Link>
                </li>
                <li>
                  <Link to="/signup">회원가입</Link>
                </li>
              </>
            )}
          </ul>
        </StNav>
      </StContent>
    </StHeader>
  );
};

export default Header;
