import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../../components/Input";
import useInputs from "../../hooks/useInputs";
import supabase from "../../supabase/supabase";
import Button from "../Button";

function SignUpForm() {
  const navigate = useNavigate();
  const [{ nickname, email, pw, confirm }, onChange] = useInputs({ nickname: "", email: "", pw: "", confirm: "" });

  const onSubmitHander = async (e) => {
    e.preventDefault();

    if (pw !== confirm) return alert("비밀번호가 일치하지 않습니다.");

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: pw
    });

    if (error && error.message === "User already registered") return alert("중복된 이메일입니다.");
    if (error && error.message === "Password should be at least 6 characters.")
      return alert("비밀번호 최소 길이가 6자리 이상입니다.");
    if (error) return alert(error.message);

    await supabase.from("Users").insert({
      id: data.user.id,
      nickname: nickname
    });

    navigate("/login");
  };

  return (
    <StyledForm onSubmit={onSubmitHander}>
      <Input placeholder="nickname" name="nickname" value={nickname} onChange={onChange} />
      <Input placeholder="email" name="email" value={email} onChange={onChange} />
      <Input type="password" placeholder="pw" name="pw" value={pw} onChange={onChange} />
      <Input type="password" placeholder="confirm" name="confirm" value={confirm} onChange={onChange} />
      <Button>Get Started</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px 0;
  width: 100%;
`;

export default SignUpForm;
