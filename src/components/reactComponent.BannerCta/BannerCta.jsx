import React, { useEffect, useState, useRef } from "react";
import Style from "./BannerCta.module.css";

const BannerCta = () => {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const direction = useRef("down");

  useEffect(() => {
    const target = document.querySelector("#about-us-section");

    if (!target) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      direction.current = currentScrollY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && direction.current === "down") {
          setVisible(true);
        } else if (!entry.isIntersecting && direction.current === "up") {
          setVisible(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle button click
  const handleClick = () => {
    const section = document.querySelector("#download-section");

    if(section) {
      section.scrollIntoView({ behavior: "smooth" });
      setVisible(false);
    } else {
      console.warn("Contact section not found, redirecting to homepage.");
      window.location.href = "/brochure";
    }
  }

  return (
    <>
      {visible && (
        <div className={`${Style.bannerCta} wrapper`}>
          <div className="flex">
            <div className={Style.bannerTitle}>
              <h2>Ben jij klaar een professionele website?</h2>
              <p>
                Een website die vertrouwen uitstraalt, meer klanten oplevert en
                jouw groei versnelt?
              </p>
            </div>
            <div className={Style.bannerButtonWrapper}>
              <p>Download dan nu de gratis brochure</p>
              <button className="btn btn-primary" onClick={handleClick}>
                Kom maar door met die brochure
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerCta;
