import styled, { keyframes, css } from "styled-components";

//Images
import herobg from "../../images/herobg.png";
import summer from "../../images/summer.png";
import summercamp2 from "../../images/summercamp2.png";
import abouthero from "../../images/abouthero.png";
import gallerybg from "../../images/gallerybg.png";

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
export const AboutHeroBg = styled.div`
  background: linear-gradient(
    180deg,
    rgba(116, 181, 110, 0.1296) 0%,
    rgba(116, 181, 110, 0) 100%
  );
  // background: url(${abouthero});
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
  background: rgba(185, 164, 213, 0.4);
`;
export const Container = styled.div`
  width: 30rem;
  box-shadow: 4px 4px 15px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const GamesSectionButton = styled.div`
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
`;
// export const SummerCamp = styled.div`
//   // background-size: contain;
//   background: url(${summercamp2});
//   height: 50vh;
// `;
export const SummerCamp = styled.div`
  background: linear-gradient(
    180deg,
    rgba(160, 181, 110, 0.2) 0%,
    rgba(23, 103, 108, 0.22) 53.85%
  );
  // background: FFF6F6;
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
  background-color: #fafafa;
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
export const LatestEventsCard = styled.div`
  box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const GamesCard = styled.div`
  border: 3px solid #000000;
  border-radius: 8px;
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
  background: linear-gradient(
    180deg,
    rgba(110, 125, 181, 0.3087) 0%,
    rgba(110, 125, 181, 0) 100%
  );
  // height: 12.5rem;
`;
export const TeamSection = styled.div`
  background: linear-gradient(
    180deg,
    rgba(110, 125, 181, 0.1) 0%,
    rgba(75, 201, 209, 0.15) 100%
  );
  // height: 12.5rem;
`;
export const GamesSection2Bg = styled.div`
  // background: #e7d6f6;
`;
export const ContactSection = styled.div`
  box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const BlogBg = styled.div`
  background: linear-gradient(
    180deg,
    rgba(110, 125, 181, 0.1) 0%,
    rgba(75, 201, 209, 0.15) 100%
  );
`;
export const BlogHeroBg = styled.div`
  background-color: #ffffff;
`;
// export const Buttons = styled.button`
//   background: #e7d6f6;
// `;

export const Buttons = styled.button`
  &:hover {
    background: #724598;
    color: #ffffff;
  }
  // .btnHover:active {
  //   background: #724598;
  //   color: #ffffff;
  // }
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
export const GalleryHeroBg = styled.div`
  background: url(${gallerybg});
  background-repeat: no-repeat;
`;
export const GalleryHeroCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  height: 10rem;
`;
// export const GalleryButtonBg = styled.div`
//   background-color: #ddd3e9;
// `;
