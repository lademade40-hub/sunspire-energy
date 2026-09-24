"use client";

import * as React from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ClipboardCheck,
  DraftingCompass,
  Wrench,
  Star,
} from "lucide-react";
import {
  BRAND,
  SERVICES,
  PROCESS_STEPS,
  PROJECTS,
  STATS_BAND,
  type PageKey,
} from "@/lib/site-data";
import { Reveal, SectionHead, Counter, PageBanner } from "@/components/site/bits";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

/* ================================================================== */
/*  ABOUT PAGE                                                         */
/* ================================================================== */

const VALUES = [
  {
    title: "Fixed Quotes",
    text: "The number on the contract is the number on the invoice. If we under estimate, that is our problem, not yours.",
  },
  {
    title: "In House Crews",
    text: "Everyone who touches your roof wears a Sunspire shirt and carries our insurance. We have never subcontracted an install.",
  },
  {
    title: "Engineers, Not Closers",
    text: "Your site visit comes from a NABCEP certified designer who can explain every line of the quote without a script.",
  },
];

export function AboutPage({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  return (
    <>
      <PageBanner kicker="About Us" title="The Crew Behind Sunspire" crumb="About Us" />

      {/* story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHead
                kicker="Our Story"
                title={
                  <>
                    Started With Two Vans
                    <br />
                    And A Grudge
                  </>
                }
              />
              <Reveal delay={200}>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  In 2014, Dale Winters spent a summer fixing a competitor&apos;s botched install for a
                  retired schoolteacher in San Marcos. The array was sized for a house twice her usage, the
                  inverter was undersized, and the company that sold it had gone under. He fixed the roof,
                  then decided the industry needed one more company that answers its phone.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Twelve years later, Sunspire is 34 people: electricians, roofers, and designers, most of
                  them with us more than five years. We have never subcontracted an install, we have never
                  changed our phone number, and we still drive past our early jobs to see how they are
                  holding up. They are holding up fine.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  What has changed is the scale. We built 14 megawatts of capacity across Central Texas,
                  from little 6 kW rooftops to a 310 kW warehouse in Georgetown. The promise stays the same
                  on both ends of that range.
                </p>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(18,41,27,0.4)]">
                  { }
                  <img
                    src="/images/hero-5.png"
                    alt="Sunspire engineer checking a module on a large rooftop array"
                    className="h-[420px] w-full object-cover sm:h-[520px]"
                  />
                </div>
                <div className="absolute -bottom-7 left-6 rounded-2xl bg-forest px-7 py-5 text-cream shadow-xl">
                  <span className="font-display text-3xl font-bold text-sun">
                    <Counter value={34} />
                  </span>
                  <p className="mt-1 text-xs font-semibold text-cream/70">
                    people, one roof at a time
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="bg-white border-y border-border/70 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            center
            kicker="What We Stand On"
            title="Three Rules We Refuse To Bend"
            text="They sound simple. They are expensive to keep. We keep them anyway."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="h-full">
                <div className="h-full rounded-[1.6rem] border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sun/60 hover:shadow-[0_24px_50px_-25px_rgba(18,41,27,0.35)]">
                  <span className="font-display text-5xl font-bold text-sun/40">0{i + 1}</span>
                  <h3 className="font-display mt-4 text-xl font-semibold text-forest">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* credentials + stats */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20 items-center">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem]">
                { }
                <img
                  src="/images/icon-3.png"
                  alt="Sunspire installer working beside a rooftop array"
                  className="h-[420px] w-full object-cover sm:h-[480px]"
                />
              </div>
            </Reveal>
            <div>
              <SectionHead
                kicker="Credentials"
                title="Paperwork That Holds Up"
                text="Anyone can print a logo. These are verifiable, current, and yours to check."
              />
              <Reveal delay={200}>
                <ul className="mt-8 space-y-4">
                  {[
                    "NABCEP PV Installation Professional certification on every design",
                    "Texas licensed electrical contractor, TECL #31482",
                    "A+ rating with the Better Business Bureau since 2016",
                    "Fully insured: $2M general liability plus workers comp",
                    "Manufacturer certified for the storage systems we install",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-sun-deep" aria-hidden="true" />
                      <span className="text-[0.95rem] leading-relaxed text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
                  {STATS_BAND.slice(0, 3).map((s) => (
                    <div key={s.label}>
                      <span className="font-display text-2xl sm:text-3xl font-bold text-forest">
                        <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                      </span>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={340}>
                <Button
                  onClick={() => onNavigate("contact")}
                  className="mt-10 rounded-full bg-forest px-7 py-6 text-[0.95rem] font-bold text-cream hover:bg-pine"
                >
                  Talk To An Engineer
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ================================================================== */
/*  SERVICES PAGE                                                      */
/* ================================================================== */

export function ServicesPage({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  return (
    <>
      <PageBanner kicker="What We Do" title="Services Built Around Roofs, Not Quotas" crumb="Services" />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {SERVICES.map((s, i) => {
              const flipped = i % 2 === 1;
              return (
                <div
                  key={s.title}
                  className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
                >
                  <Reveal className={flipped ? "lg:order-2" : ""}>
                    <div className="relative">
                      <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(18,41,27,0.4)]">
                        { }
                        <img
                          src={s.image}
                          alt={s.imageAlt}
                          className="h-[340px] w-full object-cover sm:h-[440px]"
                        />
                      </div>
                      <span className="absolute -top-5 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sun text-forest shadow-xl">
                        <s.icon className="h-7 w-7" aria-hidden="true" />
                      </span>
                    </div>
                  </Reveal>
                  <div className={flipped ? "lg:order-1" : ""}>
                    <Reveal>
                      <span className="kicker text-sun-deep">Service 0{i + 1}</span>
                    </Reveal>
                    <Reveal delay={80}>
                      <h2 className="font-display mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-forest">
                        {s.title}
                      </h2>
                    </Reveal>
                    <Reveal delay={140}>
                      <p className="mt-5 leading-relaxed text-muted-foreground">{s.detail}</p>
                    </Reveal>
                    <Reveal delay={200}>
                      <ul className="mt-7 space-y-3">
                        {s.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-moss" aria-hidden="true" />
                            <span className="text-[0.95rem] leading-relaxed text-muted-foreground">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                    <Reveal delay={260}>
                      <Button
                        onClick={() => onNavigate("contact")}
                        className="mt-8 rounded-full bg-forest px-7 py-5 font-bold text-cream hover:bg-pine"
                      >
                        Get a Quote
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Button>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="bg-forest py-20 lg:py-28 text-cream relative overflow-hidden">
        <div className="absolute inset-0 hero-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            light
            center
            kicker="The Process"
            title="Same Three Steps, Every Project"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PROCESS_STEPS.map((p, i) => {
              const icons = [ClipboardCheck, DraftingCompass, Wrench];
              const Icon = icons[i];
              return (
                <Reveal key={p.step} delay={i * 100} className="h-full">
                  <div className="flex h-full flex-col rounded-[1.6rem] border border-cream/10 bg-cream/[0.04] p-8 transition-colors hover:border-sun/40">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sun text-forest">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <span className="mt-6 text-xs font-extrabold uppercase tracking-[0.25em] text-sun">
                      Step {p.step}
                    </span>
                    <h3 className="font-display mt-2 text-xl font-semibold">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/65">{p.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

/* ================================================================== */
/*  PROJECTS PAGE                                                      */
/* ================================================================== */

export function ProjectsPage({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const [filter, setFilter] = React.useState("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <PageBanner kicker="Our Work" title="Projects You Can Drive Past" crumb="Projects" />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              kicker="Case Studies"
              title="Roofs, Barns, And One Very Big Warehouse"
              text="Every project below was designed, installed, and commissioned by our own crews. Ask us for the address of any of them."
            />
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-2.5" role="tablist" aria-label="Filter projects by category">
              {categories.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={filter === c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                    filter === c
                      ? "bg-forest text-cream shadow-[0_10px_25px_-12px_rgba(18,41,27,0.6)]"
                      : "bg-white text-muted-foreground border border-border hover:border-sun/60 hover:text-forest"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(18,41,27,0.4)]">
                  <div className="relative overflow-hidden">
                    { }
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-forest/85 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-sun backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-forest">{p.title}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-sun-deep">
                      {p.size} · {p.location}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-forest px-8 py-14 text-center text-cream sm:px-14">
              <div className="absolute inset-0 hero-grid" aria-hidden="true" />
              <div className="relative">
                <span className="kicker-center text-sun">Your Roof Next</span>
                <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl sm:text-4xl font-semibold leading-tight">
                  The Best Time To Ask Was Last Summer. The Second Best Is Today.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-cream/70">
                  Quotes are free, fixed for 60 days, and come with zero obligation to smile and nod at a
                  salesperson.
                </p>
                <Button
                  onClick={() => onNavigate("contact")}
                  className="mt-8 rounded-full bg-sun px-8 py-6 font-extrabold text-forest hover:bg-sun-deep hover:text-forest"
                >
                  Start Your Project
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ================================================================== */
/*  CONTACT PAGE                                                       */
/* ================================================================== */

export function ContactPage() {
  const { toast } = useToast();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [interest, setInterest] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sending, setSending] = React.useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Almost there",
        description: "A name, an email, and a short message are all we need.",
        variant: "destructive",
      });
      return;
    }
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setName("");
      setEmail("");
      setPhone("");
      setInterest("");
      setMessage("");
      toast({
        title: "Message sent",
        description: "Thanks for reaching out. A real engineer will reply within one business day.",
      });
    }, 900);
  };

  const infoCards = [
    {
      icon: Phone,
      title: BRAND.phone,
      sub: "Call us for support",
      href: BRAND.phoneHref,
    },
    {
      icon: Mail,
      title: BRAND.email,
      sub: "Email us here",
      href: BRAND.emailHref,
    },
    {
      icon: MapPin,
      title: BRAND.address,
      sub: "Office address",
      href: null,
    },
    {
      icon: Clock,
      title: "Mon to Fri 8 to 6",
      sub: "Saturday 9 to 1",
      href: null,
    },
  ];

  return (
    <>
      <PageBanner kicker="Contact Us" title="Let's Talk About Your Roof" crumb="Contact" />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* info cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((c, i) => {
              const Inner = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-sun transition-colors group-hover:bg-sun group-hover:text-forest">
                    <c.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="mt-5 block font-display text-[1.05rem] font-semibold text-forest break-words">
                    {c.title}
                  </span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {c.sub}
                  </span>
                </>
              );
              return (
                <Reveal key={c.sub + c.title} delay={i * 90} className="h-full">
                  {c.href ? (
                    <a
                      href={c.href}
                      className="group block h-full rounded-[1.6rem] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sun/60 hover:shadow-[0_24px_50px_-25px_rgba(18,41,27,0.35)]"
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div className="group h-full rounded-[1.6rem] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sun/60">
                      {Inner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* form + side */}
          <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <form
                onSubmit={submit}
                className="rounded-[2rem] border border-border bg-white p-7 sm:p-10 shadow-[0_30px_60px_-30px_rgba(18,41,27,0.25)]"
                noValidate={false}
              >
                <span className="kicker text-sun-deep">Free Consultancy</span>
                <h2 className="font-display mt-4 text-2xl sm:text-3xl font-semibold text-forest">
                  Tell Us What You Are Working With
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Rough details are fine. If you have a recent utility bill handy, even better, but do not
                  go digging for it on our account.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Your Name *</Label>
                    <Input
                      id="contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jordan Alvarez"
                      className="h-12 rounded-xl bg-background"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jordan@example.com"
                      className="h-12 rounded-xl bg-background"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(512) 555 0123"
                      className="h-12 rounded-xl bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-interest">I Am Interested In</Label>
                    <Select value={interest} onValueChange={setInterest}>
                      <SelectTrigger id="contact-interest" className="h-12 w-full rounded-xl bg-background">
                        <SelectValue placeholder="Pick one" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="residential">Residential Solar</SelectItem>
                        <SelectItem value="commercial">Commercial Solar</SelectItem>
                        <SelectItem value="storage">Battery Storage</SelectItem>
                        <SelectItem value="ev">EV Charging</SelectItem>
                        <SelectItem value="other">Something Else</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Two story house in Kyle, about 2,100 kWh a month, considering batteries too..."
                      className="min-h-32 rounded-xl bg-background"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="mt-8 w-full rounded-full bg-forest py-6 text-[0.95rem] font-bold text-cream hover:bg-pine sm:w-auto sm:px-10"
                >
                  {sending ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
                <p className="mt-4 text-xs text-muted-foreground">
                  We reply within one business day. No mailing lists, no robo calls, no sharing your info.
                </p>
              </form>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={120}>
                <div className="rounded-[2rem] bg-forest p-8 text-cream sm:p-10 relative overflow-hidden">
                  <div className="absolute inset-0 hero-grid" aria-hidden="true" />
                  <div className="relative">
                    <span className="kicker text-sun">What Happens Next</span>
                    <ul className="mt-7 space-y-6">
                      {[
                        {
                          t: "We call or email back",
                          d: "Within one business day, from a person who can answer questions, not a script reader.",
                        },
                        {
                          t: "We look at your usage",
                          d: "Send a utility bill and we will model what a system would produce and save, honestly.",
                        },
                        {
                          t: "We visit the site",
                          d: "An engineer measures the roof and checks the electrical. Quotes follow within a week.",
                        },
                      ].map((s, i) => (
                        <li key={s.t} className="flex gap-5">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sun font-display text-sm font-bold text-forest">
                            {i + 1}
                          </span>
                          <span>
                            <span className="block font-display text-lg font-semibold">{s.t}</span>
                            <span className="mt-1 block text-sm leading-relaxed text-cream/65">{s.d}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="rounded-[2rem] border border-border bg-white p-8 sm:p-10">
                  <span className="kicker text-sun-deep">Service Area</span>
                  <h3 className="font-display mt-4 text-xl font-semibold text-forest">
                    About 90 Miles Around Austin
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Round Rock, Georgetown, San Marcos, New Braunfels, Kyle, Buda, Dripping Springs,
                    Fredericksburg, Bastrop, Taylor, and everywhere in between. If you are unsure whether
                    you are in range, just ask. The answer has almost always been yes.
                  </p>
                  <div className="mt-6 flex items-center gap-2" aria-label="Rated 4.9 out of 5">
                    <span className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-sun text-sun" aria-hidden="true" />
                      ))}
                    </span>
                    <span className="text-sm font-bold text-forest">4.9</span>
                    <span className="text-sm text-muted-foreground">from 700+ local reviews</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
