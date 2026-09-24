"use client";

import * as React from "react";
import { Header, Footer, TopBar } from "@/components/site/chrome";
import { HomePage } from "@/components/site/home";
import { AboutPage, ServicesPage, ProjectsPage, ContactPage } from "@/components/site/pages-inner";
import type { PageKey } from "@/lib/site-data";

const TITLES: Record<PageKey, string> = {
  home: "Sunspire Energy | Solar Installation in Central Texas",
  about: "About Us | Sunspire Energy",
  services: "Our Services | Sunspire Energy",
  projects: "Our Projects | Sunspire Energy",
  contact: "Contact Us | Sunspire Energy",
};

export function SiteApp() {
  const [page, setPage] = React.useState<PageKey>("home");

  const navigate = React.useCallback((next: PageKey) => {
    setPage(next);
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title = TITLES[page];
  }, [page]);

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Header current={page} onNavigate={navigate} />
      <main className="flex-1">
        {page === "home" && <HomePage onNavigate={navigate} />}
        {page === "about" && <AboutPage onNavigate={navigate} />}
        {page === "services" && <ServicesPage onNavigate={navigate} />}
        {page === "projects" && <ProjectsPage onNavigate={navigate} />}
        {page === "contact" && <ContactPage />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
