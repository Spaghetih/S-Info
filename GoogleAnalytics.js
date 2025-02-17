import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Charger le script Google Analytics
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-SFW0HBYZSJ";
    document.head.appendChild(script);

    // Ajouter le script de configuration
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SFW0HBYZSJ');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
};

export default GoogleAnalytics;
