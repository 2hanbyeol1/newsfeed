import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-width: 300px;
`;

function SignUp() {
  return (
    <Wrapper>
      <Link to={"/"}>
        <img width="110" src={Logo} />
      </Link>
      <SignUpForm />
    </Wrapper>
  );
}

export default SignUp;
