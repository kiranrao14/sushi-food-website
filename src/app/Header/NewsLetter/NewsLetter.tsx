
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Newsletter = () => {
  const [show, setShow] = useState(false);

  // Effect to trigger the fade-in effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200); // Delay before the fade-in starts (200ms)

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <section className="newsletter section">
      <div className="newsletter__container container fade-in" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <div
          className={`newsletter__content rounded-lg shadow-lg p-8 ${show ? 'show' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: '600px',
            backgroundColor: 'hsl(19, 24%, 15%)',
            flexDirection: 'row', // Arrange items in a row
            justifyContent: 'space-between',
          }}
        >
          {/* Text Section */}
          <div className="newsletter__data" style={{ flex: 1, textAlign: 'left' }}>
            <span className="section__subtitle text-orange-900 text-2xl font-bold">NewsLetter</span>
            <h2 className="section__title">
              Subscribe For <br />
              Updates
            </h2>
            <form action="" className="newsletter__form rounded-2xl" style={{ display: 'flex', alignItems: 'center' }}>
              <input
                className="newsletter__input"
                type="email"
                placeholder="Enter email"
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #ccc',
                  marginRight: '1rem',
                }} // Input styling
              />
              <button className="button newsletter__button bg-orange-700 text-white p-2 rounded-2xl font-semibold hover:bg-neutral-950">
                Subscribe
              </button>
            </form>
          </div>

          {/* Image Section */}
          <Image
          height={140}
          width={140}
            className="newsletter__img"
            src="/images/newsletter-sushi.png"
            alt="Newsletter Sushi"
            style={{ maxWidth: '150px', marginLeft: '20px', display: 'block' }} // Adjust the size of the image as needed
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
