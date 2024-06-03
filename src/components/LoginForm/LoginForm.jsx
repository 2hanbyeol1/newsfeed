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
  const [{ id, pw }, onChange] = useInputs({ id: "", pw: "" });

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    if (id === "") return alert("id를 입력해주세요");
    if (pw === "") return alert("pw를 입력해주세요");
  };

  return (
    <StyledForm onSubmit={handleLoginFormSubmit}>
      <Input placeholder="id" name="id" value={id} onChange={onChange} />
      <Input type="password" placeholder="pw" name="pw" value={pw} onChange={onChange} />
      <Button>Login</Button>
    </StyledForm>
  );
}

export default LoginForm;
