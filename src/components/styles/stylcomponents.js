import styled, { keyframes, css } from "styled-components";

//Images
import herobg from "../../images/herobg.png";
import summer from "../../images/summer.png";
import summercamp2 from "../../images/summercamp2.png";

// export const Contain = styled.div`
//   background-size: contain;
//   background: url(${herobg});
// `;
export const HeroBg = styled.div`
  background: linear-gradient(
    180deg,
    rgba(110, 125, 181, 0.44) 0%,
    rgba(75, 201, 209, 0.15) 100%
  );
  // background-position: center;
  // background-size: contain;
  // background-repeat: no-repeat;
`;

export const CardOneText = styled.div`
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
`;
export const CardOneBg = styled.div`
  box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.25);
  // border-radius: 10px;
  border: 3px solid #37a7cf;
`;
export const CardTwoBg = styled.div`
  box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.25);
  // border-radius: 10px;
  border: 3px solid #f6f51c;
`;
export const CardThreeBg = styled.div`
  box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.25);
  // border-radius: 10px;
  border: 3px solid #e1116c;
`;
export const SectionTwoCardBg = styled.div`
  background-color: #ddd3e9;
`;
export const Container = styled.div`
  width: 30rem;
`;
export const GamesSectionButton = styled.div`
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
`;
export const SummerCamp = styled.div`
  // background-size: contain;
  background: url(${summercamp2});
  height: 50vh;
`;
export const SummerCampTwo = styled.div`
  // background-size: contain;
  background-color: linear-gradient(
    180deg,
    rgba(110, 125, 181, 0.44) 0%,
    rgba(23, 103, 108, 0.15) 100%
  );
`;
export const StatSection = styled.div`
  background-color: #f1bfe2;
`;
export const TestimonialCont = styled.div`
  box-shadow: 4px 4px 50px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const TestimonialCardOne = styled.div`
  background: rgba(255, 222, 78, 0.45);
`;
export const TestimonialCardTwo = styled.div`
  background: rgba(33, 83, 204, 0.45);
`;
export const BlogCard = styled.div`
  box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const Carouse = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
`;
export const AboutCard = styled.div`
  box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const VisionSection = styled.div`
  background: #e7d6f6;
  // height: 12.5rem;
`;
export const GamesSection2Bg = styled.div`
  // background: #e7d6f6;
`;
export const ContactSection = styled.div`
  box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const BlogSectionStyle = styled.div`
  // background: #e7d6f6;
`;
// export const Buttons = styled.button`
//   background: #e7d6f6;
// `;

export const Buttons = styled.button`
  &:hover {
    background: #724598;
    color: #ffffff;
  }
  .btnHover:active {
    background: #724598;
    color: #ffffff;
  }
  background: #fff;
  color: #724598;
  border: 2px solid #724598;
`;
export const NavLink = styled.link`
  .btnHover:active {
    // background: #724598;
    color: red;
  }
`;
