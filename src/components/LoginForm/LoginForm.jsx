import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useInputs from "../../hooks/useInputs";
import { login } from "../../redux/slices/login.slice";
import supabase from "../../supabase/supabase";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px 0;
  width: 100%;
`;

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [{ email, pw }, onChange] = useInputs({ email: "", pw: "" });

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    if (email === "") return alert("id를 입력해주세요");
    if (pw === "") return alert("pw를 입력해주세요");

    const {
      data: { user }
      // , error
    } = await supabase.auth.signInWithPassword({
      email: email,
      password: pw
    });
    if (user) {
      dispatch(login(true));
      navigate("/");
    } else {
      alert("로그인 오류!");
    }
  };

  return (
    <StyledForm onSubmit={handleLoginFormSubmit}>
      <Input placeholder="email" name="email" value={email} onChange={onChange} />
      <Input type="password" placeholder="pw" name="pw" value={pw} onChange={onChange} />
      <Button>Login</Button>
    </StyledForm>
  );
}

export default LoginForm;
