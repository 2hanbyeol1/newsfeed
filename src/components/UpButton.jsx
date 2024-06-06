import { useEffect, useState } from "react";
import styled from "styled-components";
import scrollTopImage from "../assets/upbutton.png";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: none;
  cursor: pointer;
  border: none;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  transition:
    opacity 0.5s,
    visibility 0.5s;
`;

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
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
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <ScrollButton onClick={scrollToTop} $isVisible={isVisible}>
        <img className="button-img" src={scrollTopImage} alt="Scroll to top"></img>
      </ScrollButton>
    </>
  );
};

export default UpButton;
