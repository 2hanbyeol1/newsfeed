import { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};

  &:hover {
    background-color: #0056b3;
  }
`;

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibillity = () => {
    if (window.scrollY > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibillity);
    return () => {
      window.removeEventListener("scroll", toggleVisibillity);
    };
  }, []);

  return (
    <>
      <ScrollButton onClick={scrollToTop} isVisible={isVisible}>
        ⬆️ 위로
      </ScrollButton>
    </>
  );
};

export default UpButton;
