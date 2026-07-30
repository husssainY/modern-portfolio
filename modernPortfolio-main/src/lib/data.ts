export const portfolioData = {
    name: "Munavar Hussain",
    initials: "MH",
    title: "Gen AI Developer",
    tagline: "Building cutting-edge Generative and Agentic AI solutions that bridge creative vision with real-world impact",
    email: "munavarhussain@outlook.com",
    phone: "+91-98421-02501",
    linkedin: "https://www.linkedin.com/in/mohamed-munavar-hussain-y-876620206",
    github: "https://github.com/husssainY/",

    about: {
        lead: "AI professional with 2 years of experience building cutting-edge Generative and Agentic AI solutions that bridge creative vision with real-world impact.",
        paragraphs: [
            "Currently working at WNS - VURAM (Part of Capgemini) as an AI Developer (Solutions Consultant), I specialize in developing intelligent agents, solving complex technical challenges, and driving innovation from concept to deployment.",
            "Known for a collaborative mindset and a strong focus on delivering scalable, meaningful AI applications. Actively seeking opportunities within forward-thinking teams where I can push the boundaries of AI and grow as a key contributor to transformative technologies."
        ]
    },

    stats: [
        { number: "2+", label: "Years Exp" },
        { number: "5+", label: "AI Projects" },
        { number: "90%+", label: "Accuracy" },
    ],

    education: {
        degree: "Bachelor of Technology (B.Tech)",
        institution: "Crescent University, Chennai",
        period: "Major: Computer Science & Engineering"
    },

    experience: [
        {
            title: "AI Developer (Solutions Consultant)",
            company: "WNS - VURAM (Part of Capgemini)",
            period: "Aug 2024 - Present",
            highlights: [
                {
                    title: "Bank Reconciliation — Westpac Group Australia",
                    description: "Designed and implemented an AI-infused Bank Reconciliation solution using Python, combining rule-based logic with intelligent automation to streamline financial data matching and exception handling for high-volume transaction processing."
                },
                {
                    title: "AgentOps — Enterprise AI Operations Platform",
                    description: "Engineered a comprehensive enterprise platform for managing production AI agents, unifying observability, continuous evaluation, and guardrails governance. Implemented multi-LLM judging workflows and automated Responsible AI checks."
                },
                {
                    title: "Process Mining — Code Interpreter Agent",
                    description: "Developed a Code Interpreter Agent for Process Mining App using LangChain framework. Enables users to extract insights from Excel data through natural language queries powered by LLM integration."
                },
                {
                    title: "Document Extraction IDP — AWS Bedrock",
                    description: "Built an automated serverless agent using AWS Lambda and S3 that classifies uploaded documents and extracts structured data using OCR, ML models, and template matching. Achieved 90%+ accuracy handling thousands of documents per hour."
                },
                {
                    title: "Multi-Agent Energy Management — Supervisor Agents",
                    description: "Developed a comprehensive multi-agent architecture on AWS Cloud featuring specialized agents with integrated knowledge bases, Lambda functions, OpenSearch for contextual search, and DynamoDB for real-time data management."
                }
            ]
        },
        {
            title: "Data Science Intern",
            company: "TechVolt Software Pvt Ltd",
            period: "Aug 2023 - Oct 2023",
            highlights: [
                {
                    title: "Data Analytics & Visualization",
                    description: "Conducted advanced data analysis using SQL, Python, and visualization tools (Power BI/Tableau) to uncover key trends and performance drivers."
                },
                {
                    title: "Business Intelligence Reporting",
                    description: "Delivered data-driven insights through dashboards and reports, enabling stakeholders to make informed business decisions and track KPIs effectively."
                }
            ]
        }
    ],

    projectCategories: ["AI Agents", "Enterprise AI", "Data Science"],

    projects: [
        {
            slug: "agentops-platform",
            category: "Enterprise AI",
            title: "AgentOps — Enterprise AI Operations Platform",
            description: "Engineered a comprehensive enterprise platform for managing production AI agents, unifying observability, continuous evaluation, and guardrails governance into a single control plane. Implemented multi-LLM judging workflows and automated Responsible AI checks to evaluate reasoning quality, prompt safety, and factual grounding. Architected a scalable relational data model supporting A/B testing, end-to-end execution traces, and real-time alerting for token costs and latency.",
            tags: ["Enterprise", "AI Agents", "LLM", "Observability"],
            tech: ["Python", "LangChain", "Multi-LLM", "AWS", "PostgreSQL"],
            gradient: "from-violet-600/20 to-purple-600/20",
            image: "/agentops.png"
        },
        {
            slug: "bank-reconciliation",
            category: "Enterprise AI",
            title: "Bank Reconciliation — Westpac Group Australia",
            description: "Designed and implemented an AI-infused Bank Reconciliation solution for Westpac Group (Australia) using Python, combining rule-based logic with intelligent automation to streamline financial data matching and exception handling. Integrated with enterprise systems for high-volume transaction processing and audit-ready reporting.",
            tags: ["FinTech", "AI", "Python", "Enterprise"],
            tech: ["Python", "Rule-based AI", "Enterprise Integration", "AWS"],
            gradient: "from-purple-600/20 to-fuchsia-600/20",
            image: "/bank-recon.png"
        },
        {
            slug: "document-extraction-idp",
            category: "AI Agents",
            title: "Document Extraction IDP — AWS Bedrock",
            description: "Developed an automated serverless agent using AWS Lambda and S3 that classifies uploaded documents (invoices, contracts, forms) and extracts structured data using OCR, ML models, and template matching. Achieved 90%+ accuracy with event-driven processing pipeline handling thousands of documents per hour.",
            tags: ["Serverless", "OCR", "AWS", "Document AI"],
            tech: ["AWS Lambda", "S3", "AWS Bedrock", "OCR", "ML Models"],
            gradient: "from-fuchsia-600/20 to-pink-600/20",
            image: "/doc-extraction.png"
        },
        {
            slug: "multi-agent-energy",
            category: "AI Agents",
            title: "Multi-Agent Energy Management — Supervisor Agents",
            description: "Developed a comprehensive multi-agent architecture on AWS Cloud featuring specialized agents with integrated knowledge bases. Implemented serverless workflows using Lambda functions, OpenSearch for contextual search, and DynamoDB for real-time energy consumption and customer support data management.",
            tags: ["Multi-Agent", "AWS", "Serverless", "AI"],
            tech: ["AWS Bedrock", "Lambda", "OpenSearch", "DynamoDB", "Python"],
            gradient: "from-indigo-600/20 to-violet-600/20",
            image: "/energy-mgmt.png"
        },
        {
            slug: "process-mining-agent",
            category: "AI Agents",
            title: "Process Mining — Code Interpreter Agent",
            description: "Developed and implemented a Code Interpreter Agent for Process Mining App and Dashboard accelerator using LangChain framework. Enables users to extract insights and information from Excel data through natural language queries powered by LLM integration.",
            tags: ["LangChain", "Code Interpreter", "LLM", "Process Mining"],
            tech: ["LangChain", "Python", "LLM", "Excel Integration"],
            gradient: "from-purple-500/20 to-violet-500/20",
            image: "/process-mining.png"
        },
        {
            slug: "data-analytics-internship",
            category: "Data Science",
            title: "Data Analytics & BI Dashboards — TechVolt",
            description: "Conducted advanced data analysis using SQL, Python, and visualization tools (Power BI/Tableau) to uncover key trends and performance drivers. Delivered data-driven insights through dashboards and reports, enabling stakeholders to make informed business decisions and track KPIs effectively.",
            tags: ["Data Analytics", "SQL", "Power BI", "Tableau"],
            tech: ["SQL", "Python", "Power BI", "Tableau"],
            gradient: "from-violet-500/20 to-fuchsia-500/20",
            image: "/analytics.png"
        }
    ],

    skills: {
        aiml: ["LangChain", "AutoGen", "LangGraph", "CrewAI", "Multi-Agent Systems", "LLM Integration", "Prompt Engineering", "RAG"],
        cloud: ["AWS Lambda", "S3", "DynamoDB", "OpenSearch", "AWS Bedrock", "Serverless", "Event-Driven Architecture"],
        development: ["Python", "OCR", "Document Processing", "ML Integration", "MCP", "Rule-based Logic"],
        data: ["SQL", "Power BI", "Tableau", "Data Analytics", "Process Mining"]
    },

    certifications: [
        {
            title: "Gen AI for Everyone",
            description: "DeepLearning.AI — Comprehensive course on Generative AI fundamentals and applications"
        },
        {
            title: "LangChain, CrewAI & AutoGen",
            description: "Advanced agentic AI frameworks for building production-ready AI agents"
        },
        {
            title: "Python — Basic to Advanced",
            description: "Coursera — Complete Python programming guide from fundamentals to advanced topics"
        },
        {
            title: "LangChain — Build GenAI Apps",
            description: "Coursera (Intermediate Level) — Building production GenAI applications with LangChain"
        },
        {
            title: "Data Analytics — Google",
            description: "Coursera — Google's professional data analytics certification"
        },
        {
            title: "Data Analytics Essentials",
            description: "Coursera — Foundational data analytics skills and methodologies"
        },
        {
            title: "Data Analytics — Accenture",
            description: "Virtual Experience — Real-world data analytics experience with Accenture"
        }
    ],

    achievements: [
        {
            title: "Client Engagement Success",
            description: "Improved approval rates by 15% through AI-driven automation solutions for global clients"
        },
        {
            title: "Process Optimization",
            description: "Reduced processing time by 20% through intelligent automation and scalable Bedrock-based agents"
        },
        {
            title: "Quality Assurance",
            description: "Ensured quality, compliance, and measurable business impact across all client projects"
        }
    ],

    research: [
        {
            title: "Artificial Intelligence Workshop",
            institution: "MIT — Madras Institute of Technology",
            date: "May 22, 2022"
        },
        {
            title: "Aeromodelling & Rocket Propulsion Workshop",
            institution: "HYPSTUMA",
            date: "Aug 6–7, 2022"
        }
    ]
};

export type PortfolioData = typeof portfolioData;
