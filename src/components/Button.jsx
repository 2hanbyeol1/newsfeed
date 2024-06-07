import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 8px 0;
  border: 0;
  border-radius: 3px;
  background-color: #a5d8ff;
  color: #ffffff;
  font-weight: 500;
  outline: none;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #88cbff;
  }
`;

export default Button;
