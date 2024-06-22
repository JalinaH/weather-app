import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = "https://check-city-weather0.netlify.app/";

const links = [{ url: "/", changefreq: "daily", priority: 1.0 }];

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream(
  path.join(__dirname, "public", "sitemap.xml")
);

sitemap.pipe(writeStream);
links.forEach((link) => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log("Sitemap created successfully"))
  .catch((err) => console.error("Error creating sitemap", err));
