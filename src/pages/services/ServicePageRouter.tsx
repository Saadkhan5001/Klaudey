import NotFound from "@/pages/not-found";
import { SERVICE_NAVIGATION } from "@/data/serviceCategories";
import ManagedItServicesPage from "@/pages/services/ManagedItServicesPage";
import ManagedCybersecurityPage from "@/pages/services/ManagedCybersecurityPage";
import ManagedDevOpsPage from "@/pages/services/ManagedDevOpsPage";
import NocServicesPage from "@/pages/services/NocServicesPage";
import MicrosoftAzurePage from "@/pages/services/MicrosoftAzurePage";
import AmazonWebServicesPage from "@/pages/services/AmazonWebServicesPage";
import PrivateCloudOnPremPage from "@/pages/services/PrivateCloudOnPremPage";
import MicrosoftPlatformPage from "@/pages/services/MicrosoftPlatformPage";
import ArtificialIntelligencePage from "@/pages/services/ArtificialIntelligencePage";
import ApplicationModernizationPage from "@/pages/services/ApplicationModernizationPage";
import ItInfrastructurePage from "@/pages/services/ItInfrastructurePage";
import QualityAssurancePage from "@/pages/services/QualityAssurancePage";

interface ServicePageRouterProps {
  slug?: string;
}

const SERVICE_PAGE_OVERRIDES: Record<string, React.ComponentType> = {
  "managed-it-services": ManagedItServicesPage,
  "managed-cybersecurity": ManagedCybersecurityPage,
  "managed-devops": ManagedDevOpsPage,
  "noc-services": NocServicesPage,
  "microsoft-azure": MicrosoftAzurePage,
  "amazon-web-services": AmazonWebServicesPage,
  "private-cloud-on-prem": PrivateCloudOnPremPage,
  "microsoft-platform": MicrosoftPlatformPage,
  "artificial-intelligence": ArtificialIntelligencePage,
  "application-modernization": ApplicationModernizationPage,
  "it-infrastructure": ItInfrastructurePage,
  "quality-assurance": QualityAssurancePage,
};

const SERVICE_ROUTE_PREFIX = "/services/";

const extractSlug = (href: string) =>
  href.startsWith(SERVICE_ROUTE_PREFIX)
    ? href.slice(SERVICE_ROUTE_PREFIX.length)
    : "";

const warnOnMissingServicePages = () => {
  if (import.meta.env?.MODE !== "development") {
    return;
  }

  const knownSlugs = new Set(Object.keys(SERVICE_PAGE_OVERRIDES));
  const missingSlugs = SERVICE_NAVIGATION.flatMap((category) =>
    category.subcategories
      .map((subcategory) => extractSlug(subcategory.href))
      .filter((slug) => slug && !knownSlugs.has(slug))
  );

  if (missingSlugs.length > 0) {
    console.warn(
      "[Services] Missing custom pages for slugs:",
      Array.from(new Set(missingSlugs))
    );
  }
};

warnOnMissingServicePages();

export default function ServicePageRouter({ slug }: ServicePageRouterProps) {
  const OverridePage = slug ? SERVICE_PAGE_OVERRIDES[slug] : undefined;

  if (OverridePage) {
    return <OverridePage />;
  }

  return <NotFound />;
}
