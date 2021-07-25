import React from "react";
import ImageHero from "./imageHero";

const TextHero = () => {
  return (
    <div className="text-hero-container">
      <div className="paragraph-container">
        <h1 className="para-text">GLOBAL EMPLOYMENT SOLUTIONS & PEO</h1>
        <h2>Explore the world with OmniAtlas</h2>
        <p>
          Partner with us to employ talent in 150 countries around the world. We
          can help you employ global talent in any of the countries listed in
          our OmniAtlas. Contact us as a starting point for your global
          expansion plans.
        </p>
      </div>
      <ImageHero />
    </div>
  );
};

export default TextHero;
