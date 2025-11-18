import { SITE_URL } from "@/lib/constants";

export async function GET() {
  const robotsTxt = `# robots.txt for ${SITE_URL}

User-agent: *
Allow: /
Disallow: /api/
Disallow: /payment
Disallow: /thank-you

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay (optional)
Crawl-delay: 1
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}


