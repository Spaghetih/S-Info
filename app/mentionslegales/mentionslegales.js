import React from "react";

const MentionsLegales = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mentions Légales</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">1. Éditeur du site</h2>
        <p><strong>Nom de l’entreprise :</strong> S-Info</p>
        <p><strong>Responsable de publication :</strong> Suleyman UNVER</p>
        <p><strong>Adresse :</strong> 21 Grand Rue, 67110 Gundershoffen, France</p>
        <p><strong>Téléphone :</strong> +33 6 47 17 36 04</p>
        <p><strong>Email :</strong> [Ton adresse email professionnelle]</p>
        <p><strong>SIRET :</strong> [Ton numéro de SIRET]</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">2. Hébergeur du site</h2>
        <p><strong>Nom de l’hébergeur :</strong> [Exemple : OVH, Hostinger...]</p>
        <p><strong>Adresse :</strong> [Adresse de l’hébergeur]</p>
        <p><strong>Site web :</strong> [URL de l’hébergeur]</p>
        <p><strong>Téléphone :</strong> [Numéro de contact de l’hébergeur]</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">3. Activité et services</h2>
        <p>Le site <strong>S-Info</strong> propose des services de diagnostic et de réparation informatique.</p>
        <p>Les devis sont proposés gratuitement et les réparations sont effectuées en atelier après accord du client.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">4. Propriété intellectuelle</h2>
        <p>Tous les contenus présents sur ce site (textes, images, logos...) sont la propriété exclusive de S-Info, sauf mention contraire.</p>
        <p>Toute reproduction ou utilisation sans autorisation est interdite.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">5. Protection des données personnelles</h2>
        <p>Les informations collectées via le site (nom, email, téléphone…) sont utilisées uniquement pour le traitement des demandes de devis et la gestion des interventions.</p>
        <p>Conformément au <strong>RGPD</strong>, vous avez un droit d’accès, de rectification et de suppression de vos données personnelles.</p>
        <p>Pour toute demande, contactez-nous à <strong>[Ton adresse email]</strong>.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">6. Responsabilité</h2>
        <p>S-Info s’engage à fournir des services de réparation dans les meilleures conditions possibles.</p>
        <p>Cependant, nous ne saurions être tenus responsables des dommages résultant d’une mauvaise utilisation du matériel par le client après réparation.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">7. Contact</h2>
        <p>Pour toute question, vous pouvez nous contacter à <strong>[Ton email]</strong> ou par téléphone au <strong>+33 6 47 17 36 04</strong>.</p>
      </section>
    </div>
  );
};

export default MentionsLegales;
