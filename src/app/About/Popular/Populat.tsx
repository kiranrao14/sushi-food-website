import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@/app/Header/Context/Themecontext";

const Popular = () => {
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in effect when the component mounts or when the theme changes
    const timer = setTimeout(() => {
      setIsVisible(false); // Reset to allow re-triggering
      setTimeout(() => {
        setIsVisible(true); // Set to true to trigger fade-in
      }, 30); // Small delay to ensure the class change is registered
    }, 100); // Delay to allow for CSS transitions (optional)

    return () => clearTimeout(timer); // Clean up the timer
  }, [theme]); // Run this effect when the theme changes

  return (
    <section
      id="popular"
      className="popular section text-2xl text-center font-semibold"
    >
      <span className="section__subtitle">The Best Food</span>
      <h2
        className="section__title"
        style={{ color: theme === "dark" ? "white" : "brown" }}
      >
        Popular Dishes
      </h2>
      <div className="popular__container container  pt-16 flex justify-center flex-wrap gap-10">
       
        {[
          {
            img: "/images/popular-onigiri.png",
            name: "Onigiri",
            price: "$10.99",
          },
          {
            img: "/images/popular-spring-rols.png",
            name: "Spring Rolls",
            price: "$19.99",
          },
          {
            img: "/images/popular-sushi-rolls.png",
            name: "Sushi Rolls",
            price: "$20.99",
          },
        ].map((item, index) => (
          <article
            key={index}
            className={`popular__card fade-in ${isVisible ? "show" : ""}`}
            style={{
              backgroundColor: theme === "dark" ? "#333" : "#f0e6d2",
              color: theme === "dark" ? "white" : "black",
              borderRadius: "1rem",
              padding: "1rem",
              width: "250px",
              textAlign: "center",
            }}
          >
             <Image className="popular__img" 
             height={250}
             width={250}
             src={item.img} alt={item.name} />
            <h3
              className="popular__name"
              style={{
                color: theme === "dark" ? "white" : "black",
                fontSize: "var(--smaller-font-size)",
              }}
            > 
               {item.name} 
            </h3>
            <span className="popular__description text-sm mb-2 block">
              Japanese Dish
            </span>
            <span className="popular__price text-xl font-medium text-red-500">
              {item.price}
            </span>
            <button className="popular__button mt-4 bg-brown-500 text-white rounded-full p-2">
              <i className="ri-shopping-bag-line"></i>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Popular;
