import { memo, useCallback, useMemo, useReducer, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  CATEGORY_IDS,
  SERVICE_NAVIGATION,
  type ServiceNavigationCategory,
} from "@/data/serviceCategories";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface HeaderProps {
  onContactClick: () => void;
}

interface Industry {
  name: string;
  description: string;
}

type State = {
  mobileMenuOpen: boolean;
  activeCategory: string;
  mobileServicesOpen: boolean;
  mobileIndustriesOpen: boolean;
  mobileCategoryOpen: string;
  cloudDeploymentType: "public" | "private";
  mobileCloudDeploymentType: "public" | "private";
};

type Action =
  | { type: "TOGGLE_MOBILE_MENU" }
  | { type: "SET_ACTIVE_CATEGORY"; payload: string }
  | { type: "TOGGLE_MOBILE_SERVICES" }
  | { type: "TOGGLE_MOBILE_INDUSTRIES" }
  | { type: "TOGGLE_MOBILE_CATEGORY"; payload: string }
  | { type: "CLOSE_ALL_MOBILE" }
  | { type: "SET_CLOUD_DEPLOYMENT_TYPE"; payload: "public" | "private" }
  | { type: "SET_MOBILE_CLOUD_DEPLOYMENT_TYPE"; payload: "public" | "private" };

type ServiceCategory = ServiceNavigationCategory;
type ServiceItem =
  ServiceNavigationCategory["subcategories"][number]["items"][number];

// ============================================================================
// CONSTANTS
// ============================================================================

const INDUSTRIES: Industry[] = [
  {
    name: "Healthcare",
    description:
      "Digital transformation for healthcare providers and medical institutions",
  },
  {
    name: "Finance & Banking",
    description:
      "Secure cloud solutions for financial services and banking operations",
  },
  {
    name: "Retail & E-commerce",
    description: "Scalable platforms for modern retail and online commerce",
  },
  {
    name: "Manufacturing",
    description: "Smart manufacturing solutions and supply chain optimization",
  },
  {
    name: "Education",
    description: "Cloud-based learning platforms and educational technology",
  },
  {
    name: "Technology & SaaS",
    description: "Infrastructure and tools for tech companies and startups",
  },
  {
    name: "Real Estate",
    description: "Property management and real estate technology solutions",
  },
  {
    name: "Professional Services",
    description: "Business solutions for consulting, legal, and service firms",
  },
];

const initialState: State = {
  mobileMenuOpen: false,
  activeCategory: CATEGORY_IDS.MICROSOFT,
  mobileServicesOpen: false,
  mobileIndustriesOpen: false,
  mobileCategoryOpen: "",
  cloudDeploymentType: "public",
  mobileCloudDeploymentType: "public",
};

const sortItemsAlphabetically = (items: ServiceItem[]): ServiceItem[] => {
  return [...items].sort((a, b) => a.label.localeCompare(b.label));
};

function headerReducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_MOBILE_MENU":
      return { ...state, mobileMenuOpen: !state.mobileMenuOpen };
    case "SET_ACTIVE_CATEGORY":
      return { ...state, activeCategory: action.payload };
    case "TOGGLE_MOBILE_SERVICES":
      return { ...state, mobileServicesOpen: !state.mobileServicesOpen };
    case "TOGGLE_MOBILE_INDUSTRIES":
      return { ...state, mobileIndustriesOpen: !state.mobileIndustriesOpen };
    case "TOGGLE_MOBILE_CATEGORY":
      return {
        ...state,
        mobileCategoryOpen:
          state.mobileCategoryOpen === action.payload ? "" : action.payload,
      };
    case "CLOSE_ALL_MOBILE":
      return {
        ...state,
        mobileMenuOpen: false,
        mobileServicesOpen: false,
        mobileIndustriesOpen: false,
        mobileCategoryOpen: "",
      };
    case "SET_CLOUD_DEPLOYMENT_TYPE":
      return { ...state, cloudDeploymentType: action.payload };
    case "SET_MOBILE_CLOUD_DEPLOYMENT_TYPE":
      return { ...state, mobileCloudDeploymentType: action.payload };
    default:
      return state;
  }
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

const DesktopServicesMenu = memo(
  ({
    activeCategory,
    onCategoryHover,
    cloudDeploymentType,
    onCloudTypeChange,
  }: {
    activeCategory: string;
    onCategoryHover: (id: string) => void;
    cloudDeploymentType: "public" | "private";
    onCloudTypeChange: (type: "public" | "private") => void;
  }) => {
    const categories = useMemo(() => SERVICE_NAVIGATION, []);
    const activeCat = useMemo(
      () => categories.find((c) => c.id === activeCategory) ?? categories[0],
      [categories, activeCategory]
    );

    const cloudPublicSubcategories = useMemo(() => {
      const cloudCategory = categories.find((c) => c.id === CATEGORY_IDS.CLOUD);
      return (
        cloudCategory?.subcategories.filter(
          (subcat) => subcat.title !== "Private (On Prem Data Centre solution)"
        ) || []
      );
    }, [categories]);

    const cloudPrivateSubcategories = useMemo(
      () => [
        {
          title: "Private (On Prem Data Centre solution)",
          href: "/services/private-cloud-on-prem",
          items: sortItemsAlphabetically([
            { label: "AWS On Prem Solutions", href: "#" },
            { label: "Azure On Prem Solutions", href: "#" },
            { label: "HCI Solution for On Prem", href: "#" },
            { label: "Infrastructure for On Prem Ai Solutions", href: "#" },
            { label: "Physical Data Centre Solutions", href: "#" },
            { label: "Software define Data Centre (SDDC)", href: "#" },
            { label: "VMware", href: "#" },
          ]),
        },
      ],
      []
    );

    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-base font-medium rounded-md px-4 py-2 transition-colors hover:bg-[#3d8bff] hover:text-white focus:bg-[#3d8bff] focus:text-white data-[state=open]:bg-[#3d8bff] data-[state=open]:text-white data-[state=open]:hover:bg-[#3d8bff] data-[state=open]:focus:bg-[#3d8bff]">
          Services
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-screen max-w-screen-2xl mx-auto p-8 md:p-12">
            <div className="grid grid-cols-12 gap-12">
              {/* Left: Categories */}
              <div className="col-span-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                  Categories
                </p>
                <ul className="space-y-1">
                  {categories.map((category) => {
                    const isActive = activeCategory === category.id;
                    return (
                      <li key={category.id}>
                        <button
                          onMouseEnter={() => onCategoryHover(category.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 flex items-center justify-between group ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-[#3d8bff]"
                          }`}
                        >
                          <span>{category.name}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isActive
                                ? "rotate-180"
                                : "group-hover:translate-x-1"
                            }`}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Right: Active Category Content */}
              <div className="col-span-9">
                {activeCat.id === CATEGORY_IDS.CLOUD ? (
                  <>
                    {/* Public/Private selector */}
                    <div className="mb-8">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                        Deployment Type
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => onCloudTypeChange("public")}
                          className={`px-4 py-2 rounded-lg font-medium transition-all ${
                            cloudDeploymentType === "public"
                              ? "bg-primary text-primary-foreground"
                              : "bg-accent/50 hover:bg-accent text-foreground"
                          }`}
                        >
                          Public
                        </button>
                        <button
                          onClick={() => onCloudTypeChange("private")}
                          className={`px-4 py-2 rounded-lg font-medium transition-all ${
                            cloudDeploymentType === "private"
                              ? "bg-primary text-primary-foreground"
                              : "bg-accent/50 hover:bg-accent text-foreground"
                          }`}
                        >
                          Private
                        </button>
                      </div>
                    </div>

                    {/* Subcategories based on selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                      {(cloudDeploymentType === "public"
                        ? cloudPublicSubcategories
                        : cloudPrivateSubcategories
                      ).map((subcat) => (
                        <div key={subcat.title}>
                          <Link href={subcat.href} className="block mb-6 group">
                            <h3 className="text-xl font-semibold text-primary group-hover:underline underline-offset-4 transition-all">
                              {subcat.title}
                            </h3>
                          </Link>

                          <ul className="space-y-4">
                            {sortItemsAlphabetically(subcat.items).map(
                              (item) => (
                                <li key={item.label}>
                                  <span className="text-base text-muted-foreground leading-relaxed">
                                    {item.label}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  // Existing rendering for other categories
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {activeCat.subcategories.map((subcat) => (
                      <div key={subcat.title}>
                        <Link href={subcat.href} className="block mb-6 group">
                          <h3 className="text-xl font-semibold text-primary group-hover:underline underline-offset-4 transition-all">
                            {subcat.title}
                          </h3>
                        </Link>

                        <ul className="space-y-4">
                          {sortItemsAlphabetically(subcat.items).map((item) => (
                            <li key={item.label}>
                              <span className="text-base text-muted-foreground leading-relaxed">
                                {item.label}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }
);

DesktopServicesMenu.displayName = "DesktopServicesMenu";

const DesktopIndustriesMenu = memo(() => {
  const industries = useMemo(
    () => [
      ...INDUSTRIES,
      {
        name: "Government & Public Sector",
        description:
          "Secure, compliant cloud solutions for government agencies and public institutions",
      },
    ],
    []
  );

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-base font-medium rounded-md px-4 py-2 transition-colors hover:bg-[#3d8bff] hover:text-white focus:bg-[#3d8bff] focus:text-white data-[state=open]:bg-[#3d8bff] data-[state=open]:text-white data-[state=open]:hover:bg-[#3d8bff] data-[state=open]:focus:bg-[#3d8bff]">
        Industries
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-screen max-w-screen-2xl mx-auto p-8 md:p-12">
          {/* Perfect 3×3 grid on lg+ screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group rounded-2xl border bg-card/50 p-8 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-sm"
              >
                <h4 className="text-xl font-semibold text-primary mb-3 group-hover:underline underline-offset-4 transition-all">
                  {industry.name}
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
});

DesktopIndustriesMenu.displayName = "DesktopIndustriesMenu";

const MobileAccordion = memo(
  ({
    title,
    isOpen,
    onToggle,
    testId,
    children,
  }: {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    testId: string;
    children: React.ReactNode;
  }) => (
    <div className="space-y-2">
      <button
        onClick={onToggle}
        className="text-base font-semibold w-full text-left flex items-center justify-between"
        aria-expanded={isOpen}
        data-testid={testId}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="pl-3 pt-2">{children}</div>}
    </div>
  )
);

const MobileCategorySection = memo(
  ({
    category,
    isOpen,
    onToggle,
    onNavigate,
  }: {
    category: ServiceCategory;
    isOpen: boolean;
    onToggle: (id: string) => void;
    onNavigate?: () => void;
  }) => (
    <div>
      <button
        onClick={() => onToggle(category.id)}
        className="text-base font-semibold text-primary flex items-center justify-between w-full mb-2"
        aria-expanded={isOpen}
      >
        {category.name}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="space-y-3 pl-3">
          {category.subcategories.map(
            (subcategory: ServiceCategory["subcategories"][0]) => (
              <div key={subcategory.title}>
                {/* Subcategory title size */}
                <Link
                  href={subcategory.href}
                  className="text-sm font-semibold text-primary mb-1 block"
                  onClick={() => onNavigate && onNavigate()}
                >
                  {subcategory.title === category.name
                    ? "Services"
                    : subcategory.title}
                </Link>

                <ul className="space-y-1 pl-1">
                  {sortItemsAlphabetically(subcategory.items).map((item) => (
                    <li key={item.label}>
                      <span className="text-sm text-muted-foreground">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
);

const MobileCloudCategorySection = memo(
  ({
    category,
    isOpen,
    onToggle,
    onNavigate,
    deploymentType,
    onDeploymentTypeChange,
  }: {
    category: ServiceCategory;
    isOpen: boolean;
    onToggle: (id: string) => void;
    onNavigate?: () => void;
    deploymentType: "public" | "private";
    onDeploymentTypeChange: (type: "public" | "private") => void;
  }) => {
    const publicSubcategories = useMemo(
      () =>
        category.subcategories.filter(
          (subcat) => subcat.title !== "Private (On Prem Data Centre solution)"
        ),
      [category.subcategories]
    );

    const privateSubcategories = useMemo(
      () => [
        {
          title: "Private (On Prem Data Centre solution)",
          href: "/services/private-cloud-on-prem",
          items: sortItemsAlphabetically([
            { label: "AWS On Prem Solutions", href: "#" },
            { label: "Azure On Prem Solutions", href: "#" },
            { label: "HCI Solution for On Prem", href: "#" },
            { label: "Infrastructure for On Prem Ai Solutions", href: "#" },
            { label: "Physical Data Centre Solutions", href: "#" },
            { label: "Software define Data Centre (SDDC)", href: "#" },
            { label: "VMware", href: "#" },
          ]),
        },
      ],
      []
    );

    const subcategoriesToRender =
      deploymentType === "public" ? publicSubcategories : privateSubcategories;

    return (
      <div>
        <button
          onClick={() => onToggle(category.id)}
          className="text-base font-semibold text-primary flex items-center justify-between w-full mb-2"
          aria-expanded={isOpen}
        >
          {category.name}
          <ChevronDown
            className={`h-3 w-3 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="space-y-4 pl-3">
            <div className="mb-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Deployment Type
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => onDeploymentTypeChange("public")}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                    deploymentType === "public"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent/50 hover:bg-accent text-foreground"
                  }`}
                >
                  Public
                </button>
                <button
                  onClick={() => onDeploymentTypeChange("private")}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                    deploymentType === "private"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent/50 hover:bg-accent text-foreground"
                  }`}
                >
                  Private
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {subcategoriesToRender.map((subcategory) => (
                <div key={subcategory.title}>
                  <Link
                    href={subcategory.href}
                    className="text-sm font-semibold text-primary mb-1 block"
                    onClick={() => onNavigate && onNavigate()}
                  >
                    {subcategory.title === category.name
                      ? "Services"
                      : subcategory.title}
                  </Link>

                  <ul className="space-y-1 pl-1">
                    {sortItemsAlphabetically(subcategory.items).map((item) => (
                      <li key={item.label}>
                        <span className="text-sm text-muted-foreground">
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

MobileCloudCategorySection.displayName = "MobileCloudCategorySection";

const MobileMenu = memo(
  ({
    state,
    dispatch,
    onContactClick,
  }: {
    state: State;
    dispatch: React.Dispatch<Action>;
    onContactClick: () => void;
  }) => {
    const categories = SERVICE_NAVIGATION;
    const industries = INDUSTRIES;

    const handleCategoryToggle = (id: string) =>
      dispatch({ type: "TOGGLE_MOBILE_CATEGORY", payload: id });

    const handleMobileCloudTypeChange = useCallback(
      (type: "public" | "private") => {
        dispatch({ type: "SET_MOBILE_CLOUD_DEPLOYMENT_TYPE", payload: type });
      },
      [dispatch]
    );

    if (!state.mobileMenuOpen) return null;

    return (
      <div className="md:hidden border-t py-4">
        <nav className="flex flex-col gap-4">
          {/* Services */}
          <MobileAccordion
            title="Services"
            isOpen={state.mobileServicesOpen}
            onToggle={() => dispatch({ type: "TOGGLE_MOBILE_SERVICES" })}
            testId="mobile-link-services"
          >
            {categories.map((category) =>
              category.id === CATEGORY_IDS.CLOUD ? (
                <MobileCloudCategorySection
                  key={category.id}
                  category={category}
                  isOpen={state.mobileCategoryOpen === category.id}
                  onToggle={handleCategoryToggle}
                  onNavigate={() => dispatch({ type: "CLOSE_ALL_MOBILE" })}
                  deploymentType={state.mobileCloudDeploymentType}
                  onDeploymentTypeChange={handleMobileCloudTypeChange}
                />
              ) : (
                <MobileCategorySection
                  key={category.id}
                  category={category}
                  isOpen={state.mobileCategoryOpen === category.id}
                  onToggle={handleCategoryToggle}
                  onNavigate={() => dispatch({ type: "CLOSE_ALL_MOBILE" })}
                />
              )
            )}
          </MobileAccordion>

          {/* Industries */}
          <MobileAccordion
            title="Industries"
            isOpen={state.mobileIndustriesOpen}
            onToggle={() => dispatch({ type: "TOGGLE_MOBILE_INDUSTRIES" })}
            testId="mobile-link-industries"
          >
            {industries.map((industry) => (
              <div key={industry.name} className="space-y-1">
                <h5 className="text-base font-semibold text-primary">
                  {industry.name}
                </h5>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            ))}
          </MobileAccordion>

          <a className="text-base font-semibold" href="#about">
            About Us
          </a>
          <a className="text-base font-semibold" href="#contact">
            Contact
          </a>

          <Button className="w-full">Let's Talk</Button>
        </nav>
      </div>
    );
  }
);

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Header({ onContactClick }: HeaderProps) {
  const [state, dispatch] = useReducer(headerReducer, initialState);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [location] = useLocation();

  const handleCategoryHover = useCallback(
    (id: string) => dispatch({ type: "SET_ACTIVE_CATEGORY", payload: id }),
    []
  );

  const handleCloudTypeChange = useCallback((type: "public" | "private") => {
    dispatch({ type: "SET_CLOUD_DEPLOYMENT_TYPE", payload: type });
  }, []);

  const handleMobileMenuToggle = useCallback(
    () => dispatch({ type: "TOGGLE_MOBILE_MENU" }),
    []
  );

  const navItems = [
    { id: "services", label: "Services", isMegaMenu: true },
    { id: "industries", label: "Industries", isMegaMenu: true },
    { id: "about", label: "About Us", href: "#about" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="cursor-pointer">
            <div className="flex items-center gap-2">
              <img
                src="/assets/Logo.png"
                alt="Klaude Logo"
                className="h-[14rem] w-auto object-contain"
              />
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8 relative"
            role="navigation"
            aria-label="Main Navigation"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Shared hover background pill */}
            {hoveredNav && (
              <motion.div
                layoutId="nav-hover-pill"
                className="absolute rounded-full -z-10"
                style={{
                  height: "32px",
                  top: "16px",
                  backgroundColor: "#3d8bff",
                }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}

            <NavigationMenu key={location}>
              <NavigationMenuList className="gap-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    {item.isMegaMenu ? (
                      item.id === "services" ? (
                        <div
                          className="relative"
                          onMouseEnter={() => setHoveredNav(item.id)}
                        >
                          <DesktopServicesMenu
                            activeCategory={state.activeCategory}
                            onCategoryHover={handleCategoryHover}
                            cloudDeploymentType={state.cloudDeploymentType}
                            onCloudTypeChange={handleCloudTypeChange}
                          />
                        </div>
                      ) : (
                        <div
                          className="relative"
                          onMouseEnter={() => setHoveredNav(item.id)}
                        >
                          <DesktopIndustriesMenu />
                        </div>
                      )
                    ) : (
                      <div
                        className="relative"
                        onMouseEnter={() => setHoveredNav(item.id)}
                      >
                        <NavigationMenuLink
                          href={item.href}
                          className="group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-[#3d8bff] hover:text-white focus:bg-[#3d8bff] focus:text-white focus:outline-none"
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </div>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              onClick={onContactClick}
              className="ml-4"
              data-testid="button-lets-talk"
            >
              Let's Talk
            </Button>
          </nav>
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={handleMobileMenuToggle}
            aria-label={state.mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={state.mobileMenuOpen}
            data-testid="button-mobile-menu"
          >
            {state.mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <MobileMenu
          state={state}
          dispatch={dispatch}
          onContactClick={onContactClick}
        />
      </div>
    </header>
  );
}
