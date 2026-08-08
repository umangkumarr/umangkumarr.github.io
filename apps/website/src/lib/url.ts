// Where the site lives in production (GitHub Pages user site).
const PRODUCTION_ORIGIN = "umangkumarr.github.io";

export const buildUrl = (
  nodeEnv = process.env.NODE_ENV,
  productionUrl = process.env.DEPLOY_ORIGIN
) => {
  const protocol = nodeEnv === "production" ? "https" : "http";
  const origin =
    productionUrl ??
    (nodeEnv === "production" ? PRODUCTION_ORIGIN : "localhost:3010");

  return `${protocol}://${origin}`;
};

export const url = buildUrl();
