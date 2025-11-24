import { memo, useCallback, useMemo, useReducer, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion"; // â† Added
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
    const categories = useMemo(() => SERVICE_NAVIGATION, []);
    const activeCat = useMemo(
      () => categories.find((c) => c.id === activeCategory)!,
      [categories, activeCategory]
    );

    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-base font-medium">
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
                              : "text-foreground hover:bg-accent/70"
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

              {/* Right: Active Category Content â€“ No bullets, pure minimal */}
              <div className="col-span-9">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                  {activeCat.subcategories.map((subcat) => (
                    <div key={subcat.title}>
                      <Link href={subcat.href} className="block mb-6 group">
                        <h3 className="text-xl font-semibold text-primary group-hover:underline underline-offset-4 transition-all">
                          {subcat.title}
                        </h3>
                      </Link>

                      <ul className="space-y-4">
                        {subcat.items.map((item) => (
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
      <NavigationMenuTrigger className="text-base font-medium">
        Industries
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-screen max-w-screen-2xl mx-auto p-8 md:p-12">
          {/* Perfect 3Ã—3 grid on lg+ screens */}
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
                {/* ðŸ”§ Subcategory title size */}
                <Link
                  href={subcategory.href}
                  className="text-sm font-semibold text-primary mb-1 block"
                  onClick={() => onNavigate && onNavigate()}
                >
                  {subcategory.title}
                </Link>

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
                onNavigate={() => dispatch({ type: "CLOSE_ALL_MOBILE" })}
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

  // â† New: Track which top-level nav item is hovered
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const handleCategoryHover = useCallback(
    (id: string) => dispatch({ type: "SET_ACTIVE_CATEGORY", payload: id }),
    []
  );

  const handleMobileMenuToggle = useCallback(
    () => dispatch({ type: "TOGGLE_MOBILE_MENU" }),
    []
  );

  // Define the top-level navigation items with unique IDs
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
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold gradient-text">AptaCloud</div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8 relative"
            role="navigation"
            aria-label="Main Navigation"
            onMouseLeave={() => setHoveredNav(null)} // optional: clear on leave
          >
            {/* Shared hover background pill */}
            {hoveredNav && (
              <motion.div
                layoutId="nav-hover-pill"
                className="absolute bg-accent rounded-full -z-10"
                style={{ height: "32px", top: "16px" }} // 16px = h-16 / 2 - 16px (half height)
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}

            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    {item.isMegaMenu ? (
                      // Services & Industries (mega menus)
                      item.id === "services" ? (
                        <div
                          className="relative"
                          onMouseEnter={() => setHoveredNav(item.id)}
                        >
                          <DesktopServicesMenu
                            activeCategory={state.activeCategory}
                            onCategoryHover={handleCategoryHover}
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
                      // Regular links
                      <div
                        className="relative"
                        onMouseEnter={() => setHoveredNav(item.id)}
                      >
                        <NavigationMenuLink
                          href={item.href}
                          className="group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
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

