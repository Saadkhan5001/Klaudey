export const CATEGORY_IDS = {
  MICROSOFT: "microsoft",
  CLOUD: "cloud",
  AI: "ai",
  MODERNIZATION: "modernization",
  QA: "qa",
  IT_INFRASTRUCTURE: "it-infrastructure",
  MANAGED_SERVICES: "managed-services",
} as const;

export type CategoryId = (typeof CATEGORY_IDS)[keyof typeof CATEGORY_IDS];

const CATEGORY_METADATA: Record<CategoryId, { name: string }> = {
  [CATEGORY_IDS.MICROSOFT]: { name: "Platform" },
  [CATEGORY_IDS.CLOUD]: { name: "Cloud & Infrastructure" },
  [CATEGORY_IDS.AI]: { name: "Artificial Intelligence" },
  [CATEGORY_IDS.MODERNIZATION]: { name: "Application Modernization" },
  [CATEGORY_IDS.QA]: { name: "Quality Assurance" },
  [CATEGORY_IDS.IT_INFRASTRUCTURE]: { name: "IT Infrastructure" },
  [CATEGORY_IDS.MANAGED_SERVICES]: { name: "Managed Services" },
};

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

export const SERVICE_NAVIGATION: ServiceNavigationCategory[] = [
  {
    id: CATEGORY_IDS.MICROSOFT,
    name: CATEGORY_METADATA[CATEGORY_IDS.MICROSOFT].name,
    subcategories: [
      {
        title: "Microsoft Services",
        href: "/services/microsoft-platform",
        items: [
          { label: "Microsoft 365", href: "#" },
          { label: "Microsoft Teams", href: "#" },
          { label: "Cloud Storage", href: "#" },
          { label: "Identity & Security", href: "#" },
          { label: "Databases", href: "#" },
          { label: "Microsoft SharePoint", href: "#" },
          { label: "Microsoft Dynamics 365", href: "#" },
        ],
      },
    ],
  },
  {
    id: CATEGORY_IDS.CLOUD,
    name: CATEGORY_METADATA[CATEGORY_IDS.CLOUD].name,
    subcategories: [
      {
        title: "Microsoft Azure",
        href: "/services/microsoft-azure",
        items: [
          { label: "Azure Hosting", href: "#" },
          { label: "Azure Migration", href: "#" },
          { label: "Azure Implementation", href: "#" },
          { label: "Azure Optimization", href: "#" },
          { label: "Azure Managed Services", href: "#" },
          { label: "Azure Security", href: "#" },
        ],
      },
      {
        title: "Amazon Web Services",
        href: "/services/amazon-web-services",
        items: [
          { label: "AWS Compute", href: "#" },
          { label: "AWS Migration", href: "#" },
          { label: "AWS Implementation", href: "#" },
          { label: "AWS Optimization", href: "#" },
          { label: "AWS Managed Services", href: "#" },
          { label: "AWS Security", href: "#" },
        ],
      },
      {
        title: "Private (On Prem Data Centre solution)",
        href: "/services/private-cloud-on-prem",
        items: [
          { label: "VMware", href: "#" },
          { label: "Software define Data Centre (SDDC)", href: "#" },
          { label: "HCI Solution for On Prem", href: "#" },
          { label: "Azure On Prem Solutions", href: "#" },
          { label: "AWS On Prem Solutions", href: "#" },
          { label: "Infrastructure for On Prem Ai Solutions", href: "#" },
          { label: "Physical Data Centre Solutions", href: "#" },
        ],
      },
    ],
  },
  {
    id: CATEGORY_IDS.AI,
    name: CATEGORY_METADATA[CATEGORY_IDS.AI].name,
    subcategories: [
      {
        title: "Artificial Intelligence",
        href: "/services/artificial-intelligence",
        items: [
          { label: "AI Consulting", href: "#" },
          { label: "AI Agents", href: "#" },
          { label: "Generative AI", href: "#" },
          { label: "Machine Learning", href: "#" },
        ],
      },
    ],
  },
  {
    id: CATEGORY_IDS.MODERNIZATION,
    name: CATEGORY_METADATA[CATEGORY_IDS.MODERNIZATION].name,
    subcategories: [
      {
        title: "Application Modernization",
        href: "/services/application-modernization",
        items: [
          { label: "Legacy Application Migration", href: "#" },
          { label: "Application Modernization", href: "#" },
          { label: "Application Re-engineering", href: "#" },
          { label: "Application Development", href: "#" },
        ],
      },
    ],
  },
  {
    id: CATEGORY_IDS.IT_INFRASTRUCTURE,
    name: CATEGORY_METADATA[CATEGORY_IDS.IT_INFRASTRUCTURE].name,
    subcategories: [
      {
        title: "IT Infrastructure",
        href: "/services/it-infrastructure",
        items: [
          { label: "Physical Servers", href: "#" },
          { label: "Physical Storage", href: "#" },
          { label: "Networking Devices", href: "#" },
          { label: "Computer and Accessories", href: "#" },
        ],
      },
    ],
  },
  {
    id: CATEGORY_IDS.QA,
    name: CATEGORY_METADATA[CATEGORY_IDS.QA].name,
    subcategories: [
      {
        title: "Quality Assurance",
        href: "/services/quality-assurance",
        items: [
          { label: "Website Applications", href: "#" },
          { label: "Mobile Application Android & iOS", href: "#" },
          { label: "Gaming", href: "#" },
          { label: "AR/VR", href: "#" },
        ],
      },
    ],
  },
  {
    id: CATEGORY_IDS.MANAGED_SERVICES,
    name: CATEGORY_METADATA[CATEGORY_IDS.MANAGED_SERVICES].name,
    subcategories: [
      {
        title: "Managed IT Services",
        href: "/services/managed-it-services",
        items: [
          { label: "Help Desk Support", href: "#" },
          { label: "Server & Network Management", href: "#" },
          { label: "Endpoint Management", href: "#" },
        ],
      },
      {
        title: "Managed Cybersecurity",
        href: "/services/managed-cybersecurity",
        items: [
          { label: "SOC as a Service", href: "#" },
          { label: "Vulnerability Management", href: "#" },
          { label: "Identity and Access Management", href: "#" },
        ],
      },
      {
        title: "Managed DevOps",
        href: "/services/managed-devops",
        items: [
          { label: "CI/CD Pipeline Management", href: "#" },
          { label: "Infrastructure Automation", href: "#" },
          { label: "Container Services", href: "#" },
        ],
      },
      {
        title: "NOC Services",
        href: "/services/noc-services",
        items: [
          { label: "Network Monitoring", href: "#" },
          { label: "Incident Management", href: "#" },
          { label: "Performance Optimization", href: "#" },
        ],
      },
    ],
  },
];
