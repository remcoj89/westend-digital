import React, {useEffect, useState, useRef} from "react";
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
        direction.current =
          currentScrollY > lastScrollY.current ? "down" : "up";
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

return (
  <>
    {visible && (
      <div className={`${Style.bannerCta} wrapper`} >
        <h1>Welcome to Our Website</h1>
        <p>Your journey to excellence starts here.</p>
        <button>Get Started</button>
      </div>
    )}
  </>
);
};

export default BannerCta;
