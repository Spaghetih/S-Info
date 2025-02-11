"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900 min-h-screen">
        {/* Hero Section avec animation */}
        <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-500 text-white shadow-lg">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold"
          >
            Bienvenue sur S-Info
          </motion.h1>

          {/* Séparation élégante */}
          <div className="relative flex items-center justify-center my-6">
            <div className="w-24 border-t-4 border-white shadow-md"></div>
            <span className="absolute bg-blue-500 px-4 text-white text-xl font-bold">
              ✦
            </span>
            <div className="w-24 border-t-4 border-white shadow-md"></div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-4 text-lg"
          >
            Experts en réparation, maintenance et assistance informatique
          </motion.p>

          {/* Bouton bien visible sous le texte */}
          <motion.a
            href="/devis"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Demander un devis
          </motion.a>
        </section>


      {/* Nos Services avec animation */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-white shadow-md rounded-lg max-w-5xl mx-auto mt-10 px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-200 rounded-lg text-center shadow-md">
            <img src="/repair.png" alt="Réparation PC" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Réparation PC</h3>
            <p className="text-gray-700 mt-2">Dépannage rapide, diagnostic et remplacement de pièces.</p>
          </div>
          <div className="p-6 bg-gray-200 rounded-lg text-center shadow-md">
            <img src="/install.png" alt="Installation Logiciel" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Installation Logiciels</h3>
            <p className="text-gray-700 mt-2">Mise en place de Windows, antivirus, logiciels professionnels.</p>
          </div>
          <div className="p-6 bg-gray-200 rounded-lg text-center shadow-md">
            <img src="/maintenance.png" alt="Maintenance" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Maintenance & Optimisation</h3>
            <p className="text-gray-700 mt-2">Nettoyage, optimisation et mises à jour de votre PC.</p>
          </div>
        </div>
      </motion.section>

      {/* Ligne de séparation améliorée */}
      <div className="relative flex items-center justify-center my-16">
        <div className="w-3/4 border-t-4 border-gray-500 shadow-md"></div>
        <span className="absolute bg-gray-100 px-4 text-gray-700 text-xl font-bold">
          ✦
        </span>
      </div>


      {/* Pourquoi nous choisir avec animation */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50 shadow-md rounded-lg max-w-5xl mx-auto mt-10 px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Pourquoi choisir S-Info ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">✅ Service Rapide</h3>
            <p className="text-gray-700 mt-2">Nous réparons votre ordinateur en un temps record.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">💻 Expertise Certifiée</h3>
            <p className="text-gray-700 mt-2">Des techniciens expérimentés pour garantir la qualité.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">🔧 Matériel de Qualité</h3>
            <p className="text-gray-700 mt-2">Utilisation de pièces et logiciels fiables et reconnus.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">📍 Assistance Locale</h3>
            <p className="text-gray-700 mt-2">Nous intervenons rapidement à domicile ou à distance.</p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white text-center py-6 mt-10 shadow-lg">
        <p>© 2025 S-Info - Tous droits réservés</p>
        <p className="mt-2">
          Contact : <a href="mailto:contact@s-info.com" className="underline">contact@s-info.com</a> | 📞 06 47 17 36 04
        </p>
      </footer>
    </main>
  );
}
