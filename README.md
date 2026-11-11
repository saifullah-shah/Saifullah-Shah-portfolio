# Saifullah Shah — AI Engineer Portfolio

Personal portfolio for **Syed Saifullah Shah**, an AI Engineer focused on agentic AI, LLM applications, MCP, and AI workflow automation.

The site is a single-page Next.js application with an embedded portfolio assistant that answers questions using only the Markdown knowledge base in [`knowledge/`](./knowledge).

## Features

- Responsive single-page portfolio built with the Next.js App Router
- AI portfolio assistant powered by Groq and grounded in the local knowledge base
- Per-IP rate limiting on the chat endpoint
- SEO metadata, canonical URL, Open Graph/Twitter cards, JSON-LD, sitemap, and robots.txt
- Accessible navigation, skip link, reduced-motion support, and keyboard-friendly chat dialog
- Automated lint, test, and production build checks in GitHub Actions

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Groq SDK](https://github.com/groq/groq-typescript)
- [Vitest](https://vitest.dev/)
- [lucide-react](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create `.env.local` in the project root:

```bash
# Required for the portfolio assistant
GROQ_API_KEY=your_groq_api_key

# Optional; defaults to the current Vercel deployment
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

The assistant endpoint returns a generic error if `GROQ_API_KEY` is missing. The rest of the site works without it.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run the Vitest suite once |

## Project Structure

```text
app/
  api/chat/route.ts     Chat API, validation, rate limiting, Groq call
  layout.tsx            Metadata, fonts, skip link, global chrome
  page.tsx              Portfolio sections and content
  robots.ts             Generated robots.txt
  sitemap.ts            Generated sitemap.xml
components/
  chatbot/              Chat UI, request bridge, and message components
  ...                   Portfolio sections and visual components
knowledge/              Markdown source of truth for the assistant
lib/
  chat/                 Chat types, knowledge loader, rate limiter
  site.ts               Canonical site, contact, and repository values
tests/                  Vitest tests for chat validation and rate limiting
```

## Portfolio Assistant

The assistant is not a general-purpose chatbot. Its system prompt restricts answers to the Markdown files in `knowledge/` and tells it not to invent missing details. To update what the assistant knows, edit those files and redeploy.

Conversation history is sent with each request (up to the last eight messages) so follow-up questions work. The server validates message sizes, roles, and history length before calling Groq.

Rate limiting is in-memory and per server instance. For a multi-instance deployment, replace it with a shared store such as Redis or Upstash.

## Testing and CI

```bash
npm run lint
npm test
npm run build
```

The GitHub Actions workflow in [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) runs the same checks on pushes to `main` and on pull requests.

## Deployment

The site is designed for [Vercel](https://vercel.com/):

1. Import the repository.
2. Add `GROQ_API_KEY` in the project environment variables.
3. Optionally set `NEXT_PUBLIC_SITE_URL` to the production domain.
4. Deploy.

## License

Personal portfolio project. Content, images, and copy belong to Syed Saifullah Shah.
