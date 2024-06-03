import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
const CenteredView = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-width: 300px;
`;

function SignUp() {
  return (
    <CenteredView>
      <Wrapper>
        <Link to={"/"}>
          <img width="110" src={Logo} />
        </Link>
        <SignUpForm />
      </Wrapper>
    </CenteredView>
  );
}

export default SignUp;
