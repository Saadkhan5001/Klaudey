import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import ServicePageRouter from "@/pages/services/ServicePageRouter";
import { ReactLenis } from "@studio-freight/react-lenis";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/:slug">
        {(params) => <ServicePageRouter slug={params.slug} />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ReactLenis>
  );
}

export default App;

