import Image from "next/image";
import Reveal from "@/components/reveal";
import TypingTerminal from "@/components/typing-terminal";
import Metrics from "@/components/metrics";
import Pipeline from "@/components/pipeline";
import AgentLoop from "@/components/agent-loop";
import {
  ArrowRight,
  Mail,
  Terminal,
  Cloud,
  Workflow,
  ExternalLink,
  ChevronDown,
  Database,
  Phone,
  Bot,
  Brain,
  Code2,
  Network,
  Sparkles,
  FlaskConical,
  Users,
} from "lucide-react";

function GithubIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.78 1.05.78 2.12v3.14c0 .3.21.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Workflow", href: "#workflow" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const expertise = [
  {
    icon: Bot,
    title: "Agentic AI & Multi-Agent Systems",
    desc: "Designing AI agents and multi-agent systems that plan, use tools, and automate complex tasks.",
  },
  {
    icon: Brain,
    title: "LLM Applications & RAG",
    desc: "Building LLM-powered chatbots and knowledge assistants with prompt engineering, contextual data, and retrieval-augmented generation.",
  },
  {
    icon: Network,
    title: "MCP & Context-Aware AI",
    desc: "Applying Model Context Protocol for context-aware AI systems and interoperable tool integration.",
  },
  {
    icon: Sparkles,
    title: "Generative AI Integration",
    desc: "Integrating generative AI models and APIs into production applications with grounding, guardrails, and graceful fallbacks.",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    desc: "Automating business processes with AI-driven workflows, third-party API integrations, and intelligent orchestration.",
  },
  {
    icon: Code2,
    title: "AI Application Engineering",
    desc: "Developing full-stack AI applications with Python, TypeScript, React, Next.js, and REST APIs.",
  },
];

const skillCategories = [
  {
    title: "Agentic AI",
    icon: Bot,
    skills: [
      "AI Agents",
      "Multi-Agent Systems",
      "MCP",
      "AI Workflows",
      "AI-Assisted Development",
    ],
  },
  {
    title: "Generative AI & LLMs",
    icon: Brain,
    skills: [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "Gemini",
      "Groq",
      "Claude",
      "ChatGPT",
    ],
  },
  {
    title: "AI Application Development",
    icon: Code2,
    skills: ["FastAPI", "REST APIs", "React.js", "Next.js", "Vite"],
  },
  {
    title: "Programming",
    icon: Terminal,
    skills: ["Python", "JavaScript", "TypeScript", "C/C++", "Assembly"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "DynamoDB", "Amazon RDS", "MS Access"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "EC2",
      "S3",
      "VPC",
      "IAM",
      "CloudWatch",
      "Linux",
      "Deployment",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: GithubIcon,
    skills: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "OpenCode"],
  },
  {
    title: "Testing & Quality",
    icon: FlaskConical,
    skills: [
      "Unit Testing",
      "E2E Testing",
      "API Testing",
      "Automated Testing",
      "Debugging",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Technical Presentations",
      "Requirements Gathering",
      "Proposal Writing",
      "Client Communication",
    ],
  },
];

const projects = [
  {
    title: "The Buying Studio",
    challenge:
      "Conventional AI laptop recommendations ignore budget limits and essential requirements, and often obscure missing or uncertain specifications.",
    solution:
      "Built a full-stack platform with deterministic eligibility and preference-based ranking, structured comparisons, and optional Gemini-powered explanations grounded in product evidence. Decision logic is separated from the AI layer, with graceful fallback when the API is unavailable.",
    impact:
      "Delivers transparent, explainable recommendations that respect hard constraints, flag missing specs, and keep working without the LLM. Functional demo on provenance-aware synthetic data, with live marketplace integration planned.",
    stack: ["Python", "FastAPI", "React", "TypeScript", "Google Gemini"],
    year: "2026",
  },
  {
    title: "GenomeIQ",
    challenge:
      "Genomic datasets are complex and difficult to analyze at scale, slowing gene identification and research workflows.",
    solution:
      "Built an ML-powered platform combining an SVM classifier and Python backend for automated genomic classification with a React frontend, bridging complex algorithms with practical research workflows. MongoDB manages application data.",
    impact:
      "Automated the genomic classification workflow and demonstrated AI's potential in bioinformatics. Presented to Khyber Pakhtunkhwa government officials, receiving formal appreciation and consideration for regional implementation.",
    stack: ["Python", "SVM", "React", "MongoDB", "Machine Learning"],
    year: "FYP",
  },
  {
    title: "Kubernetes Platform Migration",
    challenge:
      "Migrating a monolithic legacy stack onto a containerized Kubernetes platform with zero downtime across 20+ services.",
    solution:
      "Built GitOps-driven cluster provisioning with Terraform and Argo CD, introduced Helm charts, and established autoscaling policies.",
    impact: "Reduced deployment time by 75% and improved uptime from 98.9% to 99.9%.",
    stack: ["Terraform", "Kubernetes", "Helm", "Argo CD", "AWS"],
    year: "2025",
  },
  {
    title: "CI/CD Pipeline Overhaul",
    challenge:
      "Manual, error-prone releases taking over a day to push features to production.",
    solution:
      "Designed multi-stage Jenkins pipelines with parallel test execution, artifact caching, and automated rollbacks.",
    impact: "Cut release cycles from 24 hours to 20 minutes with a 90% reduction in failed deployments.",
    stack: ["Jenkins", "Docker", "GitLab CI", "SonarQube"],
    year: "2024",
  },
  {
    title: "Observability Stack Rollout",
    challenge:
      "Blind deployments with no insight into system health or post-release regressions.",
    solution:
      "Deployed Prometheus, Grafana, Loki, and the ELK Stack with centralized logging and alerting runbooks.",
    impact: "Increased MTTR improvement by 60% and achieved full visibility across all environments.",
    stack: ["Prometheus", "Grafana", "Loki", "ELK Stack"],
    year: "2023",
  },
];

const journey = [
  {
    period: "Mar 2025 — Sep 2026",
    role: "AI Engineer",
    org: "Algouistics Inc., Lahore",
    points: [
      "Developed and integrated AI-powered applications using Python, Generative AI, LLMs, and modern AI frameworks.",
      "Designed Agentic AI solutions with AI agents, intelligent workflows, and task automation.",
      "Built LLM-powered chatbots and knowledge-based assistants using prompt engineering, contextual data, and API integrations.",
      "Contributed to full-stack AI development with Python, TypeScript, React.js, and Next.js, applying MCP and RAG concepts.",
    ],
  },
  {
    period: "Sep 2023 — Jan 2025",
    role: "Lab Engineer",
    org: "Pak-Austria Fachhochschule, Haripur",
    points: [
      "Conducted practical laboratory sessions in Programming Fundamentals and Object-Oriented Programming (OOP).",
      "Guided students through hands-on exercises, assignments, and practical lab tasks.",
      "Explained core programming concepts including control flow, functions, arrays, classes, objects, inheritance, polymorphism, encapsulation, and abstraction.",
      "Assisted students with writing, reviewing, debugging, and improving code while building structured problem-solving approaches.",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0f1a] text-[#e6edf3]">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0f1a]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-sm font-medium text-emerald-400"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10">
              <Terminal className="h-4 w-4" />
            </span>
            saifullah-shah
          </a>
          <ul className="hidden items-center gap-6 font-mono text-sm text-slate-400 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-emerald-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-lg border border-emerald-400/40 px-4 py-2 font-mono text-sm text-emerald-400 transition-colors hover:bg-emerald-400/10"
          >
            Hire me
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pb-8 pt-20 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="hero-scale animate-fade-in-up relative">
          <div className="mb-5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-emerald-400/40 blur-2xl" />
              <div className="relative rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 p-1.5">
                <Image
                  src="/saifullah-shah.png"
                  alt="SaifUllah Shah"
                  width={320}
                  height={320}
                  priority
                  className="h-40 w-40 rounded-full border-4 border-[#0a0f1a] object-cover md:h-52 md:w-52"
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            AI Engineer
            <span className="cursor-blink text-emerald-400">_</span>
          </h1>
          <p className="mt-2 font-mono text-sm text-slate-400 md:text-base">
            Agentic Development | Agentic AI | AI Automation | LLM Applications &amp; Intelligent Workflows
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
            Building intelligent, scalable, and reliable AI applications that solve
            real-world problems and drive innovation.
          </p>
          <div className="mt-3 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-2 font-medium text-[#0a0f1a] transition-colors hover:bg-emerald-300"
            >
              View projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2 text-slate-200 transition-colors hover:border-emerald-400/40 hover:text-emerald-400"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-3 flex justify-center gap-6">
            <a
              href="https://github.com/saifullah-shah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-emerald-400"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/syedsaifullahshah/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-emerald-400"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:tirmezi17@gmail.com"
              className="text-slate-400 transition-colors hover:text-emerald-400"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <TypingTerminal />
        </div>
        <a
          href="#about"
          className="absolute bottom-2 text-slate-500 transition-colors hover:text-emerald-400"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 bg-[#0d1424]">
<div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="mb-2 font-mono text-sm text-emerald-400">01. About me</p>
            <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
              Engineering AI systems that ship
            </h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <Reveal delay={100}>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                I&apos;m an AI Engineer with hands-on experience building AI
                applications, Generative AI, LLMs, and Agentic AI systems. I specialize in
                LLM integration, AI agents, multi-agent systems, MCP, and RAG — grounded in
                a background of technical instruction. I focus on turning complex models
                into reliable, production-ready assistants and intelligent workflows.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-xl border border-white/10 bg-[#0a0f1a] p-6">
                <p className="mb-4 font-mono text-sm text-slate-400">Focus areas</p>
                <ul className="space-y-3 text-slate-300">
                  {[
                    "Agentic AI, AI agents & multi-agent systems",
                    "LLM applications, RAG & prompt engineering",
                    "MCP & context-aware AI integration",
                    "Generative AI grounding, guardrails & fallbacks",
                    "AI workflow automation & API integrations",
                    "Full-stack AI development & production deployment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-6">
                      <span className="flex h-6 w-4 shrink-0 items-center justify-center font-mono text-emerald-400">
                        &gt;
                      </span>
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Metrics + Pipeline strip */}
      <section className="border-t border-white/10 bg-[#0d1424]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <Metrics />
          </Reveal>
          <Reveal delay={150} className="mt-10">
            <Pipeline />
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="mb-2 font-mono text-sm text-emerald-400">02. Featured projects</p>
            <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
              Things I&apos;ve built
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 100}>
              <article
                className="group flex h-full flex-col rounded-xl border border-white/10 bg-[#0d1424] p-6 transition-all hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-400/5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-md bg-[#0a0f1a] px-2 py-1 font-mono text-xs text-emerald-400">
                    {project.year}
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-500 transition-colors group-hover:text-emerald-400" />
                </div>
                <h3 className="mb-3 text-lg font-semibold">{project.title}</h3>
                <div className="space-y-4 text-sm leading-6 text-slate-400">
                  <p>
                    <span className="font-medium text-emerald-400">Challenge:</span>{" "}
                    {project.challenge}
                  </p>
                  <p>
                    <span className="font-medium text-emerald-400">Solution:</span>{" "}
                    {project.solution}
                  </p>
                  <p>
                    <span className="font-medium text-emerald-400">Impact:</span>{" "}
                    {project.impact}
                  </p>
                </div>
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 px-2 py-1 font-mono text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            More projects and case studies on{" "}
            <a
              href="https://github.com/saifullah-shah"
              className="text-emerald-400 underline-offset-4 hover:underline"
            >
              GitHub →
            </a>
          </p>
        </div>
      </section>

      {/* Agentic workflow */}
      <section
        id="workflow"
        className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-[#0d1424]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="mb-2 font-mono text-sm text-emerald-400">
              03. Agentic workflow
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              How I build AI systems
            </h2>
            <p className="mb-12 max-w-2xl text-lg leading-8 text-slate-300">
              I design AI systems that reason about a task, break it into steps,
              use the right tools, and validate the result before responding.
            </p>
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <Reveal delay={120}>
              <AgentLoop />
            </Reveal>
            <Reveal delay={200}>
              <ul className="space-y-5">
                {[
                  {
                    title: "Planning & decomposition",
                    desc: "Break ambiguous goals into clear, executable steps.",
                  },
                  {
                    title: "Tool use & grounding",
                    desc: "Call APIs and search knowledge instead of guessing.",
                  },
                  {
                    title: "Validation loops",
                    desc: "Check outputs against constraints before returning them.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-2 text-cyan-400">&gt;</span>
                    <div>
                      <h3 className="font-semibold text-slate-200">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-t border-white/10 bg-[#0d1424]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="mb-2 font-mono text-sm text-emerald-400">04. Expertise</p>
            <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
              Key expertise highlights
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
              <div
                className="rounded-xl border border-white/10 bg-[#0a0f1a] p-6 transition-colors hover:border-emerald-400/40"
              >
                <item.icon className="mb-4 h-6 w-6 text-emerald-400" />
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-400">{item.desc}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="mb-2 font-mono text-sm text-emerald-400">05. Skills</p>
            <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
              Skills &amp; capabilities
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat, index) => (
              <Reveal key={cat.title} delay={index * 80}>
              <div
                key={cat.title}
                className="rounded-xl border border-white/10 bg-[#0d1424] p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <cat.icon className="h-5 w-5 text-emerald-400" />
                  <h3 className="font-semibold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-[#0a0f1a] px-3 py-1.5 font-mono text-xs text-slate-300 ring-1 ring-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="border-t border-white/10 bg-[#0d1424]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="mb-2 font-mono text-sm text-emerald-400">06. Journey</p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Professional journey
            </h2>
            <p className="mb-12 max-w-3xl text-lg leading-8 text-slate-300">
              I&apos;m an AI Engineer with hands-on experience building AI applications,
              LLM-powered assistants, and agentic workflows. My background spans
              full-stack AI development, prompt engineering, API integrations, testing,
              and deployment — grounded in a foundation of software engineering
              education.
            </p>
          </Reveal>
          <div className="relative space-y-8 border-l border-white/10 pl-6 md:pl-8">
            {journey.map((entry, index) => (
              <Reveal key={entry.period} delay={index * 120}>
              <div className="relative">
                <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20 md:-left-[41px]" />
                <p className="font-mono text-sm text-emerald-400">{entry.period}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {entry.role} <span className="text-slate-500">@</span>{" "}
                  <span className="text-slate-300">{entry.org}</span>
                </h3>
                <ul className="mt-2 space-y-1.5 text-slate-400">
                  {entry.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 leading-6">
                      <span className="flex h-6 w-4 shrink-0 items-center justify-center font-mono text-emerald-400">
                        &gt;
                      </span>
                      <span className="min-w-0">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <Reveal>
            <p className="mb-2 font-mono text-sm text-emerald-400">07. Contact</p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s build intelligent systems together
            </h2>
            <p className="mb-10 text-lg text-slate-300">
              Whether you&apos;re hiring an AI Engineer, integrating LLMs into a
              product, or automating workflows with AI agents — I&apos;d love to hear
              about it.
            </p>
          </Reveal>
          <Reveal delay={120}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:tirmezi17@gmail.com"
              className="flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 font-medium text-[#0a0f1a] transition-colors hover:bg-emerald-300"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href="https://github.com/saifullah-shah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 transition-colors hover:border-emerald-400/40 hover:text-emerald-400"
            >
              <GithubIcon className="h-4 w-4" />
              View my GitHub
            </a>
          </div>
          <div className="mt-10 space-y-4 text-sm text-slate-400">
            <p className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4 text-emerald-400" /> Email:{" "}
              <span className="text-slate-200">tirmezi17@gmail.com</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4 text-emerald-400" /> Phone:{" "}
              <span className="text-slate-200">+92 302 5733 496</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <GithubIcon className="h-4 w-4 text-emerald-400" /> Portfolio code on{" "}
              <a
                href="https://github.com/saifullah-shah"
                className="text-emerald-400 underline-offset-4 hover:underline"
              >
                GitHub
              </a>
            </p>
          </div></Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} SaifUllah Shah</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
          <p>Deploy with confidence_</p>
        </div>
      </footer>
    </div>
  );
}