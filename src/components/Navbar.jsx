import { useState } from "react";
import { Menu, X, Fish, Phone } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Fish className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">
              El Kala Seafood
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 hover:text-blue-600 cursor-pointer relative"
              activeClass="text-blue-600 font-semibold"
              spy={true}
              activeStyle={{
                color: "#2563EB",
              }}
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-full border-b-4 border-blue-500 opacity-0 group-active:opacity-100 transition-opacity duration-300"></span>
            </ScrollLink>
            <ScrollLink
              to="menu"
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 hover:text-blue-600 cursor-pointer relative"
              activeClass="text-blue-600 font-semibold"
              spy={true}
              activeStyle={{
                color: "#2563EB",
              }}
            >
              Menu
              <span className="absolute bottom-0 left-0 w-full border-b-4 border-blue-500 opacity-0 group-active:opacity-100 transition-opacity duration-300"></span>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 hover:text-blue-600 cursor-pointer relative"
              activeClass="text-blue-600 font-semibold"
              spy={true}
              activeStyle={{
                color: "#2563EB",
              }}
            >
              À Propos
              <span className="absolute bottom-0 left-0 w-full border-b-4 border-blue-500 opacity-0 group-active:opacity-100 transition-opacity duration-300"></span>
            </ScrollLink>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Réserver
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <ScrollLink
              to="menu"
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
              activeClass="text-blue-600 font-semibold"
              spy={true}
            >
              Accueil
            </ScrollLink>
            <ScrollLink
              to="menu"
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
              activeClass="text-blue-600 font-semibold"
              spy={true}
            >
              Menu
            </ScrollLink>
            <ScrollLink
              to="reservation"
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
              activeClass="text-blue-600 font-semibold"
              spy={true}
            >
              Réservation
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
              activeClass="text-blue-600 font-semibold"
              spy={true}
            >
              À Propos
            </ScrollLink>

            <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center">
              <Phone className="h-4 w-4 mr-2" />
              Réserver
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
