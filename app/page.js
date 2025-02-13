"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
{/* Section Accueil avec image de fond */}
<section 
  id="accueil" 
  className="flex flex-col items-center justify-center text-center py-20 text-white shadow-lg relative min-h-screen" // Utilisez min-h-screen pour couvrir toute la hauteur de l'écran
  style={{
    backgroundImage: "url('./background-image1.jpg')", // Remplacez par le chemin de votre image
    backgroundSize: "cover", // Couvre toute la section sans déformation
    backgroundPosition: "center", // Centre l'image verticalement et horizontalement
    backgroundRepeat: "no-repeat", // Empêche la répétition de l'image
  }}
>
  {/* Overlay sombre pour améliorer la lisibilité du texte */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Contenu de la section */}
  <div className="relative z-10">
    <motion.h1 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold"
    >
      Bienvenue sur S-Info
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="mt-5 text-lg"
    >
      Experts en réparation, maintenance et assistance informatique
    </motion.p>
  </div>
  <div className="flex flex-col items-center mt-24">
  <motion.button
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-400 transition cursor-pointer"
    onClick={() => window.location.href = "/devis"} // Redirection manuelle
  >
    Demander un devis
  </motion.button>
</div>
</section>

{/* Section À propos */}
<section id="a-propos" className="py-20 px-6 max-w-4xl mx-auto text-center">
  <h2 className="text-3xl font-bold text-blue-400">👨‍💻 À propos de S-Info</h2>
  <p className="mt-6 text-lg text-gray-300 leading-relaxed">
    Chez <span className="text-blue-400 font-semibold">S-Info</span>, notre mission est d'offrir un service 
    informatique de qualité, accessible à tous. Que ce soit pour un problème technique, une optimisation 
    de votre matériel ou un dépannage rapide, nous mettons tout en œuvre pour répondre à vos besoins efficacement.  
  </p>
  <p className="mt-4 text-lg text-gray-300 leading-relaxed">
  L’écoute et la réactivité sont au cœur de notre engagement. Nous nous adaptons à chaque situation 
  pour proposer des solutions rapides et durables, aussi bien pour les 
  <span className="font-semibold text-white"> particuliers que les professionnels</span>.
</p>

<p className="mt-4 text-lg text-gray-300 leading-relaxed">
  Avec une passion pour l'informatique et une expertise en maintenance et sécurité, nous vous aidons à 
  <span className="font-semibold text-white"> préserver et améliorer la performance de vos équipements</span>.
</p>


  {/* Bouton avec scroll smooth */}
  <div className="mt-6">
    <Link
      to="services"
      smooth={true}
      duration={800}
      className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
    >
      Découvrir nos services
    </Link>
  </div>
</section>


{/* Section Services */}
<section 
  id="services" 
  className="py-20 px-6 relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('./background-image2.jpg')" }}
>
  {/* Overlay sombre pour améliorer la lisibilité du texte */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Contenu de la section */}
  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-center text-blue-400">🚀 Nos Services Informatiques</h2>
    <p className="mt-4 text-lg text-gray-300 text-center max-w-3xl mx-auto">
      Chez <span className="text-blue-400 font-semibold">S-Info</span>, nous offrons un large éventail de services pour vous accompagner dans vos besoins informatiques. 
      Que vous soyez un particulier ou une entreprise, nous avons les compétences pour résoudre vos problèmes et optimiser votre matériel.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
      
      {/* Réparation PC */}
      <div className="p-6 bg-gray-700 rounded-lg text-center shadow-md">
        <h3 className="text-xl font-semibold text-white">🔧 Réparation & Dépannage</h3>
        <p className="text-gray-300 mt-2">
          Problèmes matériels, erreurs système, lenteur ? Nous réparons votre PC et remplaçons les composants défectueux.
        </p>
      </div>

      {/* Installation & Configuration */}
      <div className="p-6 bg-gray-700 rounded-lg text-center shadow-md">
        <h3 className="text-xl font-semibold text-white">🖥️ Installation & Configuration</h3>
        <p className="text-gray-300 mt-2">
          Installation et mise à jour de Windows, Linux, pilotes, logiciels bureautiques et professionnels.
        </p>
      </div>

      {/* Sécurité et Antivirus */}
      <div className="p-6 bg-gray-700 rounded-lg text-center shadow-md">
        <h3 className="text-xl font-semibold text-white">🔐 Sécurité & Antivirus</h3>
        <p className="text-gray-300 mt-2">
          Protection contre les virus, malware et ransomwares. Mise en place d'antivirus et conseils en cybersécurité.
        </p>
      </div>

      {/* Maintenance et Optimisation */}
      <div className="p-6 bg-gray-700 rounded-lg text-center shadow-md">
        <h3 className="text-xl font-semibold text-white">⚙️ Maintenance & Optimisation</h3>
        <p className="text-gray-300 mt-2">
          Nettoyage, suppression de fichiers inutiles, optimisation des performances et mises à jour pour prolonger la durée de vie de votre ordinateur.
        </p>
      </div>

      {/* Réseaux & Internet */}
      <div className="p-6 bg-gray-700 rounded-lg text-center shadow-md">
        <h3 className="text-xl font-semibold text-white">📡 Réseaux & Internet</h3>
        <p className="text-gray-300 mt-2">
          Configuration de box internet, optimisation du Wi-Fi, installation de routeurs et dépannage réseau.
        </p>
      </div>

      {/* Assistance & Support */}
      <div className="p-6 bg-gray-700 rounded-lg text-center shadow-md">
        <h3 className="text-xl font-semibold text-white">📞 Assistance & Support</h3>
        <p className="text-gray-300 mt-2">
          Besoin d’aide ? Nous proposons un support technique à distance ou à domicile pour résoudre tous vos problèmes.
        </p>
      </div>

    </div>

    {/* Section Demande de Devis */}
    <div className="text-center mt-10">
      <p className="text-lg text-gray-300">📩 Besoin d'une assistance immédiate ? Demandez un devis gratuit !</p>
      <a
        href="/devis"
        className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
      >
        Demander un devis
      </a>
    </div>
  </div>
</section>


{/* Section Compétences */}
<section id="competences" className="py-20 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-blue-400">💡 Nos Compétences</h2>
  <p className="mt-4 text-lg text-gray-300 text-center">
    Découvrez nos domaines d'expertise en informatique et en support technique.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
    
    {/* Carte 1 - Dépannage PC */}
    <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg transform transition duration-300 hover:scale-105">
      <span className="text-4xl">🔧</span>
      <h3 className="text-xl font-semibold text-white mt-4">Dépannage & Réparation</h3>
      <p className="text-gray-300 mt-2 text-sm">
        Résolution rapide des pannes matérielles et logicielles pour garantir une performance optimale.
      </p>
    </div>

    {/* Carte 2 - Installation Logiciels */}
    <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg transform transition duration-300 hover:scale-105">
      <span className="text-4xl">💾</span>
      <h3 className="text-xl font-semibold text-white mt-4">Installation & Configuration</h3>
      <p className="text-gray-300 mt-2 text-sm">
        Mise en place et paramétrage de logiciels adaptés à vos besoins professionnels et personnels.
      </p>
    </div>

    {/* Carte 3 - Sécurité Informatique */}
    <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg transform transition duration-300 hover:scale-105">
      <span className="text-4xl">🔒</span>
      <h3 className="text-xl font-semibold text-white mt-4">Sécurité & Protection</h3>
      <p className="text-gray-300 mt-2 text-sm">
        Mise en place de solutions de cybersécurité pour protéger vos données contre les menaces en ligne.
      </p>
    </div>

    {/* Carte 4 - Réseaux & Infrastructures */}
    <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg transform transition duration-300 hover:scale-105">
      <span className="text-4xl">📡</span>
      <h3 className="text-xl font-semibold text-white mt-4">Réseaux & Infrastructures</h3>
      <p className="text-gray-300 mt-2 text-sm">
        Installation et maintenance de réseaux pour une connectivité fluide et performante.
      </p>
    </div>

  </div>
</section>


{/* Section Contact */}
<section 
  id="contact" 
  className="py-20 px-6 text-center relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('./background-image3.jpg')" }}
>
  {/* Overlay sombre pour améliorer la lisibilité du texte */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Contenu de la section */}
  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-blue-400">📞 Contact</h2>
    <p className="mt-4 text-lg text-gray-300">
      Vous avez une question ou besoin d'un devis ? Contactez-nous par téléphone ou faites une demande en ligne.
    </p>


    {/* Numéro de téléphone */}
    <div className="mt-6 text-xl text-white flex justify-center items-center gap-2">
      <span className="text-3xl">📱</span>
      <span className="font-semibold">06 47 17 36 04</span>
    </div>

    {/* Bouton vers la page Devis */}
    <div className="mt-6">
      <a
        href="/devis"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
      >
        Faire une demande de devis
      </a>
    </div>
  </div>
</section>

    </main>
  );
}
