import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Sparkles, UserRound } from "lucide-react";
import { type CSSProperties, useEffect, useRef, useState } from "react";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yazhene-saminathan",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/YazheneS",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:yazh.yazhene@gmail.com",
    icon: Mail,
  },
];

const projects = [
  {
    title: "Automated Prescription Digitization System",
    description:
      "Full-stack MERN platform that digitizes handwritten prescriptions using Azure OCR and Groq LLM parsing.",
    tags: ["MERN", "Azure", "LLM", "JWT Auth"],
    highlights: [
      "85%+ extraction accuracy",
      "Role-based access control",
      "Deployed on Azure VM with Nginx",
    ],
    link: "https://github.com/YazheneS/doctorPrescription",
    accent: "from-[#2c1f14] to-[#1b1511]",
    preview: "bg-[#3b2a1e]",
  },
  {
    title: "Club Management System",
    description:
      "Full-stack web app for managing club activities, events, and member coordination.",
    tags: ["JavaScript", "Firebase", "Firestore"],
    highlights: [
      "Event scheduling workflows",
      "Real-time data sync",
      "Role-based access control",
    ],
    link: "https://github.com/YazheneS/club-management",
    accent: "from-[#171d2b] to-[#101522]",
    preview: "bg-[#271f18]",
  },
  {
    title: "PocketCFO - AI-Powered Financial Management",
    description:
      "Modular AI finance platform enabling natural-language transaction logging and analysis.",
    tags: ["FastAPI", "Chainlit", "Ollama", "Docker"],
    highlights: [
      "LLM-powered conversational interface",
      "Advanced filtering/pagination",
      "CSV/PDF export",
    ],
    link: "https://github.com/YazheneS/pocketCFO",
    accent: "from-[#231a23] to-[#15121a]",
    preview: "bg-[#381b12]",
  },
  {
    title: "Traffic Police Management System",
    description:
      "Platform for managing drivers, vehicles, violations, and challans across a 5-member team.",
    tags: ["React", "Node.js", "MySQL"],
    highlights: ["Dashboard UI", "REST API", "Payment module"],
    link: "https://github.com/YazheneS/Traffic-police-management-system",
    accent: "from-[#181f1e] to-[#111317]",
    preview: "bg-[#2f1d10]",
  },
  {
    title: "Menu Management API CRUD",
    description:
      "REST API for creating, updating, and managing menu items with a clean CRUD workflow.",
    tags: ["REST API", "CRUD", "Backend"],
    highlights: [
      "Structured menu data handling",
      "API-driven workflows",
      "GitHub project showcase",
    ],
    link: "https://github.com/YazheneS/Menu-Management-API-CRUD",
    accent: "from-[#171a1f] to-[#111215]",
    preview: "bg-[#2f3b1e]",
  },
  {
    title: "Student Result Report Generator",
    description:
      "Tool for generating student result reports from academic data in a simple, reusable workflow.",
    tags: ["Automation", "Reporting", "Data Handling"],
    highlights: [
      "Automated report generation",
      "Student result summaries",
      "Easy project demonstration",
    ],
    link: "https://github.com/YazheneS/Student-result-report-generator",
    accent: "from-[#18141b] to-[#101114]",
    preview: "bg-[#4a1f16]",
  },
];

const skills = {
  Languages: [
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
  ],
  Frontend: [
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Angular",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      logo: "https://cdn.simpleicons.org/express/FFFFFF",
    },
    {
      name: "Spring Boot",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
      name: "FastAPI",
      logo: "https://cdn.simpleicons.org/fastapi/009688",
    },
  ],
  Database: [
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "Oracle SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
    },
    {
      name: "Firestore",
      logo: "https://cdn.simpleicons.org/firebase/FFCA28",
    },
  ],
  Tools: [
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.simpleicons.org/github/FFFFFF",
    },
    {
      name: "Firebase",
      logo: "https://cdn.simpleicons.org/firebase/FFCA28",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "Postman",
      logo: "https://cdn.simpleicons.org/postman/FF6C37",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
  ],
};

const education = [
  {
    title: "B.E. Computer Science & Engineering",
    school: "Madras Institute of Technology, Anna University",
    year: "2024 - 2028",
    description: "CGPA: 9.14 (up to 3rd semester) | Chennai, India",
  },
  {
    title: "HSC (Class XII)",
    school: "Santa Maria Matriculation Hr. Sec. School",
    year: "2024",
    description: "96.33% (578/600) | Trichy, India",
  },
  {
    title: "SSLC (Class X)",
    school: "Santa Maria Matriculation Hr. Sec. School",
    year: "2022",
    description: "92.4% (462/500) | Trichy, India",
  },
];

const totalSkillCount = Object.values(skills).reduce(
  (count, group) => count + group.length,
  0
);

const portfolioStats = [
  { label: "Projects", value: projects.length, suffix: "+" },
  { label: "CGPA", value: 9.14, decimals: 2 },
  { label: "Skills", value: totalSkillCount, suffix: "+" },
];

const nightMarks = Array.from({ length: 72 }, (_, index) => {
  const types = ["dot", "ring", "dash", "slash", "chevron", "spark"] as const;
  const columns = 12;
  const row = Math.floor(index / columns);
  const column = index % columns;

  return {
    id: index,
    type: types[index % types.length],
    left: 4 + column * 8 + ((row * 3 + index) % 5),
    top: 6 + row * 11 + ((column * 2 + index) % 6),
    delay: (index % 9) * 0.35,
  };
});

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [statValues, setStatValues] = useState(() =>
    portfolioStats.map(() => 0)
  );
  const scrollFrame = useRef<number | null>(null);
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    active: false,
    enabled: false,
    visible: false,
  });

  useEffect(() => {
    const updateScrollState = () => {
      scrollFrame.current = null;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? window.scrollY / documentHeight : 0;

      setScrolled(window.scrollY > 50);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
      setParallaxY(window.scrollY * 0.08);
    };
    const handleScroll = () => {
      if (scrollFrame.current === null) {
        scrollFrame.current = window.requestAnimationFrame(updateScrollState);
      }
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollFrame.current !== null) {
        window.cancelAnimationFrame(scrollFrame.current);
      }
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const revealElements =
      document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (prefersReducedMotion) {
      revealElements.forEach(element => element.classList.add("is-visible"));
      setStatsVisible(true);
      return;
    }

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.16 }
    );

    revealElements.forEach(element => revealObserver.observe(element));

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const statElement = document.querySelector("[data-stats]");
    if (!statElement) return;

    const statsObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          setStatsVisible(true);
          statsObserver.disconnect();
        });
      },
      { threshold: 0.35 }
    );

    statsObserver.observe(statElement);
    return () => statsObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return;

    const duration = 900;
    const start = performance.now();
    let animationFrame = 0;

    const animateStats = (time: number) => {
      const elapsed = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);

      setStatValues(portfolioStats.map(stat => stat.value * eased));

      if (elapsed < 1) {
        animationFrame = window.requestAnimationFrame(animateStats);
      }
    };

    animationFrame = window.requestAnimationFrame(animateStats);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [statsVisible]);

  useEffect(() => {
    const sectionIds = navigationItems.map(item => item.href.slice(1));
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const navObserver = new IntersectionObserver(
      entries => {
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach(section => navObserver.observe(section));
    return () => navObserver.disconnect();
  }, []);

  useEffect(() => {
    const pointerFine = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => {
      setCursor(current => ({
        ...current,
        enabled: pointerFine.matches,
        visible: pointerFine.matches ? current.visible : false,
      }));
    };
    const handleMouseMove = (event: MouseEvent) => {
      const target = event.target as Element | null;
      setCursor({
        x: event.clientX,
        y: event.clientY,
        active: Boolean(
          target?.closest("a, button, [role='button'], .cursor-magnetic")
        ),
        enabled: pointerFine.matches,
        visible: pointerFine.matches,
      });
    };
    const handleMouseLeave = () => {
      setCursor(current => ({ ...current, visible: false }));
    };

    updateEnabled();
    pointerFine.addEventListener("change", updateEnabled);
    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      pointerFine.removeEventListener("change", updateEnabled);
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  const headerClass = scrolled
    ? "bg-[#090b10]/80 backdrop-blur-md border-b border-white/10"
    : "bg-transparent";

  return (
    <div
      className={`portfolio-shell min-h-screen overflow-hidden bg-[#090b10] text-[#ece7de] ${cursor.enabled ? "cursor-none" : ""}`}
      style={
        {
          "--scroll-progress": scrollProgress,
          "--parallax-y": `${parallaxY}px`,
          "--cursor-x": `${cursor.x}px`,
          "--cursor-y": `${cursor.y}px`,
        } as CSSProperties
      }
    >
      <div aria-hidden="true" className="scroll-progress" />
      <div
        aria-hidden="true"
        className={`hero-cursor-glow ${cursor.enabled && activeSection === "about" ? "is-visible" : ""}`}
      />
      <div
        aria-hidden="true"
        className={`portfolio-cursor ${cursor.active ? "is-active" : ""} ${cursor.visible ? "is-visible" : ""}`}
      />
      <div className="parallax-field pointer-events-none fixed inset-0">
        <div className="night-aurora animate-aurora absolute inset-0" />
        <div className="night-vignette absolute inset-0" />
        <div className="night-sky absolute inset-0">
          {nightMarks.map(mark => (
            <span
              key={mark.id}
              className={`night-mark night-mark-${mark.type}`}
              style={
                {
                  left: `${mark.left}%`,
                  top: `${mark.top}%`,
                  "--mark-delay": `${mark.delay}s`,
                } as CSSProperties
              }
            />
          ))}
        </div>
        <svg
          aria-hidden="true"
          className="hero-line-art absolute right-[5%] top-12 hidden h-80 w-[34rem] text-[#a783ff] lg:block"
          viewBox="0 0 560 320"
          fill="none"
        >
          <path
            className="line-draw"
            d="M385 54h54c15 0 27 12 27 27s-12 27-27 27h-54c-15 0-27-12-27-27s12-27 27-27Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            className="line-draw line-draw-delay"
            d="M334 92h26M460 92h24M500 92h10M342 55h-20M310 55h-36M365 145c26-40 84-38 110 1 24 36 8 85-34 101-35 13-75-2-91-35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            className="line-draw line-draw-delay-2"
            d="M290 204h88c14 0 14-20 0-20h-28c-14 0-14-20 0-20h77c14 0 14-20 0-20h-20c-14 0-14-20 0-20h31"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            className="line-draw line-draw-delay-3"
            d="M254 227h85M236 246h51M404 246h42M350 218c0-21 29-21 29 0 0 21-29 21-29 0Zm-28 23c0-18 25-18 25 0 0 18-25 18-25 0Zm55 11c0-17 24-17 24 0 0 17-24 17-24 0Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="520" cy="64" r="8" stroke="currentColor" strokeWidth="2" />
          <path
            d="M505 31v16M497 39h16M526 19l5 10 10 5-10 5-5 10-5-10-10-5 10-5 5-10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          aria-hidden="true"
          className="footer-horizon absolute bottom-0 left-0 h-56 w-full text-[#8e92ff]"
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 188c146 32 248 49 390 36 178-17 262-83 434-71 160 12 244 87 408 65 82-12 145-46 208-88v130H0V188Z"
            fill="rgba(141,146,255,0.10)"
          />
          <path
            d="M0 222h1440M0 252h1440M612 222l62-60 62 60M642 222l32-60 36 60M574 222l38-42 37 42M726 222l31-36 35 36"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.72"
          />
          <path
            d="M144 222v-52m0 0-14 12m14-12 14 12m-14 8-18 10m18-10 18 10m-18 9-22 11m22-11 22 11M216 222v-36m0 0-12 10m12-10 12 10m-12 8-16 9m16-9 16 9M952 222v-58m0 0-15 12m15-12 15 12m-15 10-20 10m20-10 20 10m-20 10-24 12m24-12 24 12M1230 222v-48m0 0-14 12m14-12 14 12m-14 9-18 10m18-10 18 10M1292 222v-68m0 0-17 13m17-13 17 13m-17 13-22 11m22-11 22 11m-22 13-25 13m25-13 25 13"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.64"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M142 222h-70c-22 0-22-26 0-26h56M1272 222h-70c-22 0-22-26 0-26h58M1075 252h170c26 0 26-24 0-24h-118M8 252h310c28 0 28-24 0-24H150"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.62"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <header
        className={`reveal-down sticky top-0 z-40 border-b border-transparent transition-all duration-300 ${headerClass}`}
      >
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:flex-nowrap lg:px-8">
          <a
            href="#about"
            className="cursor-magnetic flex items-center gap-3 text-sm text-white/70"
          >
            <div className="logo-mark flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/8 text-[10px] font-semibold tracking-[0.28em] text-white/90">
              YS
            </div>
            <span className="hidden sm:block">Yazhene S</span>
          </a>
          <nav
            aria-label="Primary navigation"
            className="order-3 flex w-full items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/55 backdrop-blur-sm sm:w-auto lg:order-2"
          >
            {navigationItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link cursor-magnetic shrink-0 rounded-full px-3 py-2 transition-colors hover:bg-white/10 hover:text-white ${activeSection === item.href.slice(1) ? "is-active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="order-2 flex items-center gap-2 text-[#a9b7ff] lg:order-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                aria-label={label}
                className="cursor-magnetic flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <section
          id="about"
          className="reveal-up relative min-h-[88vh] scroll-mt-28 pt-6 sm:pt-12"
          data-reveal
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-5">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b9aef6]">
                Portfolio
              </p>
              <h1 className="max-w-xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-white sm:text-7xl">
                <span className="hero-title-glow">Yazhene S</span>
              </h1>
              <p className="max-w-xl text-sm leading-6 text-white/55 sm:text-base">
                Computer Science Engineering student focused on practical
                software, clear systems thinking, and clean, reliable
                interfaces.
              </p>
            </div>

            <div className="relative hidden min-h-88 lg:block">
              <div className="absolute right-10 top-10 h-10 w-10 rounded-full bg-white shadow-[0_0_0_10px_rgba(255,255,255,0.06)]" />
              <div className="absolute right-14 top-28 h-px w-24 bg-white/25" />
              <div className="absolute right-14 top-36 h-16 w-16 rounded-full border border-[#9c6df0]/65" />
              <div className="absolute right-1 top-40 h-5 w-20 rounded-full border border-[#9c6df0]/75" />
              <div className="absolute right-0 top-56 h-4 w-4 rounded-full border border-[#9c6df0]/75" />
              <div className="absolute right-20 top-60 h-4 w-4 rounded-full border border-[#9c6df0]/75" />
              <div className="absolute right-6 top-36 h-28 w-28 rounded-full border border-[#9c6df0]/65" />
              <div className="absolute right-16 top-58 h-px w-16 bg-[#9c6df0]/65" />
              <div className="absolute right-24 top-55 h-3 w-3 rounded-full bg-[#9c6df0]/75" />
            </div>
          </div>

          

          <div className="mt-16 flex items-start gap-4 sm:mt-20">
            <div className="section-rail mt-2 flex flex-col items-center gap-3">
              <div className="rail-dot h-3 w-3 rounded-full bg-[#67f2b1] shadow-[0_0_0_6px_rgba(103,242,177,0.1)]" />
              <div className="rail-line h-28 w-px bg-linear-to-b from-[#67f2b1] to-[#67f2b1]/20" />
            </div>
            <div className="max-w-xl">
              <h2 className="flex items-center gap-3 text-xl font-medium text-[#86e68b] sm:text-2xl">
                <UserRound className="h-5 w-5" />
                About Me
              </h2>
              <p className="mt-8 max-w-xl text-sm leading-7 text-[#a2d4a0] sm:text-base">
                I build software with an emphasis on clarity, structure, and
                usability. My work spans full-stack applications, APIs, and
                academic projects, where I focus equally on solid implementation
                and a thoughtful user experience.
              </p>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="reveal-up relative scroll-mt-28 pt-10 sm:pt-20"
          data-reveal
        >
          <div className="flex items-start gap-4">
            <div className="section-rail mt-2 flex flex-col items-center gap-3">
              <div className="rail-dot h-3 w-3 rounded-full bg-[#f0b09f] shadow-[0_0_0_6px_rgba(240,176,159,0.09)]" />
              <div className="rail-line h-36 w-px bg-linear-to-b from-[#f0b09f] via-[#f7c5b0] to-transparent" />
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-medium text-[#f1c2b3] sm:text-3xl">
                Projects
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55">
                Selected of work spanning full-stack development, API design,
                automation, and academic coursework.
              </p>

              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                <div
                  className="card-motion card-stagger lg:col-span-2 rounded-[0.9rem] border border-white/8 bg-[#121720] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
                  data-reveal
                >
                  <h3 className="max-w-xl text-xl font-medium text-[#e7c4a6]">
                    Selected work at a glance
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-white/55">
                    <li>
                      Built software with a focus on useful workflows and clear
                      interfaces.
                    </li>
                    <li>
                      Used MERN, React, FastAPI, Firebase, and SQL-based stacks
                      across several projects.
                    </li>
                    <li>
                      Structured each repository to be easy to navigate and
                      understand at a glance.
                    </li>
                  </ul>
                </div>

                {projects.map((project, index) => {
                  const wide = index === 0 || index === 2 || index === 5;
                  const cardClass = wide ? "lg:col-span-2" : "";
                  return (
                    <article
                      key={project.title}
                      className={`card-motion card-stagger overflow-hidden rounded-[0.9rem] border border-white/8 bg-[#121720] shadow-[0_20px_60px_rgba(0,0,0,0.28)] ${cardClass}`}
                      style={{ "--stagger": index + 1 } as CSSProperties}
                      data-reveal
                    >
                      <div
                        className={`grid gap-0 ${wide ? "lg:grid-cols-[1.2fr_0.8fr]" : ""}`}
                      >
                        <div className="p-6 sm:p-7">
                          <h3 className="max-w-xl text-lg font-medium leading-snug text-[#d0aa7d] sm:text-xl">
                            {project.title}
                          </h3>
                          <ul className="mt-4 space-y-3 text-sm leading-6 text-white/58">
                            {project.highlights.map(highlight => (
                              <li key={highlight} className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#e3b08d]" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                              <span
                                key={tag}
                                className="rounded-sm border border-[#e0ae89]/20 bg-[#e0ae89]/6 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-[#e0ae89]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Button
                            asChild
                            variant="outline"
                            className="mt-5 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="h-4 w-4" />
                              Repository
                            </a>
                          </Button>
                        </div>
                        <div
                          className={`min-h-44 ${project.preview} ${wide ? "lg:min-h-full" : ""}`}
                        >
                          <div
                            className={`h-full w-full bg-linear-to-br ${project.accent}`}
                          >
                            <div className="project-preview flex h-full items-end justify-end p-6">
                              <span className="project-orb h-14 w-14 rounded-full border border-white/12" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="reveal-up relative scroll-mt-28 pt-10 sm:pt-20"
          data-reveal
        >
          <div className="flex items-start gap-4">
            <div className="section-rail mt-2 flex flex-col items-center gap-3">
              <div className="rail-dot h-3 w-3 rounded-full bg-[#d4b8ff] shadow-[0_0_0_6px_rgba(212,184,255,0.08)]" />
              <div className="rail-line h-36 w-px bg-linear-to-b from-[#d4b8ff] via-[#8fc8ff] to-transparent" />
            </div>
            <div className="w-full">
              <h2 className="flex items-center gap-3 text-2xl font-medium text-[#d7cbff] sm:text-3xl">
                <Sparkles className="h-5 w-5" />
                Skills
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55">
                Core languages, frontend, backend, database, and workflow tools
                I use to build projects.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5">
                {Object.entries(skills).map(([category, items], index) => (
                  <div
                    key={category}
                    className="card-motion card-stagger rounded-[0.9rem] border border-white/8 bg-[#121720] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
                    style={{ "--stagger": index } as CSSProperties}
                    data-reveal
                  >
                    <h3 className="text-lg font-medium text-white/85">
                      {category}
                    </h3>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {items.map((skill, skillIndex) => (
                        <div
                          key={skill.name}
                          className="skill-tile cursor-magnetic flex min-h-12 items-center gap-3 rounded-md border border-white/10 bg-white/5 px-3 py-2"
                          style={{ "--stagger": skillIndex } as CSSProperties}
                          data-reveal
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-white/10 bg-[#080a0f] p-1 shadow-inner">
                            <img
                              src={skill.logo}
                              alt={`${skill.name} logo`}
                              loading="lazy"
                              className="h-full w-full object-contain"
                            />
                          </span>
                          <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/70">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="reveal-up relative scroll-mt-28 pt-10 sm:pt-20"
          data-reveal
        >
          <div className="flex items-start gap-4">
            <div className="section-rail mt-2 flex flex-col items-center gap-3">
              <div className="rail-dot h-3 w-3 rounded-full bg-[#ffbca8] shadow-[0_0_0_6px_rgba(255,188,168,0.08)]" />
              <div className="rail-line h-36 w-px bg-linear-to-b from-[#ffbca8] via-[#f4d1a2] to-transparent" />
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-medium text-[#f0b9a7] sm:text-3xl">
                Academic background
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55">
                Education milestones that shaped my engineering foundation.
              </p>

              <div className="mt-8 space-y-5">
                {education.map((item, index) => (
                  <div
                    key={item.title}
                    className="card-motion card-stagger rounded-[0.9rem] border border-white/8 bg-[#121720] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
                    style={{ "--stagger": index } as CSSProperties}
                    data-reveal
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-white/90">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#f0b9a7]">
                          {item.school}
                        </p>
                      </div>
                      <span className="text-sm text-white/45">{item.year}</span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/55">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="reveal-up relative mt-10 scroll-mt-28 pt-12 sm:mt-16 sm:pt-16"
          data-reveal
        >
          <div className="flex items-start gap-4">
            <div className="section-rail mt-2 flex flex-col items-center gap-3">
              <div className="rail-dot h-3 w-3 rounded-full bg-[#9bb0ff] shadow-[0_0_0_6px_rgba(155,176,255,0.08)]" />
              <div className="rail-line h-24 w-px bg-linear-to-b from-[#9bb0ff] via-[#9bb0ff]/50 to-transparent" />
            </div>
            <div
              className="card-motion card-stagger w-full rounded-2xl border border-white/8 bg-[#121720] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:p-8"
              data-reveal
            >
              <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
                <div>
                  <h2 className="text-2xl font-medium text-[#a9b7ff] sm:text-3xl">
                    Contact
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/56">
                    I am open to new projects, internships, and collaborations
                    where design quality and solid implementation both matter.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={
                        href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={label}
                      className="cursor-magnetic flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#a9b7ff] transition-colors hover:bg-white/10"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="reveal-up relative border-t border-white/8 px-4 pb-10 pt-8 sm:px-6 lg:px-8"
        data-reveal
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10">
          <div className="flex items-center gap-10 text-[#a9b7ff]">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                aria-label={label}
                className="cursor-magnetic transition-opacity hover:opacity-80"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <div className="relative h-20 w-full overflow-hidden">
            <div className="absolute left-0 right-0 top-10 h-px bg-linear-to-r from-transparent via-white/12 to-transparent" />
            <div className="absolute left-[12%] bottom-4 h-8 w-px bg-white/12" />
            <div className="absolute left-[16%] bottom-4 h-14 w-px bg-white/12" />
            <div className="absolute left-[20%] bottom-4 h-10 w-px bg-white/12" />
            <div className="absolute left-[74%] bottom-4 h-14 w-px bg-white/12" />
            <div className="absolute left-[79%] bottom-4 h-8 w-px bg-white/12" />
            <div className="absolute right-[8%] top-3 h-10 w-10 rounded-full border border-white/12" />
          </div>
          <p className="text-xs text-white/32">
            (c) {new Date().getFullYear()} Yazhene S. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
