"use client";

import * as React from "react";
import { Clock, Mail, MapPin, Phone, Facebook, Linkedin, Instagram, Menu, ArrowRight } from "lucide-react";
import { BRAND, NAV_ITEMS, FOOTER_LINKS, DESIGNED_BY, type PageKey } from "@/lib/site-data";
import { Logo, Reveal } from "@/components/site/bits";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Top bar                                                            */
/* ------------------------------------------------------------------ */

export function TopBar() {
  return (
    <div className="hidden md:block bg-forest text-cream/85 text-[0.8rem]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between gap-6">
          <p className="truncate">
            NABCEP certified crews. In house installers. No subcontractors, ever.
          </p>
          <div className="flex items-center gap-6 shrink-0">
            <span className="hidden lg:inline-flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-sun" aria-hidden="true" />
              {BRAND.hoursShort}
            </span>
            <a
              href={BRAND.emailHref}
              className="inline-flex items-center gap-2 hover:text-sun transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-sun" aria-hidden="true" />
              {BRAND.email}
            </a>
            <span className="hidden sm:inline-flex items-center gap-3 border-l border-cream/15 pl-5" aria-label="Social media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Sunspire on Facebook" className="hover:text-sun transition-colors">
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Sunspire on LinkedIn" className="hover:text-sun transition-colors">
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Sunspire on Instagram" className="hover:text-sun transition-colors">
                <Instagram className="h-3.5 w-3.5" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */

export function Header({
  current,
  onNavigate,
}: {
  current: PageKey;
  onNavigate: (page: PageKey) => void;
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (page: PageKey) => {
    setOpen(false);
    onNavigate(page);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_40px_-18px_rgba(18,41,27,0.35)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <Logo onNavigate={() => go("home")} />

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const active = current === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => go(item.key)}
                  className={`relative rounded-full px-4 py-2 text-[0.92rem] font-semibold transition-colors ${
                    active ? "text-forest" : "text-muted-foreground hover:text-forest"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-4 -bottom-[2px] h-[2px] rounded-full bg-sun transition-transform duration-300 origin-left ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={BRAND.phoneHref}
              className="hidden xl:flex items-center gap-3 mr-1 text-left group"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun/15 text-sun-deep group-hover:bg-sun/25 transition-colors">
                <Phone className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted-foreground">
                  Call For Help
                </span>
                <span className="text-[0.92rem] font-extrabold text-forest">{BRAND.phone}</span>
              </span>
            </a>

            <Button
              onClick={() => go("contact")}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-forest px-6 py-2.5 text-[0.9rem] font-bold text-cream hover:bg-pine shadow-[0_8px_20px_-10px_rgba(18,41,27,0.7)]"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden rounded-full border-border bg-white"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5 text-forest" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-forest text-cream border-l-0 p-0 thin-scroll overflow-y-auto">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <div className="flex h-full flex-col">
                  <div className="flex h-[4.5rem] items-center border-b border-cream/10 px-5">
                    <Logo light onNavigate={() => go("home")} />
                  </div>
                  <nav className="flex flex-col gap-1 p-5" aria-label="Mobile navigation">
                    {NAV_ITEMS.map((item) => (
                      <button
                        key={item.key}
                        onClick={() => go(item.key)}
                        className={`rounded-xl px-4 py-3 text-left text-[0.95rem] font-semibold transition-colors ${
                          current === item.key
                            ? "bg-sun text-forest"
                            : "text-cream/80 hover:bg-cream/10 hover:text-cream"
                        }`}
                        aria-current={current === item.key ? "page" : undefined}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  <div className="mt-auto space-y-4 border-t border-cream/10 p-5 text-sm text-cream/70">
                    <a href={BRAND.phoneHref} className="flex items-center gap-3 hover:text-sun">
                      <Phone className="h-4 w-4 text-sun" aria-hidden="true" /> {BRAND.phone}
                    </a>
                    <a href={BRAND.emailHref} className="flex items-center gap-3 hover:text-sun">
                      <Mail className="h-4 w-4 text-sun" aria-hidden="true" /> {BRAND.email}
                    </a>
                    <p className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden="true" /> {BRAND.address}
                    </p>
                    <Button
                      onClick={() => go("contact")}
                      className="w-full rounded-full bg-sun text-forest font-bold hover:bg-sun-deep hover:text-forest"
                    >
                      Get a Quote
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export function Footer({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return (
    <footer className="relative mt-auto overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 hero-grid opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <Reveal>
            <div>
              <Logo light onNavigate={() => onNavigate("home")} />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/65">
                A Central Texas solar company built on fixed quotes, in house crews, and systems we would
                put on our own roofs.
              </p>
              <div className="mt-6 flex items-center gap-3" aria-label="Social media">
                {[
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Sunspire on ${label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-all hover:border-sun hover:bg-sun hover:text-forest"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {FOOTER_LINKS.map((col, i) => (
            <Reveal key={col.title} delay={80 * (i + 1)}>
              <div>
                <h3 className="font-display text-lg font-semibold text-cream">{col.title}</h3>
                <span className="mt-3 block h-[2px] w-8 bg-sun" aria-hidden="true" />
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <button
                        onClick={() => item.page && onNavigate(item.page)}
                        className="group inline-flex items-center gap-2 text-sm text-cream/65 transition-colors hover:text-sun"
                      >
                        <span className="h-1 w-1 rounded-full bg-sun/60 transition-all group-hover:w-3" aria-hidden="true" />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal delay={240}>
            <div>
              <h3 className="font-display text-lg font-semibold text-cream">Reach Us</h3>
              <span className="mt-3 block h-[2px] w-8 bg-sun" aria-hidden="true" />
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a href={BRAND.phoneHref} className="flex items-start gap-3 text-cream/65 hover:text-sun transition-colors">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold text-cream">{BRAND.phone}</span>
                      <span className="text-cream/50">Call us for support</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={BRAND.emailHref} className="flex items-start gap-3 text-cream/65 hover:text-sun transition-colors">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold text-cream">{BRAND.email}</span>
                      <span className="text-cream/50">Email us here</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-cream/65">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-cream">{BRAND.address}</span>
                    <span className="text-cream/50">Office address</span>
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-[0.82rem] text-cream/55 sm:flex-row">
          <p>© 2026 {BRAND.name}. All Rights Reserved.</p>
          <a
            href={DESIGNED_BY.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-sun"
          >
            {DESIGNED_BY.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
