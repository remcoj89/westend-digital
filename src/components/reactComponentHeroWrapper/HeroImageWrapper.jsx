// src/components/HeroImageWrapper.jsx
import React from "react";

import Styles from "./HeroImageWrapper.module.css"; // Voor module CSS

const HeroImageWrapper = ({ heroImage, backgroundImage }) => {


  return (


    <div className={Styles.heroImageWrapper}>
      <a href="/werk" className={`${Styles.heroImageButton} btn btn-white`}>
        Bekijk mijn laatste werk
      </a>

    
      <img
        alt={heroImage.imgAlt}
        className={Styles.image}
        height="500"
        loading="eager"
        src={heroImage.imgUrl}
        width="500"
      />

      {/* Background image */}
      <img
        alt={backgroundImage.imgAlt}
        className={Styles.backgroundImage}
        height="1000"
        loading="eager"
        src={backgroundImage.imgUrl}
        width="1000"
      />
    </div>
  );
};

// Exporteer het component zodat je het in andere bestanden kunt importeren
export default HeroImageWrapper;
