import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useInputs from "../../hooks/useInputs";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px 0;
  width: 100%;
`;

function LoginForm() {
  const [{ email, pw }, onChange] = useInputs({ email: "", pw: "" });

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    if (email === "") return alert("email을 입력해주세요");
    if (pw === "") return alert("pw를 입력해주세요");
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
