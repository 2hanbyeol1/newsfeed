import { useId } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  padding: 0 3px;
  position: absolute;
  top: 9.5px;
  left: 10px;
  font-size: 13px;
  color: #7d7d7d;
  background-color: #ffffff;
  transition: 0.3s;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #d0d0d0;
  border-radius: 3px;
  outline: none;
  box-sizing: border-box;
  border-color: ${({ value }) => value && "#2ba3ff"};

  &:focus-visible {
    border-color: #2ba3ff;
  }
  &:focus-visible + label {
    top: -7px;
    color: #2ba3ff;
  }
  & + label {
    top: ${({ value }) => value && "-7px"};
    color: ${({ value }) => value && "#2ba3ff"};
  }
`;

function Input({ value, placeholder, ...props }) {
  const id = useId();

  return (
    <Wrapper>
      <StyledInput id={id} value={value} {...props} />
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
    </Wrapper>
  );
}

export default Input;
