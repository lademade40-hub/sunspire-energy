import { Sun, Building2, BatteryCharging, PlugZap, Leaf, Hammer, Gauge, Wallet, type LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Brand                                                              */
/* ------------------------------------------------------------------ */

export const BRAND = {
  name: "Sunspire Energy",
  short: "Sunspire",
  phone: "(512) 555 0148",
  phoneHref: "tel:+15125550148",
  email: "hello@sunspireenergy.com",
  emailHref: "mailto:hello@sunspireenergy.com",
  address: "4112 Willow Grove Rd, Austin TX 78704",
  hoursShort: "Mon to Fri 8:00 to 6:00 · Sat 9:00 to 1:00",
  hoursLong: "Monday to Friday 8:00 to 6:00, Saturday 9:00 to 1:00. Closed Sundays unless the sun is doing something dramatic.",
  tagline: "Honest solar for Central Texas",
};

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export type PageKey = "home" | "about" | "services" | "projects" | "contact";

export const NAV_ITEMS: { key: PageKey; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "about", label: "About Us" },
  { key: "services", label: "Services" },
  { key: "projects", label: "Projects" },
  { key: "contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/*  Hero slider                                                        */
/* ------------------------------------------------------------------ */

export const HERO_SLIDES = [
  {
    kicker: "Welcome To Sunspire",
    title: "Sunlight In. Bills Down.",
    text: "We design, install, and look after solar for homes and businesses across Central Texas. Straight answers, fair prices, and work built to outlast the warranty.",
    image: "/images/hero-5.png",
    alt: "Sunspire engineer inspecting a rooftop solar array",
  },
  {
    kicker: "Residential & Commercial",
    title: "Own Your Power",
    text: "A Sunspire system is sized for your roof, your usage, and your budget. Most homeowners see payback in six to nine years, then decades of nearly free electricity.",
    image: "/images/hero-7.png",
    alt: "Installer giving a thumbs up beside a ground mounted solar array",
  },
  {
    kicker: "Battery Ready",
    title: "Calm During Outages",
    text: "Pair your panels with battery storage and keep the lights on through grid hiccups, storm outages, and rate hikes. The fridge stays cold, the wifi stays on.",
    image: "/images/rect-254.png",
    alt: "Suburban home with rooftop solar panels under a blue sky",
  },
];

/* ------------------------------------------------------------------ */
/*  Feature strip                                                      */
/* ------------------------------------------------------------------ */

export const FEATURES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Leaf,
    title: "Clean Power",
    text: "Every kilowatt from your roof is one the utility does not have to make by burning gas.",
  },
  {
    icon: Hammer,
    title: "Quick Installs",
    text: "Most homes are done in a day or two once permits clear. We keep the schedule honest.",
  },
  {
    icon: Gauge,
    title: "Set And Forget",
    text: "Panels have no moving parts. Rain handles most of the cleaning, we handle the rest.",
  },
  {
    icon: Wallet,
    title: "Fair Pricing",
    text: "One fixed quote, itemized line by line. The number we write down is the number you pay.",
  },
];

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */

export const ABOUT_STATS = [
  { value: 1900, suffix: "+", label: "Systems Installed" },
  { value: 14, suffix: " MW", label: "Capacity Built" },
  { value: 12, suffix: "", label: "Years In Business" },
];

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

export const SERVICES: {
  icon: LucideIcon;
  title: string;
  blurb: string;
  detail: string;
  points: string[];
  image: string;
  imageAlt: string;
}[] = [
  {
    icon: Sun,
    title: "Residential Solar",
    blurb: "Rooftop systems sized to your actual usage, not a sales quota.",
    detail:
      "We start with a year of your utility bills, not a guess. An engineer models your usage, measures the roof, and designs a system that covers what you actually burn. You get a fixed quote with every line explained, from panels to permit fees.",
    points: [
      "Custom design based on twelve months of usage data",
      "Fixed price quote with itemized equipment and labor",
      "City, HOA, and utility paperwork handled for you",
      "Monitoring app setup and a full walkthrough at switch on",
    ],
    image: "/images/rect-254.png",
    imageAlt: "Home with solar panels installed on a tile roof",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    blurb: "Warehouses, offices, and ag buildings. Built to cut operating costs from year one.",
    detail:
      "Commercial roofs are the best solar real estate in Texas: big, flat, and usually empty. We have built systems for warehouses, office parks, schools, and dairies from 40 kW up to 310 kW. We work around your operating hours and keep the tax credit paperwork clean for your accountant.",
    points: [
      "Structural review and utility interconnection studies",
      "Phased installs that avoid downtime for your business",
      "Demand charge analysis so the savings are real",
      "Expanded federal and local incentive handling",
    ],
    image: "/images/project-engineer.jpg",
    imageAlt: "Engineer with a clipboard walking a commercial solar site",
  },
  {
    icon: BatteryCharging,
    title: "Battery Storage",
    blurb: "Keep the fridge cold and the wifi on when the grid blinks.",
    detail:
      "Batteries turned from a luxury into a no brainer the last few summers. We size storage to the loads that matter to you, whether that is a partial backup for essentials or a whole home system that rides through a multi day outage. Existing solar? We can usually retrofit without touching your panels.",
    points: [
      "Partial or whole home backup sized to your priorities",
      "Retrofits onto most existing solar systems",
      "Storm watch and time of use configuration included",
      "Load management so the big stuff keeps running",
    ],
    image: "/images/project-energy.jpg",
    imageAlt: "Solar array and storage facility in a green field",
  },
  {
    icon: PlugZap,
    title: "EV Charging",
    blurb: "Level 2 chargers wired right, including panel upgrades where needed.",
    detail:
      "A lot of installers bolt a charger to the wall and call it a day. We check the service first, because half the older homes we see need a panel swap to charge at full speed safely. If yours does, we quote it honestly and pull the permit ourselves.",
    points: [
      "Level 2 home chargers from the major brands",
      "Panel and service upgrades quoted up front",
      "Load sharing when two cars share one circuit",
      "Commercial fleet and workplace charging builds",
    ],
    image: "/images/icon-5.png",
    imageAlt: "Engineer reviewing EV charging plans at a vehicle",
  },
];

/* ------------------------------------------------------------------ */
/*  Working process                                                    */
/* ------------------------------------------------------------------ */

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Site Visit & Design",
    text: "An engineer, not a salesperson, measures your roof and models your usage. You get a fixed quote within a week, good for 60 days.",
  },
  {
    step: "02",
    title: "Permits & Paperwork",
    text: "We deal with the city, the HOA, and the utility so you never stand in a line. This is usually the slowest stretch and we stay on it.",
  },
  {
    step: "03",
    title: "Install & Switch On",
    text: "Most installs wrap in one or two days. We schedule inspection, get permission to operate, and walk you through the monitoring app.",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const FAQS = [
  {
    q: "What does a home system actually cost?",
    a: "Most of our residential installs land between $18,000 and $32,000 before the federal tax credit. The final number depends on roof type, system size, and how much of your usage you want to cover. We quote fixed prices, so what we write down is what you pay.",
  },
  {
    q: "Do panels still produce on cloudy days?",
    a: "Yes, just less of it. Expect 10 to 25 percent of rated output under heavy clouds. Over a year, Central Texas gets more than 230 sunny days, which is a big part of why the math works so well here.",
  },
  {
    q: "What kind of maintenance do panels need?",
    a: "Very little. Panels have no moving parts and carry 25 year warranties. Rain keeps them reasonably clean. If output ever dips, the monitoring app flags it and we come take a look under the workmanship warranty.",
  },
  {
    q: "How long until my system is running?",
    a: "Roughly six to ten weeks from signed contract to switch on, and most of that is permits and utility approval rather than construction. The physical install itself takes one or two days in most cases.",
  },
  {
    q: "Will solar raise my property taxes?",
    a: "No. Texas exempts the added value of a solar system from property tax assessment. Your home appraises for more, but the county cannot tax the panels themselves.",
  },
];

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

export type Project = {
  title: string;
  category: string;
  size: string;
  location: string;
  image: string;
  imageAlt: string;
  blurb: string;
};

export const PROJECTS: Project[] = [
  {
    title: "The Hendrix Home",
    category: "Residential",
    size: "12.4 kW",
    location: "Austin, TX",
    image: "/images/blog-3.jpg",
    imageAlt: "Red tile roof covered in solar panels",
    blurb: "A 1960s ranch with a stubborn clay tile roof. We mounted on tile replacement hooks so the roof stayed watertight and the panels disappeared into the roofline.",
  },
  {
    title: "Fairview Business Park",
    category: "Commercial",
    size: "240 kW",
    location: "Round Rock, TX",
    image: "/images/project-engineer.jpg",
    imageAlt: "Engineer inspecting rows of commercial solar panels",
    blurb: "Four buildings, one meter, and a demand charge problem. The array cut the park's peak billing by more than half in the first summer.",
  },
  {
    title: "Prairie Gate Dairy",
    category: "Solar + Storage",
    size: "85 kW + 120 kWh",
    location: "Taylor, TX",
    image: "/images/project-solar-worker.jpg",
    imageAlt: "Worker reviewing panels at a solar farm",
    blurb: "Milkers run before dawn, so this one needed batteries as much as panels. The barn now runs through morning chores on stored sunshine.",
  },
  {
    title: "Willow Creek Barn",
    category: "Off Grid",
    size: "9.8 kW",
    location: "Dripping Springs, TX",
    image: "/images/icon-2.png",
    imageAlt: "Two installers securing solar panels in a field",
    blurb: "The grid quote came back at forty grand for a line extension. Solar, batteries, and a small backup generator came in well under that.",
  },
  {
    title: "Sunfield Elementary",
    category: "Commercial",
    size: "99 kW",
    location: "Sunfield, TX",
    image: "/images/blog-1.jpg",
    imageAlt: "Two technicians walking a solar array with a wind turbine behind",
    blurb: "A school district project funded partly by a state energy grant. The array feeds the cafeteria and gym, and doubles as a teaching tool.",
  },
  {
    title: "Gridley Storage Annex",
    category: "Solar + Storage",
    size: "310 kW",
    location: "Georgetown, TX",
    image: "/images/icon-4.png",
    imageAlt: "Technician presenting a utility scale solar installation",
    blurb: "A logistics company shaving peak demand across three shifts. One of the largest roofs we have commissioned in Williamson County.",
  },
];

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */

export const TESTIMONIALS = [
  {
    quote:
      "The quote was detailed and honest, and the crew showed up when they said they would. Production has matched their estimate within two percent for a full year now. I checked, because that is the kind of person I am.",
    name: "Derek Halvorsen",
    role: "Homeowner, Austin",
    avatar: "/images/m2.png",
  },
  {
    quote:
      "They put forty panels on our roof without interrupting a single service day. Our electric bill dropped by about three hundred dollars a month. Honestly should have called them years ago.",
    name: "Rosa Mendes",
    role: "Cafe Owner, San Marcos",
    avatar: null,
    initials: "RM",
  },
  {
    quote:
      "We got four bids. Sunspire was not the cheapest, but they were the only ones who sent an engineer instead of a closer. Two years and one hailstorm later, no regrets.",
    name: "Jake Whitfield",
    role: "Facilities Manager, Round Rock",
    avatar: "/images/m3.png",
  },
];

/* ------------------------------------------------------------------ */
/*  Stats band                                                         */
/* ------------------------------------------------------------------ */

export const STATS_BAND = [
  { value: 1900, suffix: "+", label: "Systems Installed" },
  { value: 14.2, suffix: " MW", label: "Clean Capacity Built", decimals: 1 },
  { value: 98, suffix: "%", label: "Customers Who Refer Us" },
  { value: 25, suffix: " yr", label: "Workmanship Warranty" },
];

/* ------------------------------------------------------------------ */
/*  Blog                                                               */
/* ------------------------------------------------------------------ */

export type Post = {
  title: string;
  date: string;
  read: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    title: "What Solar Actually Costs In 2026",
    date: "Feb 12, 2026",
    read: "6 min read",
    image: "/images/blog-1.jpg",
    imageAlt: "Two technicians walking a solar array",
    excerpt:
      "Real contract numbers from real Sunspire installs, broken down by roof type and system size.",
    body: [
      "Every few weeks somebody sends us a national article quoting average solar prices that look nothing like our contracts. So we pulled actual numbers from the last sixty residential jobs and put them here, rounded and anonymized.",
      "A typical Austin home system in 2026 runs between $18,000 and $32,000 before the 30 percent federal credit. Steep or cut up roofs push costs up because labor is where the money goes, not panels. Simple south facing composite roofs come in lowest, and clay tile costs more because every hook has to go in without cracking the tile.",
      "Batteries add $11,000 to $16,000 installed depending on capacity. The federal credit applies to them too when they charge from solar.",
      "Two things we tell every homeowner: ignore price per watt until the design is fixed, and throw out any quote that only shows you monthly financing payments. The contract price is the only number that matters.",
    ],
  },
  {
    title: "Do Panels Still Work When It Rains?",
    date: "Jan 28, 2026",
    read: "4 min read",
    image: "/images/blog-2.jpg",
    imageAlt: "Two solar engineers talking beside an array on a clear day",
    excerpt:
      "Cloudy day output, explained without the marketing gloss.",
    body: [
      "Short answer: yes, just less of it. Panels make power from light, not heat, and cloudy skies still deliver plenty of light. Under heavy overcast, expect 10 to 25 percent of rated output. Under bright thin clouds you might see 50 to 70 percent.",
      "Here is the part that matters: solar systems are sized around annual production, not the worst Tuesday of the year. Central Texas gets over 230 sunny days annually, so the dreary stretches are already priced into your design.",
      "Rain actually helps. It washes off dust and pollen that would otherwise shade the cells. After a long dry spell we often see production tick up after the first good storm.",
      "If a cloudy week tanks your numbers beyond what the monitoring app predicts, that is a service call, not a weather problem. The app knows the forecast. So do we.",
    ],
  },
  {
    title: "Batteries Or Backup Generators?",
    date: "Jan 9, 2026",
    read: "5 min read",
    image: "/images/project-energy.jpg",
    imageAlt: "Solar array with storage infrastructure in a field",
    excerpt:
      "We install both. Here is how they compare when the lights go out.",
    body: [
      "We spend a lot of evenings explaining this at kitchen tables, so here is the honest version.",
      "A standby generator costs less up front and runs as long as the propane tank holds. It is loud, it needs maintenance, and it does nothing for you the other 360 days a year. Fuel storage is a real hassle, and after the 2021 freeze, fuel was the thing people could not get.",
      "A battery costs more up front, runs silently, needs no fuel, and covers most homes for 8 to 14 hours of essentials. Pair it with solar and it refills itself every morning. That combo is what sold most of our battery installs after the last round of outages.",
      "Some of our off grid clients run both: battery for the everyday, generator for the freak ice storm. If your budget forces a choice, battery plus solar wins for nearly every grid connected home we work with.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export const FOOTER_LINKS: { title: string; items: { label: string; page?: PageKey; href?: string }[] }[] = [
  {
    title: "Useful Links",
    items: [
      { label: "Home", page: "home" },
      { label: "About Us", page: "about" },
      { label: "Our Services", page: "services" },
      { label: "Projects", page: "projects" },
      { label: "Contact Us", page: "contact" },
    ],
  },
  {
    title: "What We Do",
    items: [
      { label: "Residential Solar", page: "services" },
      { label: "Commercial Solar", page: "services" },
      { label: "Battery Storage", page: "services" },
      { label: "EV Charging", page: "services" },
      { label: "System Maintenance", page: "services" },
    ],
  },
];

export const DESIGNED_BY = {
  label: "Designed By Emnex AI",
  href: "https://emnexaii.space-z.ai/#contact",
};
