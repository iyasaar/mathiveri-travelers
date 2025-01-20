import { Cedarville_Cursive } from "next/font/google";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const cedar = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  return (
    <footer className="text-gray-800 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          {/* <img
            src="/logo.png"
            alt="Logo"
            className="w-48 md:w-56 h-auto mb-4"
          /> */}
          <span className={`${cedar.className} text-2xl md:text-3xl`}>
            Mathiveri Maldives
          </span>
          <p className="text-center md:max-w-[60%] md:text-left text-sm md:text-base text-gray-600">
            Mathiveri Island - Discover the beauty and serenity of a tropical
            paradise.
          </p>
        </div>

        {/* Links Section */}
        {/* <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            Services
          </a>
          <a
            href="#activities"
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            Activities
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            Contact Us
          </a>
        </div> */}

        {/* Social Media Section */}
        <div className="flex justify-center md:justify-start gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-xl"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Mathiveri Maldives. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
