"use client";

import { Link as ScrollLink } from "react-scroll";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importez des icônes de menu et de fermeture

export default function Layout({ children }) {
  const pathname = usePathname(); // Récupère la page actuelle
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Inverse l'état du menu
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
        <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center h-16 gap-x-8"> {/* Ajoutez h-16 pour une hauteur fixe */}
            <h1 className="text-2xl font-bold text-blue-400">S-Info</h1>

            {/* Menu hamburger pour les petits écrans */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Affiche l'icône de fermeture ou de menu */}
              </button>
            </div>

            {/* Onglets de navigation */}
            <ul className={`${isMenuOpen ? "block" : "hidden"} md:flex md:space-x-6 absolute md:static top-16 left-0 right-0 bg-gray-800 md:bg-transparent p-4 md:p-0 md:items-center`}> {/* Ajoutez md:items-center */}
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
                <Link href="/devis" className="hover:text-blue-400 transition block py-2 md:py-0">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Contenu des pages */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}