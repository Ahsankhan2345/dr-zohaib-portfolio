import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link
          to="/"
          className="text-2xl font-extrabold text-gray-800 tracking-tight hover:text-blue-600 transition duration-300"
        >
          Dr. Zohaib Buzdar
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {[
            { to: "/", label: "Home" },
            { to: "/gallery", label: "Gallery" },
            { to: "/reviews", label: "Reviews" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-gray-800 font-medium transition-all duration-300 hover:text-blue-600
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                         hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 p-4 bg-gradient-to-b from-white via-blue-50 to-white">
          {[
            { to: "/", label: "Home" },
            { to: "/gallery", label: "Gallery" },
            { to: "/reviews", label: "Reviews" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className="text-gray-800 hover:text-blue-600 text-lg transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}