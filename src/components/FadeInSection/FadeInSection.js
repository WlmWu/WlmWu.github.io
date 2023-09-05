import { useState, useEffect, useRef } from "react";
import "./FadeInSection.css"
// import styled from "styled-components";

// const FadedInStyled = styled.div`
//   &.fade-in-section {
//     opacity: 1;
//     transform: translateY(20vh);
//     visibility: hidden;
//     transition: opacity 1200ms ease-out, transform 600ms ease-out,
//       visibility 1200ms ease-out;
//     will-change: opacity, transform, visibility;
//   }
//   &.fade-in-section.is-visible {
//     opacity: 1;
//     transform: none;
//     visibility: visible;
//   }
// `;

const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.boundingClientRect.top > 0) {
          // element is below the screen
          setVisible(entry.isIntersecting);
        }
      });
    }, {
      // rootMargin: "500px 0px 0px 0px",
    });
    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);
  return (
    // <FadedInStyled>
      <div>
        <div
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
          ref={domRef}
        >
          {props.children}
        </div>
      </div>
    // </FadedInStyled>
  );
};

export default FadeInSection;
