"use client";

import { Link as ScrollLink } from "react-scroll";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Layout({ children }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  // Fonction pour gérer le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Si on descend, cacher la navbar
        setIsVisible(false);
      } else {
        // Si on remonte, afficher la navbar
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="fr">
      <head>
        <title>S-Info | Services Informatiques</title>
        <meta name="description" content="S-Info - Réparation et assistance informatique." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-gray-900 text-white">
        {/* Barre de navigation */}
        <header
          className={`fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50 transition-all duration-500 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center h-16 gap-x-8">
            {/* Logo */}
            <Link href="/">
              <img src="/logo.png" alt="Logo S-Info" className="h-10 w-auto" /> {/* Remplace S-Info par une image */}
            </Link>

            {/* Menu hamburger pour mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Menu principal */}
            <ul className={`${isMenuOpen ? "block" : "hidden"} md:flex md:space-x-6 absolute md:static top-16 left-0 right-0 bg-gray-800 md:bg-transparent p-4 md:p-0 md:items-center`}>
              <li>
                {pathname === "/" ? (
                  <ScrollLink to="accueil" smooth={true} duration={800} className="cursor-pointer hover:text-blue-400 transition block py-2 md:py-0">
                    Accueil
                  </ScrollLink>
                ) : (
                  <Link href="/" className="hover:text-blue-400 transition block py-2 md:py-0">
                    Accueil
                  </Link>
                )}
              </li>
              <li>
                {pathname === "/" ? (
                  <ScrollLink to="a-propos" smooth={true} duration={800} className="cursor-pointer hover:text-blue-400 transition block py-2 md:py-0">
                    À propos
                  </ScrollLink>
                ) : (
                  <Link href="/#a-propos" className="hover:text-blue-400 transition block py-2 md:py-0">
                    À propos
                  </Link>
                )}
              </li>
              <li>
                {pathname === "/" ? (
                  <ScrollLink to="services" smooth={true} duration={800} className="cursor-pointer hover:text-blue-400 transition block py-2 md:py-0">
                    Services
                  </ScrollLink>
                ) : (
                  <Link href="/#services" className="hover:text-blue-400 transition block py-2 md:py-0">
                    Services
                  </Link>
                )}
              </li>
              <li>
                {pathname === "/" ? (
                  <ScrollLink to="competences" smooth={true} duration={800} className="cursor-pointer hover:text-blue-400 transition block py-2 md:py-0">
                    Compétences
                  </ScrollLink>
                ) : (
                  <Link href="/#competences" className="hover:text-blue-400 transition block py-2 md:py-0">
                    Compétences
                  </Link>
                )}
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-blue-400 transition block py-2 md:py-0">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/devis" className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-300 transition block">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Contenu principal */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
