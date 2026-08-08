// Identity URLs are permanent — keep them on the production origin so the
// @ids never change between environments.
export const identity = "https://umangkumarr.github.io";

export const personId = `${identity}/#person`;

/**
 * The canonical Person entity. Every page embeds this full object under the
 * same @id so crawlers resolve one consistent identity across the site.
 */
export const person = {
  "@id": personId,
  "@type": "Person",
  alternateName: "@umangkumarr",
  description:
    "Software development engineer at Meesho, building returns and logistics systems for one of India's largest e-commerce platforms. Based in Bengaluru, India.",
  familyName: "Kumar",
  givenName: "Umang",
  image: [`${identity}/opengraph-image.png`],
  jobTitle: "Software Development Engineer II",
  name: "Umang Kumar",
  sameAs: [
    "https://github.com/umangkumarr",
    "https://www.linkedin.com/in/umangkumarr/",
    "https://leetcode.com/hidemysecrets/",
    "https://codeforces.com/profile/alive",
  ],
  url: identity,
  worksFor: {
    "@id": "https://www.meesho.io/#organization",
    "@type": "Organization",
    name: "Meesho",
    url: "https://www.meesho.io",
  },
};

/** Reference to the Person by @id, for nodes that shouldn't re-embed it. */
export const personRef = { "@id": personId };
