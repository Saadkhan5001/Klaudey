export const CATEGORY_IDS = {
  MICROSOFT: "microsoft",
  CLOUD: "cloud",
  AI: "ai",
  MODERNIZATION: "modernization",
  QA: "qa",
  IT_INFRASTRUCTURE: "it-infrastructure",
} as const;

export type CategoryId = (typeof CATEGORY_IDS)[keyof typeof CATEGORY_IDS];

const CATEGORY_METADATA: Record<CategoryId, { name: string }> = {
  [CATEGORY_IDS.MICROSOFT]: { name: "Platform" },
  [CATEGORY_IDS.CLOUD]: { name: "Cloud & Infrastructure" },
  [CATEGORY_IDS.AI]: { name: "Artificial Intelligence" },
  [CATEGORY_IDS.MODERNIZATION]: { name: "Application Modernization" },
  [CATEGORY_IDS.QA]: { name: "Quality Assurance" },
  [CATEGORY_IDS.IT_INFRASTRUCTURE]: { name: "IT Infrastructure" },
};

export interface ServiceMetric {
  label: string;
  value: string;
}

export interface ServiceOffering {
  name: string;
  description: string;
  capabilities: string[];
}

export interface ServicePageContent {
  slug: string;
  title: string;
  categoryId: CategoryId;
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
  };
  summary: string;
  highlights: string[];
  services: ServiceOffering[];
  stats: ServiceMetric[];
  technologies: string[];
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
  };
}

export interface ServiceNavigationCategory {
  id: CategoryId;
  name: string;
  subcategories: {
    title: string;
    href: string;
    items: {
      label: string;
      href: string;
    }[];
  }[];
}

export const SERVICE_PAGES: ServicePageContent[] = [
  {
    slug: "microsoft-services",
    title: "Microsoft Services",
    categoryId: CATEGORY_IDS.MICROSOFT,
    hero: {
      eyebrow: "Platform Services",
      headline: "Empower every team with secure Microsoft solutions",
      description:
        "Deploy, secure, and optimize the Microsoft ecosystem to create high-performing experiences for employees and customers.",
    },
    summary:
      "From modern collaboration to enterprise resource planning, we configure Microsoft workloads so they stay compliant, resilient, and cost-efficient.",
    highlights: [
      "Tenant hardening and compliance dashboards",
      "Unified collaboration rollouts with structured change management",
      "Lifecycle governance for licenses, content, and security baselines",
    ],
    services: [
      {
        name: "Microsoft 365",
        description:
          "Assess, migrate, and optimize Microsoft 365 tenants for secure hybrid work.",
        capabilities: [
          "Zero trust-ready identity, device, and data policies",
          "License optimization with adoption roadmaps",
        ],
      },
      {
        name: "Microsoft Teams",
        description:
          "Curate Teams experiences with enterprise voice, compliant meetings, and app integrations.",
        capabilities: [
          "Operator Connect and Teams Phone deployments",
          "Lifecycle governance, templates, and approval workflows",
        ],
      },
      {
        name: "Cloud Storage",
        description:
          "Modernize SharePoint and OneDrive estates with structured information architecture.",
        capabilities: [
          "Document migration, deduplication, and retention policies",
          "Records management and DLP aligned to regulatory needs",
        ],
      },
      {
        name: "Identity & Security",
        description:
          "Implement Microsoft Entra, Defender, and Purview guardrails for proactive protection.",
        capabilities: [
          "Conditional Access design with privileged identity controls",
          "Insider risk, eDiscovery, and compliance automation",
        ],
      },
      {
        name: "Databases",
        description:
          "Engineer Azure SQL, Cosmos DB, and Dataverse environments built for governed scale.",
        capabilities: [
          "Data classification, encryption, and resilience patterns",
          "Performance tuning with automated insights and alerts",
        ],
      },
      {
        name: "Microsoft SharePoint",
        description:
          "Create engaging intranets, portals, and knowledge bases tailored to each business unit.",
        capabilities: [
          "Persona-led templates and UX accelerators",
          "Managed content services with analytics-backed governance",
        ],
      },
      {
        name: "Microsoft Dynamics 365",
        description:
          "Connect CRM, ERP, and Power Platform solutions that streamline frontline workflows.",
        capabilities: [
          "Industry-specific data models and business rules",
          "Automation with Power Platform, Copilot, and Azure integrations",
        ],
      },
    ],
    stats: [
      { label: "M365 tenants secured", value: "120+" },
      { label: "Average adoption uplift", value: "38%" },
      { label: "Support CSAT", value: "4.8 / 5" },
    ],
    technologies: [
      "Microsoft 365",
      "Teams",
      "SharePoint",
      "Power Platform",
      "Dynamics 365",
      "Defender",
      "Entra ID",
      "Azure SQL",
    ],
    cta: {
      title: "Get a tailored Microsoft roadmap",
      description:
        "Our architects map licensing, governance, and rollout activities for each business unit so you capture ROI faster.",
      buttonLabel: "Plan my rollout",
    },
  },
  {
    slug: "microsoft-azure",
    title: "Microsoft Azure",
    categoryId: CATEGORY_IDS.CLOUD,
    hero: {
      eyebrow: "Cloud & Infrastructure",
      headline: "Build a resilient Azure foundation",
      description:
        "Modern landing zones, strong guardrails, and automation-first operations keep Azure workloads secure without slowing innovation.",
    },
    summary:
      "We create Azure environments that bake in compliance, observability, and cost controls, then guide your teams through co-managed operations.",
    highlights: [
      "Enterprise-scale landing zone patterns",
      "FinOps dashboards with actionable guardrails",
      "24x7 managed services and incident response",
    ],
    services: [
      {
        name: "Azure Hosting",
        description:
          "Design and deploy reference architectures for mission-critical workloads.",
        capabilities: [
          "Container, PaaS, and VM blueprints with IaC",
          "Integrated networking, identity, and observability controls",
        ],
      },
      {
        name: "Azure Migration",
        description:
          "Accelerate datacenter exit or app re-hosting with minimal disruption.",
        capabilities: [
          "Discovery, dependency mapping, and right-sizing",
          "Cutover playbooks with rollback and validation gates",
        ],
      },
      {
        name: "Azure Implementation",
        description:
          "Stand up data, analytics, and integration workloads using best practices.",
        capabilities: [
          "Azure Data Factory, Synapse, and Event Hub pipelines",
          "API Management, Service Bus, and Logic Apps orchestration",
        ],
      },
      {
        name: "Azure Optimization",
        description:
          "Continuously tune cost, performance, and resiliency for existing estates.",
        capabilities: [
          "FinOps governance and automated policy enforcement",
          "Chaos testing, backup, and DR runbooks",
        ],
      },
      {
        name: "Azure Managed Services",
        description:
          "Co-manage environments with SRE rigor and proactive improvements.",
        capabilities: [
          "24x7 monitoring and incident management",
          "Patch, backup, and compliance automation via IaC",
        ],
      },
      {
        name: "Azure Security",
        description:
          "Deploy layered defenses across identity, data, and workloads.",
        capabilities: [
          "Sentinel SIEM/SOAR configuration and tuning",
          "Defender for Cloud posture management with policy-as-code",
        ],
      },
    ],
    stats: [
      { label: "Azure workloads governed", value: "350+" },
      { label: "Cost savings unlocked", value: "22% avg." },
      { label: "Mean time to detect", value: "< 7 min" },
    ],
    technologies: [
      "Azure Landing Zone",
      "Azure Arc",
      "Azure Monitor",
      "Bicep / Terraform",
      "Azure Data Factory",
      "Synapse",
      "Sentinel",
      "Azure Kubernetes Service",
    ],
    cta: {
      title: "Schedule an Azure architecture review",
      description:
        "Validate your landing zone, governance, and operational model with our certified Azure architects.",
      buttonLabel: "Book the review",
    },
  },
  {
    slug: "amazon-web-services",
    title: "Amazon Web Services",
    categoryId: CATEGORY_IDS.CLOUD,
    hero: {
      eyebrow: "Cloud & Infrastructure",
      headline: "Unlock speed and efficiency on AWS",
      description:
        "Migrate workloads, modernize architectures, and automate operations using proven AWS blueprints.",
    },
    summary:
      "With certified AWS engineers we deliver secure landing zones, frictionless migrations, and continuous optimization for any workload profile.",
    highlights: [
      "AWS Well-Architected and MAP delivery partner",
      "Landing zone automations with Control Tower and Organizations",
      "Cost, performance, and security managed as code",
    ],
    services: [
      {
        name: "AWS Compute",
        description:
          "Provision EC2, ECS, and EKS environments tailored to application needs.",
        capabilities: [
          "Infrastructure-as-code using CDK and Terraform",
          "Autoscaling strategies with observability baked in",
        ],
      },
      {
        name: "AWS Migration",
        description:
          "Plan and execute migrations using MAP funding and factory approaches.",
        capabilities: [
          "Portfolio discovery, wave planning, and testing",
          "Database refactoring with DMS and SCT accelerators",
        ],
      },
      {
        name: "AWS Implementation",
        description: "Deploy data, AI/ML, and integration workloads rapidly.",
        capabilities: [
          "Event-driven architectures with Lambda and EventBridge",
          "Streaming analytics on Kinesis, Glue, and Redshift",
        ],
      },
      {
        name: "AWS Optimization",
        description:
          "Improve efficiency through architecture reviews and FinOps playbooks.",
        capabilities: [
          "Savings plan and RI coverage automation",
          "Performance rightsizing with CloudWatch and Cost Explorer insights",
        ],
      },
      {
        name: "AWS Managed Services",
        description:
          "Extend your team with 24x7 SRE coverage backed by automation.",
        capabilities: [
          "Incident response with runbooks and guardrails",
          "Patch, backup, and compliance enforcement",
        ],
      },
      {
        name: "AWS Security",
        description:
          "Embed best-practice security controls across every account.",
        capabilities: [
          "Security Hub and GuardDuty tuning with automated remediation",
          "Identity federation, SCPs, and secrets management",
        ],
      },
    ],
    stats: [
      { label: "AWS accounts governed", value: "275+" },
      { label: "MAP migrations delivered", value: "40+" },
      { label: "Incidents auto-remediated", value: "82%" },
    ],
    technologies: [
      "AWS Control Tower",
      "AWS Organizations",
      "AWS Lambda",
      "Amazon EKS",
      "Amazon Aurora",
      "AWS Glue",
      "Amazon Redshift",
      "CloudWatch",
    ],
    cta: {
      title: "Request an AWS Well-Architected review",
      description:
        "Identify critical issues in cost, reliability, performance, and operations with a guided WAFR assessment.",
      buttonLabel: "Start the review",
    },
  },
  {
    slug: "private-cloud-on-prem",
    title: "Private (On Prem Data Centre solution)",
    categoryId: CATEGORY_IDS.CLOUD,
    hero: {
      eyebrow: "Cloud & Infrastructure",
      headline:
        "Build enterprise private cloud with software-defined architecture",
      description:
        "Deploy secure, scalable on-premises data centre solutions with modern VMware, SDDC, and hybrid cloud integration.",
    },
    summary:
      "We engineer private cloud environments using VMware, hyper-converged infrastructure, and software-defined architectures, seamlessly integrated with hybrid cloud services.",
    highlights: [
      "Software-defined data centre automation",
      "Hybrid cloud integration with Azure Stack & AWS Outposts",
      "AI-ready infrastructure with GPU acceleration",
    ],
    services: [
      {
        name: "VMware",
        description:
          "Enterprise virtualization platform for compute, storage, and networking.",
        capabilities: [
          "vSphere, vSAN, and NSX deployment and optimization",
          "Disaster recovery and high availability architectures",
        ],
      },
      {
        name: "Software define Data Centre (SDDC)",
        description:
          "Fully automated, policy-driven data centre infrastructure.",
        capabilities: [
          "Unified management of compute, storage, and networking",
          "Infrastructure-as-Code and API-driven orchestration",
        ],
      },
      {
        name: "HCI Solution for On Prem",
        description:
          "Hyper-converged infrastructure for simplified scaling and management.",
        capabilities: [
          "Integrated compute, storage, and networking in a single platform",
          "Linear scalability with predictable performance",
        ],
      },
      {
        name: "Azure On Prem Solutions",
        description:
          "Extend Azure services to your data centre with Azure Stack.",
        capabilities: [
          "Consistent hybrid application development",
          "Azure services on-premises with cloud connectivity",
        ],
      },
      {
        name: "AWS On Prem Solutions",
        description:
          "Run AWS infrastructure and services on-premises with AWS Outposts.",
        capabilities: [
          "Same AWS APIs, tools, and infrastructure on-premises",
          "Low-latency access to local systems and data",
        ],
      },
      {
        name: "Infrastructure for On Prem Ai Solutions",
        description:
          "GPU-accelerated infrastructure for AI/ML workloads in your data centre.",
        capabilities: [
          "High-performance compute clusters with NVIDIA GPUs",
          "AI model training and inference optimization",
        ],
      },
      {
        name: "Physical Data Centre Solutions",
        description:
          "Complete data centre design, build, and operations services.",
        capabilities: [
          "Power, cooling, and rack infrastructure design",
          "Physical security and environmental monitoring",
        ],
      },
    ],
    stats: [
      { label: "Private clouds deployed", value: "50+" },
      { label: "Uptime SLA achieved", value: "99.99%" },
      { label: "Infrastructure cost savings", value: "35% avg." },
    ],
    technologies: [
      "VMware vSphere",
      "VMware vSAN",
      "VMware NSX",
      "Azure Stack",
      "AWS Outposts",
      "NVIDIA GPU",
      "Hyper-converged Infrastructure",
      "Software-defined Storage",
    ],
    cta: {
      title: "Design your private cloud strategy",
      description:
        "Our architects assess your current infrastructure and deliver a modern on-premises solution tailored to your compliance and performance needs.",
      buttonLabel: "Start the assessment",
    },
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    categoryId: CATEGORY_IDS.AI,
    hero: {
      eyebrow: "Artificial Intelligence",
      headline: "Operationalize AI with measurable business value",
      description:
        "We translate strategic AI ambitions into production-grade solutions with safety, governance, and adoption plans baked in.",
    },
    summary:
      "From ideation to deployment, our AI studio merges data science, engineering, and change management so AI initiatives land successfully.",
    highlights: [
      "Responsible AI guardrails mapped to your governance model",
      "Cross-functional discovery workshops with prioritized use cases",
      "Pilot-to-scale playbooks with telemetry and adoption KPIs",
    ],
    services: [
      {
        name: "AI Consulting",
        description:
          "Co-design AI roadmaps, business cases, and operating models.",
        capabilities: [
          "Value discovery sessions with stakeholder alignment",
          "Responsible AI risk assessments and policy design",
        ],
      },
      {
        name: "AI Agents",
        description:
          "Create autonomous and co-pilot style agents for business users.",
        capabilities: [
          "Retrieval-augmented generation with secure data connectors",
          "Orchestration layers for approvals and escalations",
        ],
      },
      {
        name: "Generative AI",
        description:
          "Design multi-model generative workflows for content, code, or research.",
        capabilities: [
          "Prompt engineering with evaluation harnesses",
          "Hallucination detection, feedback loops, and analytics",
        ],
      },
      {
        name: "Machine Learning",
        description:
          "Build and operate ML pipelines that integrate with core systems.",
        capabilities: [
          "Feature store design, training, and deployment automation",
          "ML observability covering bias, drift, and performance",
        ],
      },
    ],
    stats: [
      { label: "AI use cases launched", value: "60+" },
      { label: "Models in production", value: "140+" },
      { label: "Responsible AI score", value: "100% policy coverage" },
    ],
    technologies: [
      "Azure AI Studio",
      "OpenAI",
      "AWS Bedrock",
      "Databricks",
      "Vertex AI",
      "LangChain",
      "Weights & Biases",
      "Hugging Face",
    ],
    cta: {
      title: "Book an AI discovery workshop",
      description:
        "Identify high-value use cases, required data assets, and the guardrails needed to deploy AI responsibly.",
      buttonLabel: "Reserve a workshop",
    },
  },
  {
    slug: "application-modernization",
    title: "Application Modernization",
    categoryId: CATEGORY_IDS.MODERNIZATION,
    hero: {
      eyebrow: "Application Modernization",
      headline: "Transform legacy systems into cloud-native products",
      description:
        "We assess, prioritize, and modernize applications using containerization, microservices, and automation-first delivery.",
    },
    summary:
      "Our modernization factory tackles technical debt while preserving mission-critical functionality so teams deliver faster with less risk.",
    highlights: [
      "Modernization scorecards for every application",
      "Product-centric operating models and DevSecOps pipelines",
      "Continuous testing and observability baked into releases",
    ],
    services: [
      {
        name: "Legacy Application Migration",
        description:
          "Stabilize and transition heritage workloads onto modern platforms.",
        capabilities: [
          "Assessment, pattern selection, and strangler design",
          "Data migration, performance tuning, and regression testing",
        ],
      },
      {
        name: "Application Modernization",
        description:
          "Refactor monoliths into modular, API-driven architectures.",
        capabilities: [
          "Domain-driven design and event storming workshops",
          "Microservices and serverless implementation accelerators",
        ],
      },
      {
        name: "Application Re-engineering",
        description:
          "Rebuild critical applications with modern UX and scalability patterns.",
        capabilities: [
          "Experience-led redesign with accessibility baked in",
          "Cloud-native data, caching, and integration layers",
        ],
      },
      {
        name: "Application Development",
        description:
          "Augment teams with agile pods delivering secure digital products.",
        capabilities: [
          "Backlog shaping, product analytics, and KPI scorecards",
          "CI/CD automation with security and quality gates",
        ],
      },
    ],
    stats: [
      { label: "Apps modernized", value: "250+" },
      { label: "Cycle time reduction", value: "45%" },
      { label: "Defect leakage", value: "< 1%" },
    ],
    technologies: [
      "Azure Kubernetes Service",
      "AWS Lambda",
      "Docker",
      "Kong / Apigee",
      "PostgreSQL",
      "Redis",
      "GitHub Actions",
      "Argo CD",
    ],
    cta: {
      title: "Request a modernization assessment",
      description:
        "Get a prioritized modernization roadmap, TCO model, and recommended landing zones for your application estate.",
      buttonLabel: "Assess my apps",
    },
  },
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure",
    categoryId: CATEGORY_IDS.IT_INFRASTRUCTURE,
    hero: {
      eyebrow: "IT Infrastructure",
      headline: "Build resilient on-prem and hybrid foundations",
      description:
        "Design, deploy, and manage physical servers, storage, networking, and workplace hardware with enterprise rigor.",
    },
    summary:
      "We engineer end-to-end infrastructure stacks, from data centre to edge, with security, scalability, and lifecycle governance baked in.",
    highlights: [
      "Standards-driven hardware architectures and rollout playbooks",
      "Vendor-neutral designs with lifecycle and cost controls",
      "Operational runbooks with monitoring, backup, and DR patterns",
    ],
    services: [
      {
        name: "Physical Servers",
        description: "Plan and deploy server estates tuned for performance and resilience.",
        capabilities: [
          "Rack, tower, and blade architectures with redundancy",
          "Capacity planning, firmware baselines, and patch automation",
        ],
      },
      {
        name: "Physical Storage",
        description: "Design storage topologies for demanding workloads.",
        capabilities: [
          "SAN/NAS/HCI solutions with tiering and data protection",
          "Backup, archive, and replication strategies with RPO/RTO targets",
        ],
      },
      {
        name: "Networking Devices",
        description: "Implement secure, performant network fabrics.",
        capabilities: [
          "LAN/WAN/SD-WAN architectures with segmentation",
          "Zero trust-aligned access, firewalls, and monitoring",
        ],
      },
      {
        name: "Computer and Accessories",
        description: "Standardize end-user hardware for reliable operations.",
        capabilities: [
          "Lifecycle services for laptops, desktops, and peripherals",
          "Imaging, asset tracking, and support playbooks",
        ],
      },
    ],
    stats: [
      { label: "Sites modernized", value: "80+" },
      { label: "Hardware uptime", value: "99.98%" },
      { label: "Cost reduction", value: "18% avg." },
    ],
    technologies: [
      "Dell / HPE / Lenovo",
      "VMware vSphere",
      "Cisco / Aruba / Fortinet",
      "SAN / NAS / HCI platforms",
      "MEC and edge stacks",
      "Backup & DR suites",
    ],
    cta: {
      title: "Plan your next refresh",
      description:
        "Get a modern infrastructure blueprint with BOM, rollout plan, and operational guardrails tailored to your sites.",
      buttonLabel: "Get my plan",
    },
  },
  {
    slug: "quality-assurance",
    title: "Quality Assurance",
    categoryId: CATEGORY_IDS.QA,
    hero: {
      eyebrow: "Quality Assurance",
      headline: "Deliver flawless experiences across every channel",
      description:
        "Embed automated, intelligent quality practices across web, mobile, immersive, and gaming products.",
    },
    summary:
      "Our QA engineers pair scripted, exploratory, and AI-assisted testing with robust tooling so releases stay fast and reliable.",
    highlights: [
      "Shift-left automation with pipeline-ready assets",
      "Device labs and cloud farm coverage across regions",
      "Real-time quality dashboards for stakeholders",
    ],
    services: [
      {
        name: "Website Applications",
        description:
          "Full-stack testing for responsive and component-driven web apps.",
        capabilities: [
          "Accessibility, performance, and SEO validation",
          "Contract, API, and visual regression suites",
        ],
      },
      {
        name: "Mobile Application Android & iOS",
        description:
          "Device-specific automation combined with beta management support.",
        capabilities: [
          "Native, hybrid, and cross-platform validation",
          "TestFlight, Play Console, and OTA release readiness",
        ],
      },
      {
        name: "Gaming",
        description:
          "Functional, multiplayer, and compliance testing for console and cloud games.",
        capabilities: [
          "Load and latency simulation for multiplayer titles",
          "Localization and certification readiness",
        ],
      },
      {
        name: "AR/VR",
        description:
          "Immersive QA covering devices, motion, and user comfort metrics.",
        capabilities: [
          "Spatial interaction, tracking, and guardian validation",
          "Content moderation and privacy conformance",
        ],
      },
    ],
    stats: [
      { label: "Automation coverage", value: "85%" },
      { label: "Devices under test", value: "420+" },
      { label: "Release acceleration", value: "2x faster" },
    ],
    technologies: [
      "Playwright",
      "Appium",
      "BrowserStack",
      "TestRail",
      "JMeter",
      "Unity Test Framework",
      "XR Interaction Toolkit",
      "Grafana",
    ],
    cta: {
      title: "Design a QA acceleration plan",
      description:
        "Meet with our QA leads to map automation priorities, tooling, and success metrics for your next release train.",
      buttonLabel: "Plan my QA strategy",
    },
  },
];

export const SERVICE_NAVIGATION: ServiceNavigationCategory[] = (
  Object.values(CATEGORY_IDS) as CategoryId[]
).map((categoryId) => ({
  id: categoryId,
  name: CATEGORY_METADATA[categoryId].name,
  subcategories: SERVICE_PAGES.filter(
    (page) => page.categoryId === categoryId
  ).map((page) => ({
    title: page.title,
    href: `/services/${page.slug}`,
    items: page.services.map((service) => ({
      label: service.name,
      href: "#",
    })),
  })),
}));

const PAGE_LOOKUP = SERVICE_PAGES.reduce<Record<string, ServicePageContent>>(
  (acc, page) => {
    acc[page.slug] = page;
    return acc;
  },
  {}
);

export const getServicePageBySlug = (slug: string | undefined) =>
  slug ? PAGE_LOOKUP[slug] : undefined;
