
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Recent = () => {
  return (
    <section id="Recent" className="recently mt-12">
      <div
        className="recently__container fade-in"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'left' }}
      >
        {/* Text Section */}
        <div style={{ flex: "1", marginRight: "3rem", textAlign: "center" }}>
          <span className="section__subtitle font-bold text-2xl">Recently Added</span>
          <h2 className="section__title text-orange-700 text-2xl">
            Sushi Samuri <br />
            Salmon Cheese
          </h2>
          <p className="recently__description text-2xl" style={{ marginBottom: "2rem" }}>
            Take a look at what&apos;s new. And do not deprive yourself of a good meal, enjoy and be happy.
          </p>
          <Link className="bg-orange-700 text-white p-3 rounded-md mb-24" href="#">
            Order Now
          </Link>
        </div>
        {/* Image Section */}
        <div style={{ flex: "1", display: 'flex', justifyContent: 'center' }}>
          <Image
            className="recently__img mt-10"
            height={300}
            width={300}
          
            src="/images/recently-salmon-sushi.png"
            alt="Salmon Sushi"
          />
        </div>
      </div>
    </section>
  );
};

export default Recent;



