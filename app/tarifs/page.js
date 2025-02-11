"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Titre */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-blue-400"
      >
        💰 Nos Tarifs (TTC)
      </motion.h1>

      <p className="text-center text-lg text-gray-300 mt-4">
        Tarifs clairs et transparents pour tous nos services. Tous les prix sont en **TTC**.
      </p>

      {/* Liste des tarifs */}
      <div className="max-w-4xl mx-auto mt-10">

        {/* Réparation & Mise à Niveau */}
        <h2 className="text-2xl font-semibold text-blue-400 mt-6">🔧 Réparation & Mise à Niveau</h2>
        <ul className="mt-2 space-y-2 text-lg">
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Ajout/Remplacement Composant Simple</span> <span className="font-semibold">19€</span>
          </li>
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Ajout/Remplacement Composant Complexe</span> <span className="font-semibold">49€</span>
          </li>
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Mise à Niveau PC / Changement de Boîtier</span> <span className="font-semibold">89€</span>
          </li>
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Assemblage PC sur mesure</span> <span className="font-semibold">69€</span>
          </li>
        </ul>

        {/* Maintenance & Installation */}
        <h2 className="text-2xl font-semibold text-blue-400 mt-6">🖥️ Maintenance & Installation</h2>
        <ul className="mt-2 space-y-2 text-lg">
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Désinfection Système</span> <span className="font-semibold">49€</span>
          </li>
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Installation OS + Drivers (sans transfert)</span> <span className="font-semibold">69€</span>
          </li>
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Installation OS + Drivers (avec transfert)</span> <span className="font-semibold">89€</span>
          </li>
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Réinitialisation mot de passe Windows/Mac</span> <span className="font-semibold">29€</span>
          </li>
        </ul>

        {/* Nettoyage & Optimisation */}
        <h2 className="text-2xl font-semibold text-blue-400 mt-6">🧹 Nettoyage & Optimisation</h2>
        <ul className="mt-2 space-y-2 text-lg">
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Nettoyage Externe PC / Portable</span> <span className="font-semibold">19€</span>
          </li>
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Nettoyage Interne PC (Pâte Thermique)</span> <span className="font-semibold">39€</span>
          </li>
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Nettoyage Interne Portable (Pâte Thermique)</span> <span className="font-semibold">69€</span>
          </li>
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Optimisation Wi-Fi & Dépannage réseau</span> <span className="font-semibold">49€</span>
          </li>
        </ul>

        {/* Sauvegarde & Récupération */}
        <h2 className="text-2xl font-semibold text-blue-400 mt-6">💾 Sauvegarde & Récupération</h2>
        <ul className="mt-2 space-y-2 text-lg">
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Clonage Disque</span> <span className="font-semibold">39€</span>
          </li>
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Transfert de Données</span> <span className="font-semibold">49€</span>
          </li>
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Récupération de Données (panne logicielle)</span> <span className="font-semibold">99-149€</span>
          </li>
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span>Diagnostic avancé PC (logiciel & matériel)</span> <span className="font-semibold">39€</span>
          </li>
        </ul>
      </div>

      {/* Bouton vers le devis */}
      <div className="text-center mt-10">
        <p className="text-lg text-gray-300">📩 Besoin d’un service ? Demandez un devis personnalisé !</p>
        <Link
          href="/devis"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
        >
          Faire une demande de devis
        </Link>
      </div>
    </main>
  );
}
