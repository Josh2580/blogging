import React from "react";
// import HeroImg from "../img/hero.jpeg";
import {
  HeroStyle,
  HeroImgStyle,
  HeroResponsiveStyle,
} from "../styles/HeroSectionStyle";

const HeroImage = "hero.jpeg";
const HeroPath = `static/img/${HeroImage}`;

const HeroSection = () => {
  return (
    <HeroStyle>
      <HeroResponsiveStyle>
        <div>
          <h1>Welcome!!</h1>
          <br />
          {/* <p>
            Pls enjoy reading and comment on the comment section. Dont forget to
            like and share on social platforms
          </p> */}
        </div>
        <HeroImgStyle src={HeroPath} alt="Welcome" />
      </HeroResponsiveStyle>
    </HeroStyle>
  );
};

export default HeroSection;
