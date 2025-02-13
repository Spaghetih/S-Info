"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DevisPage() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [ip, setIp] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Pour gérer la modale

  // Récupérer l'IP de l'utilisateur
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("https://api64.ipify.org?format=json")
        .then((res) => res.json())
        .then((data) => setIp(data.ip))
        .catch((err) => console.error("Erreur récupération IP:", err));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const webhookURL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

    const data = {
      content: `📩 **Nouvelle demande de devis !**\n\n👤 **Nom :** ${form.nom}\n📧 **Email :** ${form.email}\n📞 **Téléphone :** ${form.telephone}\n📝 **Message :** ${form.message}\n🌍 **Adresse IP :** ${ip || "Non disponible"}`,
    };

    try {
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setIsModalOpen(true); // Ouvre la modale après l'envoi

      setForm({ nom: "", email: "", telephone: "", message: "" });

    } catch (error) {
      console.error("Erreur d'envoi :", error);
      alert("❌ Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
        
        {/* Bouton Retour à l'accueil */}
        <div className="absolute top-6 left-6">
        <a
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition"
        >
            ← Retour à l'accueil
        </a>
        </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
          📩 Demande de Devis
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 font-semibold">Nom :</label>
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition-all shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold">Email :</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Votre adresse email"
              className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition-all shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold">Téléphone :</label>
            <input
              type="tel"
              name="telephone"
              value={form.telephone}
              onChange={handleChange}
              placeholder="Votre numéro de téléphone"
              className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition-all shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold">Message :</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Décrivez votre problème ou besoin..."
              className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition-all shadow-sm resize-none h-32"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all"
          >
            Envoyer ma demande
          </motion.button>
        </form>
      </motion.div>

      {/* Fenêtre Modale */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-6 rounded-lg shadow-2xl text-center max-w-md w-full"
          >
            <h2 className="text-2xl font-bold text-green-400 mb-4">✅ Demande envoyée !</h2>
            <p className="text-gray-300">
              Vous recevrez une réponse par email ou téléphone dans les plus brefs délais.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition"
            >
              OK
            </button>
          </motion.div>
        </div>
      )}
    </main>
  );
}
