"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Ouvre la modale en douceur après 500ms
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Départ invisible et plus petit
          animate={{ opacity: 1, scale: 1 }} // Apparition en fondu + zoom progressif
          transition={{ duration: 0.6, ease: "easeOut" }} // Ralenti l'effet d'apparition
          className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm w-full text-center"
        >
          <h2 className="text-xl font-bold mb-2">📍 Local en cours d'ouverture</h2>
          <p className="mb-4">Nous prenons quand même en charge les réparations.</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            OK, compris
          </button>
        </motion.div>
      </div>
    )
  );
}
