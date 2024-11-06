import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Link component from next/link

const Footer = () => {
  return (
    <footer className="footer relative overflow-hidden text-center md:text-left p-8 md:p-12 bg-opacity-20 text-white">
      <div className="footer__container gap-8 md:gap-x-12 max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="mb-8 md:mb-0">
          <Link href="/" className="footer__logo flex items-center gap-4 transition duration-300 font-bold text-orange-500">
            <Image src="/images/logo.png" alt="Logo" width={160} height={40} />
            Sushi
          </Link>
          <p className="footer__tagline mt-4 text-2xl text-orange-400">
            Food for the body is not <br /> enough. There must be food <br /> for the soul.
          </p>
        </div>

        <div className="footer__links-container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="footer__title text-lg font-semibold mb-4">Main Menu</h3>
            <ul className="footer__links space-y-2">
              <li>
                <Link href="/about" className="transition duration-300 hover:text-orange-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/menu" className="transition duration-300 hover:text-orange-500">
                  Menus
                </Link>
              </li>
              <li>
                <Link href="/offer" className="transition duration-300 hover:text-orange-500">
                  Offer
                </Link>
              </li>
              <li>
                <Link href="/events" className="transition duration-300 hover:text-orange-500">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title text-lg font-semibold mb-4">Information</h3>
            <ul className="footer__links space-y-2">
              <li>
                <Link href="/contact" className="transition duration-300 hover:text-orange-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/returns" className="transition duration-300 hover:text-orange-500">
                  Order & Returns
                </Link>
              </li>
              <li>
                <Link href="/videos" className="transition duration-300 hover:text-orange-500">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="transition duration-300 hover:text-orange-500">
                  Reservation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title text-lg font-semibold mb-4">Address</h3>
            <address className="footer__address not-italic">
              Av. Hacienda 1234<br />
              Lima 4321, Peru<br />
              9AM - 11PM
            </address>
          </div>
        </div>

        <div>
          <h3 className="footer__title text-lg font-semibold mb-4">Social Media</h3>
          <ul className="footer__social flex gap-4 justify-center md:justify-start">
            <Link
              href="https://www.facebook.com/"
              className="transition duration-300 hover:text-orange-500"
            >
              <i className="ri-facebook-circle-fill"></i>
            </Link>
            <Link
              href="https://www.instagram.com/"
              className="transition duration-300 hover:text-orange-500"
            >
              <i className="ri-instagram-fill"></i>
            </Link>
            <Link
              href="https://www.twitter.com/"
              className="transition duration-300 hover:text-orange-500"
            >
              <i className="ri-twitter-fill"></i>
            </Link>
          </ul>
        </div>
      </div>

      <div className="footer__images mt-8 flex flex-col items-center md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4">
        <Image
          src="/images/footer-card-2.png"
          alt="Payment method"
          width={64}
          height={32}
          className="transition duration-300 transform hover:scale-110"
        />
        <Image
          src="/images/footer-card-3.png"
          alt="Payment method"
          width={64}
          height={32}
          className="transition duration-300 transform hover:scale-110"
        />
        <Image
          src="/images/footer-card-4.png"
          alt="Payment method"
          width={64}
          height={32}
          className="transition duration-300 transform hover:scale-110"
        />
      </div>

      <div className="footer__copyright mt-8 text-sm text-gray-500">
        &#169; Copyright. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
