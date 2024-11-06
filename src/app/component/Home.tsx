
    
import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeContext } from '../Header/Context/Themecontext';

const Home = () => { 
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger fade-in effect when the theme changes
    return () => setIsVisible(false); // Reset on unmount
  }, [theme]); // Run this effect when the theme changes

  return (
    <section className={`home section ${isVisible ? 'fade-in' : ''}`}>
      <div className="home__container pt-12 flex flex-col lg:flex-row-reverse items-center lg:items-start gap-x-12">
        <Image
          width={384} 
          height={256}
          className='home__img w-72 lg:w-96 mb-8 lg:mb-0 right-16 lg:mr-36'
          src="/images/home-sushi-rolls.png" 
          alt="Sushi Rolls"
        />
        
        <div className='home__data text-center lg:text-left lg:ml-16'>
          <h1 
            style={{
              fontSize: "var(--biggest-font-size)",
              fontFamily: 'var(--title-font)'
            }}
            className="mb-4"
          >
            Enjoy Delicious
            <div 
              className='flex items-center justify-center lg:justify-start'
              style={{ color: theme === 'dark' ? 'white' : 'brown' }}
            >
              <Image
                height={30}
                width={40}
                className="w-24" 
                src="/images/home-sushi-title.png" 
                alt="Sushi Title" 
              />
              Sushi Food
            </div>
          </h1>
          <p className='pt-4 mb-8 font-bold text-lg lg:text-2xl'>
            Enjoy a good dinner with the best dishes in the restaurant and improve your days.
          </p>
          <Link 
            className='inline-flex items-center bg-orange-600 p-3 rounded-lg hover:bg-orange-900 text-white' 
            href='#'
          >
            Order Now <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </div>

      {/* Decorative Leaf Images */}
      <Image
        height={70}
        width={80}
        className='absolute opacity-25 w-80 top-1/4 -left-16' 
        src="/images/leaf-branch-2.png" 
        alt='Decorative Leaf'
      />
      <Image
        width={96}  
        height={50}
        className="absolute opacity-25 w-96 -right-36 top-16" 
        src="/images/leaf-branch-4.png" 
        alt="Decorative Leaf"
      />
    </section>
  );
}

export default Home;



      


     
    
    
    