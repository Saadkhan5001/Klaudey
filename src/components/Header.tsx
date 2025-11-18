import { memo, useCallback, useMemo, useReducer } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
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
};

type Action =
  | { type: "TOGGLE_MOBILE_MENU" }
  | { type: "SET_ACTIVE_CATEGORY"; payload: string }
  | { type: "TOGGLE_MOBILE_SERVICES" }
  | { type: "TOGGLE_MOBILE_INDUSTRIES" }
  | { type: "TOGGLE_MOBILE_CATEGORY"; payload: string }
  | { type: "CLOSE_ALL_MOBILE" };

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

// ============================================================================
// REDUCER
// ============================================================================

const initialState: State = {
  mobileMenuOpen: false,
  activeCategory: CATEGORY_IDS.MICROSOFT,
  mobileServicesOpen: false,
  mobileIndustriesOpen: false,
  mobileCategoryOpen: "",
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
  }: {
    activeCategory: string;
    onCategoryHover: (id: string) => void;
  }) => {
    const categories = useMemo(
      () => SERVICE_NAVIGATION,
      []
    );
    const activeCategoryData = useMemo(
      () => categories.find((c) => c.id === activeCategory)!,
      [categories, activeCategory]
    );

    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger data-testid="nav-services">
          Services
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-screen max-w-[1400px] mx-auto bg-gradient-to-br from-background to-muted/40">
            <div className="px-6 md:px-12 lg:px-16 xl:px-20 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12">
                {/* ==== Categories Sidebar ==== */}
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-6">
                    Service Categories
                  </h4>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onMouseEnter={() => onCategoryHover(category.id)}
                        className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                          activeCategory === category.id
                            ? "bg-primary/10 text-primary shadow-lg border border-primary/20"
                            : "hover:bg-accent/50 hover:shadow-md"
                        }`}
                      >
                        <span className="font-semibold text-lg">
                          {category.name}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            activeCategory === category.id
                              ? "rotate-0 text-primary"
                              : "-rotate-90 text-muted-foreground group-hover:text-primary"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* ==== Active Category Content ==== */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    activeCategoryData.subcategories.length === 1
                      ? "md:grid-cols-1"
                      : ""
                  }`}
                >
                  {activeCategoryData.subcategories.map((subcategory) => (
                    <div
                      key={subcategory.title}
                      className={`group relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                        activeCategoryData.subcategories.length === 1
                          ? "md:col-span-full"
                          : ""
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <Link
                        href={subcategory.href}
                        className="relative z-10 block mb-6"
                      >
                        <h3 className="font-bold text-2xl text-primary group-hover:text-primary/80 transition-colors">
                          {subcategory.title}
                        </h3>
                      </Link>

                      <ul className="relative z-10 space-y-4">
                        {subcategory.items.map((item) => (
                          <li
                            key={item.label}
                            className="flex items-start gap-3"
                          >
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-base text-muted-foreground leading-relaxed">
                              {item.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
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
  const industries = useMemo(() => INDUSTRIES, []);

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger data-testid="nav-industries">
        Industries
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-screen max-w-[1400px] mx-auto bg-gradient-to-br from-background to-muted/40">
          <div className="px-6 md:px-12 lg:px-16 xl:px-20 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <h4 className="relative z-10 font-semibold text-lg text-primary mb-2 group-hover:text-primary/80 transition-colors">
                    {industry.name}
                  </h4>
                  <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
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
  }: {
    category: ServiceCategory;
    isOpen: boolean;
    onToggle: (id: string) => void;
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
                {/* 🔧 Subcategory title size */}
                <Link
                  href={subcategory.href}
                  className="text-sm font-semibold text-primary mb-1 block"
                >
                  {subcategory.title}
                </Link>

                {/* 🔧 service item text size */}
                <ul className="space-y-1 pl-1">
                  {subcategory.items.map((item: ServiceItem) => (
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
            {categories.map((category) => (
              <MobileCategorySection
                key={category.id}
                category={category}
                isOpen={state.mobileCategoryOpen === category.id}
                onToggle={handleCategoryToggle}
              />
            ))}
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

          <Button className="w-full">Let’s Talk</Button>
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

  const handleCategoryHover = useCallback(
    (id: string) => dispatch({ type: "SET_ACTIVE_CATEGORY", payload: id }),
    [dispatch]
  );

  const handleMobileMenuToggle = useCallback(
    () => dispatch({ type: "TOGGLE_MOBILE_MENU" }),
    [dispatch]
  );

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold gradient-text">AptaCloud</div>
          </div>

          <nav
            className="hidden md:flex items-center gap-6"
            role="navigation"
            aria-label="Main Navigation"
          >
            <NavigationMenu>
              <NavigationMenuList>
                <DesktopServicesMenu
                  activeCategory={state.activeCategory}
                  onCategoryHover={handleCategoryHover}
                />
                <DesktopIndustriesMenu />
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#about"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    data-testid="link-about"
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#contact"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    data-testid="link-contact"
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
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
