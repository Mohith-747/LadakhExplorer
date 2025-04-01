import { useState, useEffect } from "react";
import { Link } from "wouter";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center cursor-pointer">
            <span className="text-white text-shadow text-2xl font-heading font-bold">
              Discover<span className="text-accent">Ladakh</span>
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-white hover:text-accent font-semibold transition duration-300"
          >
            Home
          </a>
          <a
            href="#places"
            className="text-white hover:text-accent font-semibold transition duration-300"
          >
            Places to Visit
          </a>
          <a
            href="#cuisine"
            className="text-white hover:text-accent font-semibold transition duration-300"
          >
            Cuisine
          </a>
          <a
            href="#stay"
            className="text-white hover:text-accent font-semibold transition duration-300"
          >
            Where to Stay
          </a>
          <a
            href="#activities"
            className="text-white hover:text-accent font-semibold transition duration-300"
          >
            Activities
          </a>
          <a
            href="#gallery"
            className="text-white hover:text-accent font-semibold transition duration-300"
          >
            Gallery
          </a>
          <a
            href="#tips"
            className="text-white hover:text-accent font-semibold transition duration-300"
          >
            Travel Tips
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-primary-dark w-full`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a
            href="#home"
            className="text-white hover:text-accent py-2 font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#places"
            className="text-white hover:text-accent py-2 font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Places to Visit
          </a>
          <a
            href="#cuisine"
            className="text-white hover:text-accent py-2 font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cuisine
          </a>
          <a
            href="#stay"
            className="text-white hover:text-accent py-2 font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Where to Stay
          </a>
          <a
            href="#activities"
            className="text-white hover:text-accent py-2 font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Activities
          </a>
          <a
            href="#gallery"
            className="text-white hover:text-accent py-2 font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#tips"
            className="text-white hover:text-accent py-2 font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Travel Tips
          </a>
        </div>
      </div>
    </nav>
  );
};
