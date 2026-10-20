// projects-data.js - Project catalog and category definitions

window.PROJECT_CATEGORIES = [
  { id: 'ai-assistants', label: 'AI Assistants',           icon: 'fa-solid fa-robot' },
  { id: 'data-vision',   label: 'Data & Vision',           icon: 'fa-solid fa-chart-line' },
  { id: 'devops-tools',  label: 'DevOps & Dev Tools',      icon: 'fa-solid fa-terminal' },
  { id: 'productivity',  label: 'Productivity & Business', icon: 'fa-solid fa-briefcase' },
  { id: 'full-stack',    label: 'Full-Stack Systems',      icon: 'fa-solid fa-layer-group' },
];

window.PROJECTS = [
  {
    name: 'Pulse',
    category: 'data-vision',
    tags: ['FastAPI', 'Next.js', 'Gemini', 'SQL'],
    description: 'Chat with spreadsheets and SQL databases in natural language to generate queries, dashboards, and business insights, with automated profiling, forecasting, and metric alerting.',
    image: './pulse.png',
    featured: true
  },
  {
    name: 'Blueprint',
    category: 'devops-tools',
    tags: ['Next.js', 'TypeScript', 'Gemini Vision', 'Mermaid.js'],
    description: 'Upload an architecture diagram (digital or hand-drawn) and get structured feedback on scalability, reliability, and trade-offs, plus cost estimation, security auditing, and IaC generation.',
    image: './blueprint.png',
    featured: true
  },
  {
    name: 'Synthis',
    category: 'ai-assistants',
    tags: ['Python', 'FastAPI', 'Gemini', 'React'],
    description: 'AI research assistant that plans multi-query searches, retrieves and verifies web sources, and synthesizes grounded, cited reports.',
    image: './synthis.png',
    featured: true
  },
  {
    name: 'Debrief',
    category: 'productivity',
    tags: ['Python', 'React', 'TypeScript', 'Gemini'],
    description: 'AI meeting intelligence platform with Gemini 2.5 audio transcription, grounded action-item and decision extraction with source traceability, and automated follow-up emails.',
    image: './debrief.png',
    featured: true
  },
  {
    name: 'Assay',
    category: 'ai-assistants',
    tags: ['Python', 'LangGraph', 'React', 'PostgreSQL'],
    description: 'AI contract compliance agent that checks documents against versioned rules and returns Compliant, Violation, or Needs Review, with a verified verbatim quote for every finding.',
    image: null,
    featured: false
  },
  {
    name: 'Perimeter',
    category: 'devops-tools',
    tags: ['Python', 'LangGraph', 'Kubernetes', 'React'],
    description: 'AI-augmented SOC platform with a LangGraph investigation agent, MITRE ATT&CK correlation, hybrid severity scoring, STIX 2.1 reporting, and human-approval gates for containment.',
    image: null,
    featured: false
  },
  {
    name: 'Atlas',
    category: 'devops-tools',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Gemini'],
    description: 'Paste a public GitHub repo URL and get an AI-generated architecture diagram, module explanations, onboarding guide, health and security scorecard, and dependency graph.',
    image: null,
    featured: false
  },
  {
    name: 'Aegis',
    category: 'devops-tools',
    tags: ['Python', 'LangGraph', 'Kubernetes', 'React'],
    description: 'Autonomous SRE agent for Kubernetes: alert investigation and root-cause diagnosis, tiered self-healing with human-approval gates, and automated canary rollback.',
    image: null,
    featured: false
  },
  {
    name: 'Vantage',
    category: 'data-vision',
    tags: ['TypeScript', 'Next.js', 'React', 'Text-to-Speech'],
    description: 'AI news intelligence platform with multi-source discovery, personalized "Why It Matters" briefings, story clustering, adaptive interest learning, and article-grounded chat.',
    image: null,
    featured: false
  },
  {
    name: 'Distill',
    category: 'data-vision',
    tags: ['Python', 'scikit-learn', 'Plotly', 'NLP'],
    description: 'Enterprise-grade AI analytics platform with sandboxed natural-language querying, automated EDA, AutoML tournaments, hypothesis testing, and anomaly detection.',
    image: null,
    featured: false
  },
  {
    name: 'Threadline',
    category: 'ai-assistants',
    tags: ['Python', 'TypeScript', 'React', 'MCP'],
    description: 'Memory-augmented AI platform with a knowledge graph, temporal decay, versioned rollback, semantic drift tracking, and signed cross-agent memory federation.',
    image: null,
    featured: false
  },
  {
    name: 'Loopcast',
    category: 'productivity',
    tags: ['Python', 'LangGraph', 'React', 'TypeScript'],
    description: 'AI social publishing platform: multi-agent content generation with brand-voice guardrails, a human approval queue, engagement heatmaps, and A/B hook simulation.',
    image: null,
    featured: false
  },
  {
    name: 'Aegismed',
    category: 'data-vision',
    tags: ['Python', 'PyTorch', 'MONAI', 'React'],
    description: 'AI medical imaging platform for DICOM ingestion, multi-organ segmentation, and MPR visualization, with PHI de-identification and clinical PDF reporting.',
    image: null,
    featured: false
  },
  {
    name: 'Precedent',
    category: 'ai-assistants',
    tags: ['TypeScript', 'Next.js', 'Claude', 'CourtListener'],
    description: 'AI legal workspace with zero-hallucination case law research grounded in live CourtListener queries, plus contract analysis, risk scoring, and clause comparison.',
    image: null,
    featured: false
  },
  {
    name: 'Margin',
    category: 'ai-assistants',
    tags: ['Python', 'FAISS', 'BM25', 'Streamlit'],
    description: 'Zero-hallucination document Q&A with hybrid FAISS + BM25 retrieval, cross-document comparison, grounding confidence scoring, and page-exact citations.',
    image: null,
    featured: false
  },
  {
    name: 'Keepsake',
    category: 'full-stack',
    tags: ['TypeScript', 'Next.js', 'AWS S3', 'PostgreSQL'],
    description: 'Self-hosted private photo vault with direct browser-to-S3 uploads, RAW/HEIC/Live Photo support, an interactive world map, "On This Day" memories, and in-browser editing.',
    image: null,
    featured: false
  },
  {
    name: 'Momentum',
    category: 'data-vision',
    tags: ['TypeScript', 'Next.js', 'Computer Vision'],
    description: 'AI fitness coach with client-side pose estimation (33-joint biomechanics, live rep counting), USDA-grounded meal photo analysis, and guardrailed workout generation.',
    image: null,
    featured: false
  },
  {
    name: 'Wander',
    category: 'productivity',
    tags: ['TypeScript', 'Next.js', 'OpenAI', 'Google Maps API'],
    description: 'Zero-hallucination AI travel planner that grounds every stop in real Google Places data, calculates transit times, and supports calendar export and expense tracking.',
    image: null,
    featured: false
  },
  {
    name: 'Warp',
    category: 'full-stack',
    tags: ['Go', 'Redis', 'PostgreSQL', 'React'],
    description: 'Self-hosted, sub-5ms distributed URL shortener with Snowflake IDs, Redis cache-aside redirects, custom domains, geo/device targeting, and UTM attribution.',
    image: null,
    featured: false
  },
  {
    name: 'FinBot',
    category: 'productivity',
    tags: ['React', 'Express', 'PostgreSQL', 'Gemini'],
    description: 'AI personal finance chatbot with Plaid bank sync, Gemini function calling (create budgets and log transactions via chat), spending analytics, and savings goals.',
    image: null,
    featured: false
  },
  {
    name: 'Poise',
    category: 'productivity',
    tags: ['TypeScript', 'React', 'OpenAI', 'Whisper'],
    description: 'Voice-first AI mock interview coach with multidimensional feedback (content, STAR structure, delivery), live WPM/pace telemetry, and a real-time spectrogram.',
    image: null,
    featured: false
  },
  {
    name: 'Beacon',
    category: 'devops-tools',
    tags: ['Python', 'Next.js', 'Elasticsearch', 'OpenAI'],
    description: 'AI production incident investigator that correlates CloudWatch metrics, Elasticsearch logs, and X-Ray traces into ranked root-cause hypotheses and causal topology graphs.',
    image: null,
    featured: false
  },
  {
    name: 'Spotfound',
    category: 'full-stack',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    description: 'AI-augmented Lost & Found platform for academic institutions with AI item matching, OCR extraction, real-time chat, Web Push, and RPG gamification.',
    image: null,
    featured: false
  },
  {
    name: 'Anchor',
    category: 'ai-assistants',
    tags: ['Python', 'TypeScript', 'Next.js', 'OpenAI'],
    description: 'Production-grade RAG customer support agent with hybrid dense + BM25 retrieval, cross-encoder reranking, grounded citations, multi-turn memory, and sentiment analysis.',
    image: null,
    featured: false
  },
  {
    name: 'Waypoint',
    category: 'devops-tools',
    tags: ['Python', 'TypeScript', 'Next.js', 'Gemini'],
    description: 'Autonomous GitHub issue solver: reads an issue, plans, writes code in a sandboxed workspace, and opens a draft PR for human review, backed by AST codebase indexing.',
    image: null,
    featured: false
  },
  {
    name: 'Vet',
    category: 'devops-tools',
    tags: ['Python', 'TypeScript', 'Next.js', 'Gemini'],
    description: 'AI pull request reviewer with a 4-persona agent committee (security, performance, clean code, testing), PR health scoring, AST breaking-change detection, and secret scanning.',
    image: null,
    featured: false
  },
  {
    name: 'Warden',
    category: 'devops-tools',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Argon2id'],
    description: 'Standalone authentication system with Argon2id hashing, rotating single-use refresh tokens in httpOnly cookies, and an automated adversarial security test suite.',
    image: null,
    featured: false
  },
  {
    name: 'Landed',
    category: 'productivity',
    tags: ['TypeScript', 'Next.js', 'Gemini'],
    description: 'AI job-search copilot: live postings, resume tailoring without fabrication, cover letters, Kanban application tracking, ATS scoring, and interview prep.',
    image: null,
    featured: false
  },
  {
    name: 'Relay',
    category: 'ai-assistants',
    tags: ['Python', 'React', 'ChromaDB', 'Gemini'],
    description: 'AI customer support platform with grounded RAG on Gemini 2.5 Flash, ChromaDB retrieval, multi-turn session memory, and hybrid confidence and escalation scoring.',
    image: null,
    featured: false
  },
  {
    name: 'Tempo',
    category: 'productivity',
    tags: ['TypeScript', 'Next.js', 'LangChain', 'Gemini'],
    description: 'AI calendar and planning system using LangChain + Gemini for natural-language scheduling, chronotype-aware energy planning, and automatic conflict detection.',
    image: null,
    featured: false
  },
  {
    name: 'Vantry',
    category: 'full-stack',
    tags: ['Electron', 'TypeScript', 'WebSocket', 'PostgreSQL'],
    description: 'Lab PC fleet monitoring for academic institutions with RFID tap-in/out occupancy tracking, real-time telemetry dashboards, threshold alerting, and security posture monitoring.',
    image: null,
    featured: false
  },
  {
    name: 'Nereid',
    category: 'ai-assistants',
    tags: ['React', 'Python', 'Ollama'],
    description: 'React chat interface for Nereid, an AI assistant, with sidebar navigation and real-time chat powered by Ollama.',
    image: null,
    featured: false
  },
  {
    name: 'ResuMatch',
    category: 'productivity',
    tags: ['Python', 'Gemini', 'ATS'],
    description: 'AI resume analyzer that scores ATS alignment, flags missing keywords, rewrites bullet points for impact, and generates tailored cover letters.',
    image: null,
    featured: false
  },
  {
    name: 'Hermes',
    category: 'productivity',
    tags: ['Next.js', 'Express', 'PostgreSQL', 'OAuth2'],
    description: 'AI email assistant that summarizes threads, drafts tone-matched replies, classifies urgency, and translates emails in real time.',
    image: null,
    featured: false
  },
  {
    name: 'Threadly',
    category: 'full-stack',
    tags: ['React Native', 'Expo', 'TypeScript', 'Node.js'],
    description: 'Full-stack X (Twitter) clone with Clerk auth, real-time DMs, image-upload post composer, nested comments, Arcjet bot protection, and Cloudinary media.',
    image: null,
    featured: false
  },
  {
    name: 'DTR',
    category: 'full-stack',
    tags: ['React', 'Redux Toolkit', 'Prisma', 'PostgreSQL'],
    description: 'Digital Daily Time Record system with AM/PM clock-in, auto late detection, CS Form 48 PDF export, role-based access, and a live session timer.',
    image: null,
    featured: false
  },
  {
    name: 'OptimaHR',
    category: 'full-stack',
    tags: ['PHP', 'CodeIgniter', 'MySQL'],
    description: 'HR management system with role-based access, payroll and loan integration, attendance CSV import, recruitment pipeline, Kanban tasks, and analytics charts.',
    image: null,
    featured: false
  },
  {
    name: 'Ledger',
    category: 'full-stack',
    tags: ['React', 'Node.js', 'Prisma', 'PostgreSQL'],
    description: 'Institutional inventory and borrowing tracker with barcode/QR scanning, digital signatures, condition tracking, overdue alerts, and Google Sheets integration.',
    image: null,
    featured: false
  },
  {
    name: 'Docket',
    category: 'full-stack',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
    description: 'Document tracking and records management with incoming/outgoing workflows, bulk operations, digital signatures, unique tracking codes, and CSV export.',
    image: null,
    featured: false
  }
];
