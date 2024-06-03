import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../Button";
import useInputs from "../../hooks/useInputs";
function SignUpForm() {
  const [{ nickname, id, pw, confirm }, onChange] = useInputs({ nickname: "", id: "", pw: "", confirm: "" });

  return (
    <StyledForm>
      <Input placeholder="nickname" name="nickname" value={nickname} onChange={onChange} />
      <Input placeholder="id" name="id" value={id} onChange={onChange} />
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
