const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/services", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.5 },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: "https://s-info-nine.vercel.app" });

  const writeStream = createWriteStream("./public/sitemap.xml");
  stream.pipe(writeStream);

  links.forEach((link) => stream.write(link));
  stream.end();

  await streamToPromise(stream);

  console.log("✅ Sitemap généré avec succès !");
}

generateSitemap().catch(console.error);
