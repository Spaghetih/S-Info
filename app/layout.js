"use client";

import { Link as ScrollLink } from "react-scroll";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Layout({ children }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="fr">
      <head>
        <title>S-Informatique | Services Informatiques</title>
        <meta name="description" content="S-Informatique - Réparation et assistance informatique." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SFW0HBYZSJ"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SFW0HBYZSJ');
          `,
        }} />
      </head>
      <body className="min-h-screen bg-gray-900 text-white">
        {/* Barre de navigation */}
        <header className={`fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50 transition-transform duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center h-16">
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo.png" alt="Logo S-Informatique" width={110} height={100} className="cursor-pointer" />
                <span className="text-white text-xl font-bold">S-Informatique</span>
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
            <div className="hidden md:flex items-center">
              <a href="mailto:unvr.suleyman@gmail.com" className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-full transition hover:bg-gray-600">
                <FaEnvelope size={20} />
                <span className="text-sm">unvr.suleyman@gmail.com</span>
              </a>
            </div>
            <ul className={`${isMenuOpen ? "flex" : "hidden"} md:flex md:space-x-6 absolute md:static top-16 left-0 right-0 bg-gray-800 md:bg-transparent p-4 md:p-0 flex-col md:flex-row items-center w-full md:w-auto`}>
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
                <Link href="/contact" className="bg-white text-gray-900 font-bold py-2 px-4 rounded-full block transition hover:bg-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Contenu des pages */}
        <main className="pt-20">{children}</main>

        {/* Pied de page */}
        <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-10">
          <p>
            &copy; {new Date().getFullYear()} S-Informatique Tous droits réservés.  
            <a href="/mentionslegales" className="text-blue-400 hover:underline ml-2">
              Mentions légales
            </a>
          </p>
        </footer>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
