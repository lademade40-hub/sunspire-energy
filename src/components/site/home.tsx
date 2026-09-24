"use client";

import * as React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  Play,
  Quote,
  Star,
  CalendarDays,
  Timer,
  BadgeCheck,
  X,
} from "lucide-react";
import {
  BRAND,
  HERO_SLIDES,
  FEATURES,
  ABOUT_STATS,
  SERVICES,
  PROCESS_STEPS,
  FAQS,
  PROJECTS,
  TESTIMONIALS,
  STATS_BAND,
  POSTS,
  type Post,
  type PageKey,
} from "@/lib/site-data";
import { Reveal, SectionHead, Counter } from "@/components/site/bits";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/* ------------------------------------------------------------------ */
/*  Hero slider                                                        */
/* ------------------------------------------------------------------ */

function Hero({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  const [index, setIndex] = React.useState(0);
  const timer = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = React.useCallback((i: number) => {
    setIndex(i);
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setIndex((v) => (v + 1) % HERO_SLIDES.length);
    }, 6500);
  }, []);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((v) => (v + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const slide = HERO_SLIDES[index];

  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* copy */}
          <div key={`copy-${index}`} className="slide-fade">
            <span className="kicker text-sun">{slide.kicker}</span>
            <h1 className="font-display mt-5 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] font-semibold tracking-tight">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-cream/75">
              {slide.text}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                onClick={() => onNavigate("contact")}
                className="rounded-full bg-sun px-7 py-6 text-[0.95rem] font-extrabold text-forest hover:bg-sun-deep hover:text-forest shadow-[0_14px_30px_-12px_rgba(242,169,59,0.65)]"
              >
                Get a Free Quote
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                onClick={() => onNavigate("projects")}
                variant="outline"
                className="rounded-full border-cream/25 bg-transparent px-7 py-6 text-[0.95rem] font-bold text-cream hover:bg-cream/10 hover:text-cream"
              >
                See Our Work
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-3" aria-label="Hero slider controls">
              <button
                onClick={() => restart((index - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-sun hover:bg-sun hover:text-forest"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => restart((index + 1) % HERO_SLIDES.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-sun hover:bg-sun hover:text-forest"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="ml-3 flex items-center gap-2">
                {HERO_SLIDES.map((s, i) => (
                  <button
                    key={s.kicker}
                    onClick={() => restart(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-[6px] rounded-full transition-all duration-400 ${
                      i === index ? "w-9 bg-sun" : "w-3 bg-cream/25 hover:bg-cream/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* image */}
          <div className="relative">
            <div key={`img-${index}`} className="img-fade relative">
              <div className="overflow-hidden rounded-[2rem] border border-cream/15 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                { }
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[500px]"
                />
              </div>
              <div className="float-y absolute -bottom-6 -left-4 sm:left-6 flex items-center gap-4 rounded-2xl bg-white p-4 pr-6 shadow-[0_24px_50px_-20px_rgba(18,41,27,0.5)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sun text-forest">
                  <BadgeCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-xl font-bold leading-none text-forest">
                    1,900+
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-muted-foreground">
                    Systems installed
                  </span>
                </span>
              </div>
            </div>
            <div className="absolute -top-5 -right-3 hidden sm:flex h-24 w-24 flex-col items-center justify-center rounded-full bg-sun text-forest shadow-xl">
              <span className="font-display text-2xl font-bold leading-none">12+</span>
              <span className="mt-1 text-[0.6rem] font-extrabold uppercase tracking-widest">Years</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sun/60 to-transparent" aria-hidden="true" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature strip                                                      */
/* ------------------------------------------------------------------ */

function FeatureStrip() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="-mt-10 lg:-mt-14 grid gap-4 rounded-[2rem] bg-white p-4 shadow-[0_30px_70px_-30px_rgba(18,41,27,0.35)] sm:grid-cols-2 lg:grid-cols-4 sm:p-5">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 90}>
            <div className="group flex h-full items-start gap-4 rounded-2xl p-5 transition-colors hover:bg-cream">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest text-sun transition-colors group-hover:bg-sun group-hover:text-forest">
                <f.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-forest">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */

function About({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* images */}
          <Reveal className="relative">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(18,41,27,0.4)]">
                { }
                <img
                  src="/images/technician.jpg"
                  alt="Sunspire technician securing panels on a rooftop array"
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />
              </div>
              <div className="absolute -bottom-8 -right-2 w-52 overflow-hidden rounded-2xl border-4 border-background shadow-xl hidden sm:block">
                { }
                <img
                  src="/images/hero-3.png"
                  alt="The Sunspire design team planning a system"
                  className="h-36 w-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-3 rounded-2xl bg-forest px-6 py-5 text-cream shadow-xl sm:-left-8">
                <span className="font-display text-3xl font-bold text-sun">4.9</span>
                <div className="mt-1 flex items-center gap-0.5" aria-label="4.9 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-sun text-sun" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-1.5 text-[0.7rem] font-semibold text-cream/70">
                  from 700+ local reviews
                </p>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <div>
            <SectionHead
              kicker="About The Company"
              title={
                <>
                  Solar Should Be Simple.
                  <br />
                  We Made It Our Job.
                </>
              }
            />
            <Reveal delay={200}>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Sunspire started in 2014 with two vans and a rented warehouse in East Austin. Back then we
                mostly fixed other companies&apos; installs, and that taught us exactly how solar should not
                be done. It shapes every job we take on today, from the first site visit to the last torque
                check.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our crews are NABCEP certified and every one of them works for Sunspire. We do not hand your
                roof to the lowest bidder. The person who sells you the system is the same person who answers
                the phone five years later, which is rarer than it should be in this business.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 grid grid-cols-3 gap-4 border-y border-border py-7">
                {ABOUT_STATS.map((s) => (
                  <div key={s.label}>
                    <span className="font-display text-3xl sm:text-4xl font-bold text-forest">
                      <Counter value={s.value} suffix={s.suffix} />
                    </span>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Button
                  onClick={() => onNavigate("about")}
                  className="rounded-full bg-forest px-7 py-6 text-[0.95rem] font-bold text-cream hover:bg-pine"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Button>
                <a href={BRAND.phoneHref} className="group flex items-center gap-4">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-sun/15 text-sun-deep">
                    <span className="absolute inset-0 animate-ping rounded-full bg-sun/25" aria-hidden="true" />
                    <Phone className="relative h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Call Us 24/7
                    </span>
                    <span className="block text-[1.05rem] font-extrabold text-forest group-hover:text-sun-deep transition-colors">
                      {BRAND.phone}
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

function ServicesGrid({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  return (
    <section className="bg-white py-20 lg:py-28 border-y border-border/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          center
          kicker="Our Services"
          title="Produce Your Own Power, Skip The Middleman"
          text="Four things we do all day, every day, across Central Texas. No juggling subs, no surprise change orders, and no call centers when you need help."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const featured = i === 0;
            return (
              <Reveal key={s.title} delay={i * 90} className="h-full">
                <button
                  onClick={() => onNavigate("services")}
                  className={`group flex h-full w-full flex-col rounded-[1.6rem] border p-7 text-left transition-all duration-300 hover:-translate-y-1.5 ${
                    featured
                      ? "border-forest bg-forest text-cream shadow-[0_30px_60px_-25px_rgba(18,41,27,0.55)]"
                      : "border-border bg-background hover:border-sun/60 hover:shadow-[0_24px_50px_-25px_rgba(18,41,27,0.35)]"
                  }`}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${
                      featured
                        ? "bg-sun text-forest"
                        : "bg-forest text-sun group-hover:bg-sun group-hover:text-forest"
                    }`}
                  >
                    <s.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3
                    className={`font-display mt-6 text-xl font-semibold ${featured ? "text-cream" : "text-forest"}`}
                  >
                    {s.title}
                  </h3>
                  <p className={`mt-3 flex-1 text-sm leading-relaxed ${featured ? "text-cream/70" : "text-muted-foreground"}`}>
                    {s.blurb}
                  </p>
                  <span
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-extrabold ${
                      featured ? "text-sun" : "text-forest group-hover:text-sun-deep"
                    }`}
                  >
                    Read More
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Working process + CTA                                              */
/* ------------------------------------------------------------------ */

function Process({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  return (
    <section className="bg-forest py-20 lg:py-28 text-cream relative overflow-hidden">
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          light
          kicker="How We Work"
          title="From First Call To First Kilowatt"
          text="Three steps, no mysteries. You always know where your project stands and what happens next."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-center">
          <div className="space-y-3">
            {PROCESS_STEPS.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="group flex items-start gap-6 rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 transition-colors hover:border-sun/40 hover:bg-cream/[0.08]">
                  <span className="font-display text-4xl font-bold text-sun/40 transition-colors group-hover:text-sun">
                    {p.step}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/65">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-[2rem] border border-cream/10">
              { }
              <img
                src="/images/icon-6.png"
                alt="Two Sunspire engineers reviewing plans in the field"
                className="h-[460px] w-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-forest/90 p-6 backdrop-blur sm:inset-x-6 sm:bottom-6">
                <p className="font-display text-xl font-semibold leading-snug">
                  Not sure if solar pencils out for your roof?
                </p>
                <p className="mt-2 text-sm text-cream/65">
                  Send a recent utility bill and we will run the numbers honestly. If solar is a bad fit, we
                  will tell you that too.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <Button
                    onClick={() => onNavigate("contact")}
                    className="rounded-full bg-sun px-6 py-3 font-extrabold text-forest hover:bg-sun-deep hover:text-forest"
                  >
                    Get Free Consultancy
                  </Button>
                  <a href={BRAND.phoneHref} className="flex items-center gap-2.5 font-extrabold text-cream hover:text-sun transition-colors">
                    <Phone className="h-4 w-4 text-sun" aria-hidden="true" />
                    {BRAND.phone}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ + intro                                                        */
/* ------------------------------------------------------------------ */

function Faq() {
  const [storyOpen, setStoryOpen] = React.useState(false);

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHead
              kicker="Questions For Us"
              title="Some Common Questions"
              text="The things people ask at every kitchen table meeting, answered straight."
            />
            <Reveal delay={200}>
              <div className="relative mt-10 overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(18,41,27,0.4)]">
                { }
                <img
                  src="/images/hero-1.png"
                  alt="Sunspire engineer with a tablet at a wind and solar site"
                  className="h-64 w-full object-cover"
                />
                <button
                  onClick={() => setStoryOpen(true)}
                  className="group absolute inset-0 flex items-center justify-center bg-forest/30 transition-colors hover:bg-forest/45"
                  aria-label="Watch our intro"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sun text-forest shadow-[0_0_0_10px_rgba(242,169,59,0.25)] transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-6 w-6 fill-forest" aria-hidden="true" />
                  </span>
                </button>
                <p className="absolute bottom-4 left-5 right-5 font-display text-lg font-semibold text-white drop-shadow">
                  Meet the crew behind the quotes
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`faq-${i}`}
                  className="mb-4 rounded-2xl border border-border bg-white px-6 data-[state=open]:border-sun/60 data-[state=open]:shadow-[0_16px_40px_-20px_rgba(18,41,27,0.3)]"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-[1.05rem] font-semibold text-forest hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>

      <Dialog open={storyOpen} onOpenChange={setStoryOpen}>
        <DialogContent className="max-w-lg rounded-3xl" aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-semibold text-forest">
              Twelve years, same phone number
            </DialogTitle>
            <DialogDescription asChild>
              <div className="text-left">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We made this instead of a glossy promo video because that is not really our style. The
                  short version: two neighbors got tired of watching homeowners get sold systems that never
                  should have been designed, and decided a solar company could run on plain talk and fixed
                  quotes.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Twelve years later we are 34 people, most of them electricians and roofers who have been
                  here more than five years. Nobody works on commission, so nobody has a reason to sell you
                  something you do not need.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  That is the whole pitch. The rest is in the numbers below.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Projects preview                                                   */
/* ------------------------------------------------------------------ */

function ProjectsPreview({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  const featured = PROJECTS.slice(0, 4);
  return (
    <section className="bg-white py-20 lg:py-28 border-y border-border/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            kicker="Latest Case Studies"
            title="Roofs We Are Proud Of"
          />
          <Reveal delay={150}>
            <Button
              onClick={() => onNavigate("projects")}
              variant="outline"
              className="rounded-full border-forest/20 px-6 py-5 font-bold text-forest hover:bg-forest hover:text-cream"
            >
              View All Projects
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="h-full">
              <button
                onClick={() => onNavigate("projects")}
                className="group block h-full w-full overflow-hidden rounded-[1.6rem] border border-border bg-background text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(18,41,27,0.4)]"
              >
                <div className="relative overflow-hidden">
                  { }
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-forest/85 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-sun backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-forest group-hover:text-sun-deep transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-muted-foreground">
                    {p.size} · {p.location}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */

function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          center
          kicker="Client Feedback"
          title="People Who Checked Our Math"
          text="A few of the 1,900 households and businesses running on our work. Names and details used with permission."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <figure className="relative flex h-full flex-col rounded-[1.6rem] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-25px_rgba(18,41,27,0.35)]">
                <Quote className="h-8 w-8 text-sun" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-0.5" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-sun text-sun" aria-hidden="true" />
                  ))}
                </div>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-5">
                  {t.avatar ? (
                     
                    <img
                      src={t.avatar}
                      alt={`Portrait of ${t.name}`}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-forest font-display text-sm font-bold text-sun"
                      aria-hidden="true"
                    >
                      {t.initials}
                    </span>
                  )}
                  <span>
                    <span className="block font-display text-[1rem] font-semibold text-forest">{t.name}</span>
                    <span className="block text-xs font-semibold text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats band                                                         */
/* ------------------------------------------------------------------ */

function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-pine py-16 text-cream">
      <div className="dot-texture absolute inset-0 opacity-[0.15] invert" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS_BAND.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="text-center">
                <span className="font-display text-4xl sm:text-5xl font-bold text-sun">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </span>
                <p className="mt-2 text-sm font-semibold text-cream/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Blog preview                                                       */
/* ------------------------------------------------------------------ */

function BlogPreview() {
  const [active, setActive] = React.useState<Post | null>(null);

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          center
          kicker="Field Notes"
          title="Straight Talk From The Roof"
          text="Short reads on cost, weather, and gear, written by the people who actually swing the wrenches."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="h-full">
              <article
                onClick={() => setActive(p)}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.6rem] border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(18,41,27,0.4)]"
              >
                <div className="relative overflow-hidden">
                  { }
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-sun px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-wider text-forest">
                    Field Notes
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-5 text-xs font-semibold text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-sun-deep" aria-hidden="true" />
                      {p.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Timer className="h-3.5 w-3.5 text-sun-deep" aria-hidden="true" />
                      {p.read}
                    </span>
                  </div>
                  <h3 className="font-display mt-3 text-xl font-semibold leading-snug text-forest group-hover:text-sun-deep transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold text-forest group-hover:text-sun-deep">
                    Read Article
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl thin-scroll">
          {active ? (
            <>
              <DialogHeader>
                <div className="flex items-center gap-5 text-xs font-semibold text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-sun-deep" aria-hidden="true" />
                    {active.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Timer className="h-3.5 w-3.5 text-sun-deep" aria-hidden="true" />
                    {active.read}
                  </span>
                </div>
                <DialogTitle className="font-display pr-8 text-left text-2xl font-semibold text-forest sm:text-3xl">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="sr-only">{active.excerpt}</DialogDescription>
              </DialogHeader>
              { }
              <img
                src={active.image}
                alt={active.imageAlt}
                className="h-64 w-full rounded-2xl object-cover"
              />
              <div className="space-y-4">
                {active.body.map((para, idx) => (
                  <p key={idx} className="text-[0.95rem] leading-relaxed text-muted-foreground">
                    {para}
                  </p>
                ))}
              </div>
              <p className="flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-forest">
                <BadgeCheck className="h-4 w-4 text-sun-deep" aria-hidden="true" />
                Written by the Sunspire crew
              </p>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Home page composition                                              */
/* ------------------------------------------------------------------ */

export function HomePage({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <FeatureStrip />
      <About onNavigate={onNavigate} />
      <ServicesGrid onNavigate={onNavigate} />
      <Process onNavigate={onNavigate} />
      <Faq />
      <ProjectsPreview onNavigate={onNavigate} />
      <Testimonials />
      <StatsBand />
      <BlogPreview />
    </>
  );
}
