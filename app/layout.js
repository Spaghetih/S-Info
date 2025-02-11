"use client";

import { Link as ScrollLink } from "react-scroll";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname(); // Récupère la page actuelle

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
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-400">S-Info</h1>
            <ul className="flex space-x-6 text-lg">
              <li>
                {pathname === "/" ? (
                  <ScrollLink to="accueil" smooth={true} duration={800} className="cursor-pointer hover:text-blue-400 transition">
                    Accueil
                  </ScrollLink>
                ) : (
                  <Link href="/" className="hover:text-blue-400 transition">
                    Accueil
                  </Link>
                )}
              </li>
              <li>
                {pathname === "/" ? (
                  <ScrollLink to="a-propos" smooth={true} duration={800} className="cursor-pointer hover:text-blue-400 transition">
                    À propos
                  </ScrollLink>
                ) : (
                  <Link href="/#a-propos" className="hover:text-blue-400 transition">
                    À propos
                  </Link>
                )}
              </li>
              <li>
                {pathname === "/" ? (
                  <ScrollLink to="services" smooth={true} duration={800} className="cursor-pointer hover:text-blue-400 transition">
                    Services
                  </ScrollLink>
                ) : (
                  <Link href="/#services" className="hover:text-blue-400 transition">
                    Services
                  </Link>
                )}
              </li>
              <li>
                {pathname === "/" ? (
                  <ScrollLink to="competences" smooth={true} duration={800} className="cursor-pointer hover:text-blue-400 transition">
                    Compétences
                  </ScrollLink>
                ) : (
                  <Link href="/#competences" className="hover:text-blue-400 transition">
                    Compétences
                  </Link>
                )}
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-blue-400 transition">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/devis" className="hover:text-blue-400 transition">
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