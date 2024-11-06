
import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../Header/Context/Themecontext";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger fade-in effect when component mounts
    const timer = setTimeout(() => {
      setShow(true);
    }, 100); // Adjust delay as needed

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  return (
    <section id="about" className="about section py-12">
      <div className={`about__container flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 ${show ? 'fade-in' : ''}`}>
        
        {/* Image (Left on Larger Screens) */}
        <Image
          className={`about__img w-72 lg:w-96 lg:mr-8 ${show ? 'fade-in' : ''}`}
          src="/images/about-sushi.png" 
          height={300}
          width={300}
          alt="About Sushi"
        />
        
        {/* Text Content (Right on Larger Screens) */}
        <div className={`about__data text-center lg:text-left lg:w-1/2 px-4 lg:px-8 ${show ? 'fade-in' : ''}`}>
          <span className="section__subtitle text-xl font-semibold text-orange-500 mb-2">About Us</span>
          <h2 className="section__title about__title text-4xl font-bold mb-4">
            <div className="flex items-center justify-center lg:justify-start" style={{ color: theme === 'dark' ? 'white' : 'brown' }}>
              We Provide
              <Image
              height={25}
              width={25}
              className="w-16 mx-2" src="/images/about-sushi-title.png" alt="Sushi" />
              Healthy Food
            </div>
          </h2>
          <p className="about__description text-lg font-medium leading-relaxed">
            Food comes to us from our relatives, whether they have wings or roots.
            This is how we consider food; it also has a culture and history that 
            passes from generation to generation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;







