/**
 * Canonical site information shared by metadata, structured data, and links.
 *
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment when the production
 * domain changes. The fallback is the current Vercel deployment.
 */
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://saifullah-shah-portfolio.vercel.app";

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");

export const SITE_NAME = "Syed Saifullah Shah";

export const SITE_TITLE = `${SITE_NAME} | AI Engineer`;

export const SITE_DESCRIPTION =
  "AI Engineer with 1.5+ years of experience building agentic AI systems, LLM-powered applications, and production-ready AI assistants. Skilled in Python, FastAPI, React, MCP, and RAG concepts.";

export const SITE_OG_IMAGE = "/og-image.png";

export const EMAIL = "tirmezi.17@gmail.com";

export const GITHUB_URL = "https://github.com/saifullah-shah";

export const PORTFOLIO_REPO_URL = `${GITHUB_URL}/Saifullah-Shah-portfolio`;

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/syed-saifullah-shah-9702a6154/";
