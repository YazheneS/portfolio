import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  UserRound,
} from "lucide-react";
import { type CSSProperties, useEffect, useRef, useState } from "react";

const RenderCelestialMark = ({ type }: { type: string }) => {
  switch (type) {
    case "star":
      return (
        <svg
          width="4"
          height="4"
          viewBox="0 0 4 4"
          className="text-white/20 fill-current"
        >
          <circle cx="2" cy="2" r="1" />
        </svg>
      );
    case "circle":
      return (
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          className="text-purple-400/15 stroke-current"
          fill="none"
        >
          <circle cx="4" cy="4" r="3" strokeWidth="1" />
        </svg>
      );
    case "diamond":
      return (
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          className="text-purple-400/15 stroke-current"
          fill="none"
        >
          <polygon points="4,1 7,4 4,7 1,4" strokeWidth="1" />
        </svg>
      );
    case "plus":
      return (
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          className="text-white/15 stroke-current"
        >
          <line x1="4" y1="1" x2="4" y2="7" strokeWidth="1" />
          <line x1="1" y1="4" x2="7" y2="4" strokeWidth="1" />
        </svg>
      );
    case "sparkle":
      return (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="text-purple-300/25 fill-current"
        >
          <path d="M 5 0 C 5.5,2 8,4.5 10 5 C 8,5.5 5.5,8 5 10 C 4.5,8 2,5.5 0 5 C 2,4.5 4.5,2 5 0 Z" />
        </svg>
      );
    case "line":
      return (
        <svg
          width="10"
          height="4"
          viewBox="0 0 10 4"
          className="text-white/10 stroke-current"
        >
          <line x1="1" y1="2" x2="9" y2="2" strokeWidth="1" />
        </svg>
      );
    case "dash":
      return (
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          className="text-white/10 stroke-current"
        >
          <line x1="2" y1="6" x2="6" y2="2" strokeWidth="1" />
        </svg>
      );
    default:
      return null;
  }
};

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
  {
    label: "Phone",
    href: "tel:+918903646439",
    icon: Phone,
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

const nightMarks = Array.from({ length: 70 }, (_, index) => {
  const types = [
    "star",
    "circle",
    "diamond",
    "plus",
    "sparkle",
    "line",
    "dash",
  ] as const;
  const columns = 10;
  const row = Math.floor(index / columns);
  const column = index % columns;

  return {
    id: index,
    type: types[index % types.length],
    left: 5 + column * 9 + ((row * 3 + index) % 5),
    top: 5 + row * 12 + ((column * 2 + index) % 6),
    delay: (index % 7) * 0.4,
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
        <div className="night-sky absolute inset-0 overflow-hidden">
          {nightMarks.map(mark => (
            <span
              key={mark.id}
              className="absolute pointer-events-none"
              style={
                {
                  left: `${mark.left}%`,
                  top: `${mark.top}%`,
                  transform: "translate(-50%, -50%)",
                } as CSSProperties
              }
            >
              <RenderCelestialMark type={mark.type} />
            </span>
          ))}
        </div>

        {/* Top Right Celestial Fog Artwork */}
        <div className="absolute left-0 top-[20%] -translate-y-1/2 z-0 hidden lg:block pointer-events-none">
          <svg
            width="353"
            height="125"
            viewBox="0 0 353 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M278.058 31.6022L276.286 37.5159C276.224 37.7247 276.125 37.9143 275.998 38.0716C275.87 38.229 275.716 38.3504 275.547 38.4276L270.76 40.615C269.672 41.1136 269.672 43.015 270.76 43.5137L275.547 45.7011C275.89 45.8586 276.16 46.1905 276.286 46.6127L278.057 52.5279C278.462 53.874 280.001 53.874 280.404 52.5279L282.176 46.6127C282.302 46.1921 282.572 45.8586 282.915 45.7026L287.702 43.5137C288.791 43.015 288.791 41.1136 287.702 40.6165L282.915 38.4276C282.746 38.3506 282.592 38.2292 282.464 38.0718C282.337 37.9145 282.238 37.7248 282.176 37.5159L280.405 31.6007C280 30.2561 278.461 30.2577 278.058 31.6022Z"
              stroke="#C194FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M261.276 3.82413C261.276 4.83836 260.95 5.81104 260.369 6.5282C259.789 7.24537 259.001 7.64827 258.18 7.64827C257.359 7.64827 256.572 7.24537 255.991 6.5282C255.411 5.81104 255.085 4.83836 255.085 3.82413C255.085 2.80991 255.411 1.83723 255.991 1.12006C256.572 0.402899 257.359 0 258.18 0C259.001 0 259.789 0.402899 260.369 1.12006C260.95 1.83723 261.276 2.80991 261.276 3.82413Z"
              fill="#C69AFD"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.652 109.278L31.4707 113.222C31.4286 113.361 31.3629 113.487 31.2778 113.592C31.1928 113.697 31.0905 113.778 30.9779 113.829L27.7856 115.29C27.0612 115.62 27.0612 116.889 27.7856 117.219L30.9779 118.678C31.2057 118.784 31.3865 119.006 31.4707 119.289L32.652 123.23C32.7112 123.428 32.8178 123.598 32.9575 123.718C33.0971 123.838 33.2632 123.902 33.4334 123.902C33.6035 123.902 33.7696 123.838 33.9093 123.718C34.049 123.598 34.1556 123.428 34.2147 123.23L35.396 119.289C35.4374 119.149 35.5029 119.022 35.588 118.916C35.6731 118.811 35.7758 118.73 35.8889 118.678L39.0812 117.219C39.8055 116.889 39.8055 115.62 39.0812 115.29L35.8889 113.829C35.7762 113.778 35.6738 113.697 35.5888 113.592C35.5037 113.487 35.438 113.361 35.396 113.222L34.2147 109.277C34.1556 109.08 34.049 108.91 33.9093 108.79C33.7696 108.67 33.6035 108.605 33.4334 108.605C33.2632 108.605 33.0971 108.67 32.9575 108.79C32.8178 108.91 32.7112 109.081 32.652 109.278Z"
              stroke="#C194FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M234.034 71.8935C234.034 75.139 232.99 78.2516 231.133 80.5465C229.275 82.8414 226.755 84.1307 224.128 84.1307C221.501 84.1307 218.981 82.8414 217.123 80.5465C215.265 78.2516 214.222 75.139 214.222 71.8935C214.222 68.648 215.265 65.5354 217.123 63.2405C218.981 60.9455 221.501 59.6563 224.128 59.6563C226.755 59.6563 229.275 60.9455 231.133 63.2405C232.99 65.5354 234.034 68.648 234.034 71.8935Z"
              stroke="#C194FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M55.7224 71.1289H81.7261"
              stroke="#C194FC"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M79.2496 52.7731C79.2496 53.0745 79.2014 53.3729 79.108 53.6514C79.0145 53.9298 78.8776 54.1828 78.705 54.3958C78.5324 54.6089 78.3275 54.7779 78.1021 54.8931C77.8766 55.0084 77.635 55.0676 77.391 55.0675C77.147 55.0674 76.9054 55.008 76.68 54.8925C76.4546 54.7771 76.2498 54.6079 76.0773 54.3947C75.9049 54.1815 75.7681 53.9284 75.6748 53.6499C75.5815 53.3714 75.5335 53.0729 75.5336 52.7715C75.5337 52.1628 75.7296 51.5791 76.0782 51.1488C76.4268 50.7185 76.8994 50.4768 77.3922 50.4771C77.885 50.4773 78.3575 50.7193 78.7059 51.1499C79.0542 51.5804 79.2498 52.1643 79.2496 52.7731Z"
              fill="#C69AFD"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.19138 95.6034C6.19138 96.6177 5.86522 97.5903 5.28467 98.3075C4.70412 99.0247 3.91672 99.4276 3.09569 99.4276C2.27466 99.4276 1.48726 99.0247 0.906706 98.3075C0.326152 97.5903 0 96.6177 0 95.6034C0 94.5892 0.326152 93.6165 0.906706 92.8994C1.48726 92.1822 2.27466 91.7793 3.09569 91.7793C3.91672 91.7793 4.70412 92.1822 5.28467 92.8994C5.86522 93.6165 6.19138 94.5892 6.19138 95.6034Z"
              fill="#C69AFD"
            />
            <path
              d="M191.313 113.194V102.487"
              stroke="#C194FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M195.647 107.839L186.979 107.842"
              stroke="#C194FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M132.495 52.7729H85.441"
              stroke="#C194FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M351.67 109.37H339.287"
              stroke="#C194FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M321.952 109.37H278.612"
              stroke="#C194FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="180"
            height="100"
            viewBox="0 0 364 224"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M267.101 1C286.446 1 302.13 21.5942 302.13 46.9984C302.13 63.3562 295.628 77.7195 285.831 85.8747"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M232.067 46.9984C232.067 21.5942 247.752 1 267.099 1"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M291.723 14.532C305.514 32.6405 305.514 62.0021 291.723 80.1106C280.689 94.6002 262.8 94.6002 251.766 80.1106C242.939 68.5207 242.939 49.7298 251.766 38.1399C258.827 28.869 270.276 28.869 277.337 38.1399C282.988 45.5601 282.988 57.5833 277.337 65.0018"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M323.936 67.8573C327.647 65.473 331.724 64.2369 335.855 64.2437C350.845 64.2437 363 80.2033 363 99.8871C363 119.569 350.846 135.529 335.855 135.529C326.422 135.529 318.114 129.212 313.249 119.625"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M302.464 46.4849C304 45.878 305.63 45.5535 307.318 45.5535C316.611 45.5535 324.146 55.4453 324.146 67.6475"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M354.687 125.372C344.196 139.146 327.188 139.146 316.698 125.372C308.308 114.356 308.308 96.4879 316.698 85.468C323.412 76.6532 334.296 76.6532 341.012 85.468C346.383 92.5199 346.383 103.957 341.012 111.009C339.991 112.351 338.778 113.415 337.443 114.141C336.108 114.867 334.677 115.241 333.232 115.241C331.787 115.241 330.356 114.867 329.021 114.141C327.686 113.415 326.473 112.351 325.451 111.009"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M312.783 119.026C306.277 136.771 292.451 149.019 276.448 149.019C262.303 149.019 249.858 139.45 242.668 124.974"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M242.126 124.998C236.903 136.809 227.165 144.752 216.015 144.752C203.986 144.752 193.603 135.51 188.757 122.141"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M237.308 132.982C225.431 148.577 206.175 148.577 194.298 132.982C184.796 120.506 184.796 100.277 194.298 87.8013C201.899 77.8218 214.225 77.8218 221.826 87.8013C227.907 95.7864 227.907 108.732 221.826 116.717C219.489 119.784 216.321 121.507 213.017 121.507C209.713 121.507 206.544 119.784 204.208 116.717"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M182.711 67.1021C187.952 51.3056 199.949 40.263 213.91 40.263C220.205 40.25 226.378 42.5407 231.736 46.878"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M115.631 105.833H138.241C145.787 105.833 151.903 97.8001 151.903 87.8925C151.903 77.9848 145.787 69.9541 138.241 69.9541H115.663C108.119 69.9541 102.001 61.9217 102.001 52.014V51.3878C102.001 41.4801 108.119 33.4495 115.665 33.4495H185.288"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.8548 105.832H87.0225"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M73.3928 178.461H98.6642C106.302 178.461 112.492 170.332 112.492 160.303C112.492 150.276 106.302 142.147 98.6642 142.147H73.9887"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M114.202 214.773H180.44C188.121 214.773 194.347 206.598 194.347 196.512C194.347 186.427 188.121 178.251 180.44 178.251H158.268C151.158 178.251 145.394 170.683 145.394 161.345C145.394 152.01 151.158 144.442 158.266 144.442H215.965"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M71.485 178.461C63.8485 178.461 57.6563 186.59 57.6563 196.617C57.6563 206.646 63.8485 214.773 71.4837 214.773H88.6109"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.6958 142.146H37.511"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.8287 106.251C7.19093 106.251 1 114.38 1 124.409C1 134.436 7.19093 142.565 14.8287 142.565H36.644"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M56.0771 137.62L63.926 147.579"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M45.0566 137.62L52.9055 147.579"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M100.661 113.798V98.7683"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M106.383 106.287L94.9261 106.288"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M100.661 222.321V207.291"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M106.383 214.81H94.9261"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {/* Right Middle Moon Artwork */}
        <div className="absolute right-0 top-[58%] -translate-y-1/2 z-0 hidden lg:block pointer-events-none">
          <svg
            width="481"
            height="288"
            viewBox="0 0 481 288"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[420px] h-auto"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.58001 215.659C8.58055 216.157 8.48293 216.651 8.29273 217.112C8.10253 217.572 7.82347 217.991 7.47149 218.344C7.11951 218.697 6.7015 218.977 6.24132 219.168C5.78114 219.359 5.28781 219.458 4.7895 219.458C4.29115 219.458 3.79778 219.359 3.3376 219.168C2.87741 218.976 2.45942 218.696 2.10751 218.343C1.75559 217.99 1.47665 217.572 1.28662 217.111C1.09659 216.65 0.9992 216.156 1 215.658C0.998921 214.652 1.39742 213.687 2.10787 212.974C2.81832 212.262 3.78254 211.861 4.78848 211.86C5.28688 211.86 5.78032 211.959 6.24061 212.15C6.70091 212.341 7.11904 212.621 7.47113 212.974C7.82322 213.327 8.10237 213.745 8.29263 214.206C8.4829 214.667 8.58055 215.161 8.58001 215.659Z"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M375.252 9.17021V1"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M379.847 5.5957H371.678"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M414.121 167.286C414.122 168.292 413.723 169.258 413.012 169.97C412.302 170.682 411.337 171.083 410.331 171.084C409.833 171.083 409.339 170.985 408.879 170.793C408.419 170.602 408.002 170.322 407.65 169.969C407.298 169.616 407.019 169.198 406.829 168.737C406.639 168.277 406.542 167.783 406.542 167.285C406.541 166.279 406.94 165.314 407.65 164.602C408.361 163.89 409.325 163.489 410.331 163.488C411.337 163.489 412.302 163.89 413.012 164.602C413.723 165.314 414.122 166.28 414.121 167.286Z"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M226.249 286.368H188.906"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M180.119 286.368H172.98"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M259.645 187.866C259.645 174.657 270.331 163.95 283.512 163.95C296.695 163.95 307.38 174.657 307.38 187.866C307.38 196.371 302.949 203.839 296.274 208.079"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M300.287 170.986C309.684 180.401 309.684 195.667 300.287 205.082C292.77 212.615 280.582 212.615 273.066 205.082C267.051 199.056 267.051 189.287 273.066 183.261C277.875 178.441 285.677 178.441 290.487 183.261C294.336 187.116 294.336 193.37 290.487 197.226"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M322.235 198.711C324.762 197.471 327.54 196.828 330.355 196.832C340.57 196.832 348.849 205.129 348.849 215.364C348.849 225.598 340.57 233.895 330.355 233.895C323.929 233.895 318.269 230.611 314.955 225.626"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M307.606 187.597C308.679 187.275 309.794 187.112 310.914 187.113C317.246 187.113 322.377 192.256 322.377 198.602"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M343.186 228.615C336.039 235.775 324.451 235.775 317.304 228.615C311.587 222.885 311.587 213.597 317.304 207.868C321.879 203.283 329.295 203.283 333.869 207.868C337.529 211.534 337.529 217.48 333.869 221.146"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M314.637 225.314C310.203 234.54 300.785 240.908 289.881 240.908C280.244 240.908 271.767 235.934 266.866 228.407"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M266.497 228.42C262.94 234.561 256.305 238.692 248.708 238.692C240.512 238.692 233.438 233.885 230.136 226.933"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M263.215 232.57C255.123 240.679 242.003 240.679 233.91 232.57C227.436 226.084 227.436 215.566 233.91 209.081C239.09 203.891 247.487 203.891 252.666 209.081C256.81 213.233 256.81 219.963 252.666 224.114C251.879 224.904 250.943 225.531 249.913 225.958C248.883 226.386 247.779 226.606 246.664 226.606C245.549 226.606 244.445 226.386 243.415 225.958C242.385 225.531 241.45 224.904 240.662 224.114C239.389 222.837 238.673 221.107 238.673 219.304C238.673 217.5 239.389 215.77 240.662 214.493"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M226.667 196.947C230.517 189.472 238.299 184.362 247.272 184.362C251.562 184.355 255.769 185.547 259.418 187.803"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M389.58 138.739C389.604 139.603 389.616 140.471 389.616 141.341C389.616 173.296 373.39 201.452 348.744 217.991"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M234.36 207.104C216.657 190.302 205.614 166.524 205.614 140.164C205.614 89.2503 246.804 47.9785 297.614 47.9785C318.129 47.9785 337.077 54.7087 352.378 66.0827"
              stroke="#B384F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M413.018 66.0581H430.991C437.493 66.0581 442.767 71.3391 442.767 77.8569C442.767 84.3727 437.493 89.6537 430.991 89.6537H413.018C406.518 89.6537 401.245 94.9378 401.245 101.452C401.245 107.968 406.518 113.251 413.018 113.251H468.147C474.648 113.251 479.92 118.534 479.92 125.049C479.92 131.565 474.648 136.849 468.147 136.849H363.674C357.172 136.849 351.9 131.565 351.9 125.049C351.9 118.533 357.172 113.251 363.674 113.251"
              stroke="#C498FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M374.829 113.251C381.332 113.251 386.605 107.971 386.605 101.453C386.605 94.9368 381.332 89.6547 374.829 89.6547H335.168C328.663 89.6547 323.392 84.3727 323.392 77.8559C323.392 71.3402 328.664 66.0571 335.168 66.0571H389.264"
              stroke="#C498FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M399.647 62.6094L392.868 69.1701"
              stroke="#C498FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M409.164 62.6094L402.385 69.1701"
              stroke="#C498FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M163.027 214.797H182.552C189.068 214.797 194.351 209.504 194.351 202.975C194.351 196.446 189.068 191.153 182.552 191.153H163.057C156.541 191.153 151.258 185.86 151.258 179.331V178.917C151.258 172.388 156.541 167.096 163.057 167.096H209.782"
              stroke="#C498FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M89.2429 214.797H138.32"
              stroke="#C498FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M248.497 238.728H138.359"
              stroke="#C498FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M89.2428 214.797C82.6482 214.797 77.2545 220.153 77.2545 226.762C77.2545 233.372 82.6482 238.727 89.2428 238.727H108.036"
              stroke="#C498FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M121.33 235.744L114.552 242.308"
              stroke="#C498FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M130.847 235.744L124.068 242.308"
              stroke="#C498FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M150.1 220.046V210.142"
              stroke="#C498FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M155.042 215.095L145.148 215.097"
              stroke="#C498FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <header
        className={`reveal-down fixed top-0 left-0 right-0 w-full z-[1000] border-b border-transparent transition-all duration-300 ${headerClass}`}
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
          <div className="order-2 flex items-center gap-4 text-[#a9b7ff] lg:order-3">
            <div className="flex items-center gap-2">
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
                  className="cursor-magnetic flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-[130px] sm:px-6 lg:px-8 lg:pt-24">
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
              {/* Old decorative artwork removed. New artwork is placed in the background wrapper. */}
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
              <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
                <div>
                  <h2 className="text-2xl font-medium text-[#a9b7ff] sm:text-3xl">
                    Contact
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/56">
                    I am open to new projects, internships, and collaborations
                    where design quality and solid implementation both matter.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target={
                          href.startsWith("mailto:") || href.startsWith("tel:")
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          href.startsWith("mailto:") || href.startsWith("tel:")
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

                {/* Celestial Cloud SVG Illustration */}
                <div className="relative flex items-center justify-center min-h-[220px] lg:justify-end z-0 pointer-events-none select-none">
                  <svg
                    width="405"
                    height="325"
                    viewBox="0 0 405 325"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M149.433 85.2809H73.9978C68.6986 85.2809 63.6164 87.5144 59.8693 91.49C56.1222 95.4656 54.0171 100.858 54.0171 106.48C54.0171 118.187 62.962 127.677 73.9998 127.677H105.964C117 127.677 125.947 137.165 125.947 148.874C125.947 160.581 117 170.073 105.964 170.073H36.0347C25.001 170.073 16.056 179.561 16.056 191.27C16.056 202.979 25.001 212.469 36.0347 212.469H88.5449"
                      stroke="#939AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M214.979 85.2809H231.96C242.994 85.2809 251.941 94.7691 251.941 106.48C251.941 118.187 242.994 127.677 231.958 127.677H183.886C181.263 127.677 178.665 128.225 176.241 129.29C173.817 130.355 171.614 131.916 169.759 133.885C167.904 135.853 166.432 138.19 165.428 140.762C164.424 143.334 163.907 146.09 163.908 148.874C163.908 160.581 172.851 170.073 183.886 170.073H201.869C212.902 170.073 221.847 179.561 221.847 191.27C221.847 202.979 212.902 212.469 201.869 212.469H134.295"
                      stroke="#939AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M201.708 86.5285C201.708 98.2351 192.766 107.728 181.728 107.728C170.694 107.728 161.749 98.2351 161.749 86.5285C161.749 74.822 170.694 65.3294 181.728 65.3294C192.764 65.3294 201.711 74.822 201.711 86.5307L201.708 86.5285Z"
                      stroke="#939AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M57.2365 148.045H77.2172"
                      stroke="#939AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M89.2048 148.045C89.2048 148.608 88.9941 149.147 88.6192 149.545C88.2443 149.943 87.7357 150.166 87.2055 150.166C86.6752 150.166 86.1667 149.943 85.7918 149.545C85.4168 149.147 85.2062 148.608 85.2062 148.045C85.2062 147.483 85.4168 146.943 85.7918 146.545C86.1667 146.147 86.6752 145.924 87.2055 145.924C87.7357 145.924 88.2443 146.147 88.6192 146.545C88.9941 146.943 89.2048 147.483 89.2048 148.045Z"
                      stroke="#939AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0451 107.145C12.0645 107.854 11.9498 108.559 11.7078 109.22C11.4657 109.881 11.1011 110.483 10.6358 110.992C10.1704 111.5 9.61353 111.905 8.99824 112.181C8.38295 112.457 7.72169 112.6 7.05359 112.6C6.38549 112.6 5.72411 112.458 5.10861 112.183C4.49311 111.907 3.93597 111.503 3.47018 110.995C3.00439 110.487 2.6394 109.885 2.39681 109.224C2.15422 108.564 2.03896 107.858 2.05784 107.15C2.0946 105.771 2.63656 104.461 3.5686 103.5C4.50065 102.538 5.74935 102 7.04948 101.999C8.3496 101.999 9.59872 102.536 10.5315 103.497C11.4643 104.458 12.0073 105.766 12.0451 107.145Z"
                      stroke="#939AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M111.319 219.626V202.719"
                      stroke="#939AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M119.284 211.176L103.335 211.178"
                      stroke="#939AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M336.203 73.5373V57.1259"
                      stroke="#939AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M343.937 65.3337L328.455 65.3356"
                      stroke="#939AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M402.064 30.9077C402.064 33.0898 401.247 35.1825 399.793 36.7255C398.339 38.2684 396.366 39.1352 394.31 39.1352C392.253 39.1352 390.28 38.2684 388.826 36.7255C387.372 35.1825 386.555 33.0898 386.555 30.9077C386.555 28.7257 387.372 26.633 388.826 25.09C390.28 23.547 392.253 22.6802 394.31 22.6802C396.366 22.6802 398.339 23.547 399.793 25.09C401.247 26.633 402.064 28.7257 402.064 30.9077Z"
                      stroke="#939AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M268.04 3.8084L264.71 13.3556C264.473 14.0383 263.965 14.577 263.322 14.83L254.323 18.3636C252.278 19.1663 252.278 22.2352 254.323 23.0379L263.322 26.5737C263.965 26.8245 264.473 27.3633 264.71 28.0438L268.04 37.591C268.799 39.7634 271.691 39.7634 272.448 37.591L275.778 28.0438C275.896 27.707 276.081 27.4011 276.32 27.1473C276.56 26.8936 276.848 26.6978 277.166 26.5737L286.164 23.0401C288.212 22.2352 288.212 19.1663 286.164 18.3636L277.166 14.83C276.848 14.7049 276.56 14.5083 276.32 14.2538C276.081 13.9993 275.896 13.6929 275.778 13.3556L272.448 3.8084C271.691 1.6381 268.799 1.6381 268.04 3.8084Z"
                      stroke="#939AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M159.545 287.071L156.215 296.62C156.097 296.957 155.912 297.263 155.673 297.518C155.433 297.772 155.145 297.968 154.827 298.093L145.829 301.626C143.783 302.429 143.783 305.498 145.829 306.301L154.827 309.836C155.471 310.087 155.978 310.626 156.215 311.306L159.545 320.856C160.306 323.026 163.196 323.026 163.953 320.856L167.283 311.306C167.401 310.97 167.586 310.664 167.825 310.41C168.065 310.156 168.353 309.96 168.671 309.836L177.67 306.303C179.717 305.498 179.717 302.429 177.67 301.626L168.671 298.093C168.354 297.968 168.065 297.771 167.826 297.517C167.586 297.263 167.401 296.957 167.283 296.62L163.953 287.071C163.196 284.901 160.304 284.901 159.545 287.071Z"
                      stroke="#939AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Landscape Artwork */}
      <div className="relative w-full h-[448px] overflow-visible pointer-events-none select-none hidden lg:block opacity-70">
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto max-w-none"
          viewBox="0 0 1529 448"
          preserveAspectRatio="xMidYMax meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g clip-path="url(#clip0_4_256)">
            <path
              d="M1530.59 0V448.749H-0.262787V323.096C152.529 368.944 311.958 392.211 472.334 392.066C881.082 392.066 1253 243.292 1530.59 0Z"
              fill="#EAF5FF"
              fill-opacity="0.07"
            />
            <path
              d="M153.885 258.216C153.885 258.216 164.389 256.786 164.368 250.09"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M174.86 258.186C174.86 258.186 164.356 256.786 164.336 250.09M151.759 268.351C151.759 268.351 164.282 266.631 164.272 258.585M176.923 268.3C176.923 268.3 164.314 266.631 164.304 258.585M151.759 279.354C151.759 279.354 164.293 277.635 164.272 269.599M176.955 279.303C176.955 279.303 164.336 277.635 164.325 269.599M153.715 289.498C153.715 289.498 164.347 288.039 164.347 281.223"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M175.063 289.458C175.063 289.458 164.357 288.039 164.346 281.223M153.736 300.952C153.736 300.952 164.368 299.492 164.368 292.677C164.388 299.492 175.083 300.912 175.083 300.912M164.293 251.04L164.421 314.854M218.83 323.679C218.83 323.679 229.333 322.25 229.322 315.554"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M239.836 323.649C239.836 323.649 229.332 322.25 229.322 315.554M216.746 333.813C216.746 333.813 229.28 332.095 229.258 324.049M241.909 333.813C241.909 333.813 229.301 332.144 229.279 324.099M216.768 344.807C216.768 344.807 229.301 343.089 229.28 335.053M241.931 344.807C241.931 344.807 229.322 343.138 229.301 335.103M218.735 354.961C218.735 354.961 229.365 353.503 229.365 346.686"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M239.996 354.922C239.996 354.922 229.364 353.503 229.364 346.686M229.27 316.503L228.281 368.754M1378.64 256.007C1378.64 256.007 1368.14 254.618 1368.13 247.922M1357.63 256.047C1357.63 256.047 1368.14 254.618 1368.12 247.922M1380.77 266.132C1380.77 266.132 1368.23 264.462 1368.21 256.416M1355.6 266.181C1355.6 266.181 1368.21 264.462 1368.19 256.416M1380.79 277.135C1380.79 277.135 1368.25 275.466 1368.23 267.421M1355.64 277.185C1355.64 277.185 1368.23 275.466 1368.21 267.421M1378.91 287.289C1378.91 287.289 1368.28 285.87 1368.28 279.054M1357.56 287.329C1357.56 287.329 1368.26 285.87 1368.19 279.054M1378.93 298.743C1378.93 298.743 1368.3 297.324 1368.3 290.508M1357.59 298.833C1357.59 298.833 1368.22 297.374 1368.22 290.557M1368.18 248.871L1368.31 312.676M1313.93 321.71C1313.93 321.71 1303.43 320.311 1303.41 313.615"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1292.92 321.74C1292.92 321.74 1303.43 320.311 1303.41 313.615M1316.06 331.814C1316.06 331.814 1303.52 330.145 1303.5 322.1M1290.89 331.874C1290.89 331.874 1303.5 330.156 1303.48 322.11M1316.08 342.808C1316.08 342.808 1303.54 341.139 1303.52 333.104M1290.91 342.878C1290.91 342.878 1303.52 341.16 1303.5 333.124M1314.2 352.983C1314.2 352.983 1303.57 351.563 1303.57 344.747M1292.85 353.023C1292.85 353.023 1303.54 351.563 1303.53 344.747M1303.47 314.564L1304.67 366.815M164.729 336.682L170.725 342.299L164.751 347.936M1367.22 345.767L1361.23 340.15L1367.2 334.513"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M-0.560623 315.943L186.544 315.794C194.372 315.782 200.729 321.737 200.747 329.096C200.749 330.846 200.386 332.579 199.676 334.196C198.966 335.814 197.925 337.284 196.611 338.522C193.957 341.025 190.355 342.433 186.597 342.438H185.278M187.905 369.073L239.773 368.983C241.633 368.979 243.476 369.32 245.196 369.986C246.916 370.652 248.48 371.63 249.799 372.865C251.117 374.099 252.163 375.566 252.878 377.18C253.593 378.795 253.962 380.527 253.965 382.277C253.981 385.444 252.788 388.511 250.605 390.922M196.941 369.053L162.698 369.113C160.835 369.118 158.99 368.778 157.267 368.112C155.544 367.445 153.978 366.465 152.658 365.229C151.339 363.992 150.292 362.523 149.578 360.905C148.863 359.287 148.495 357.553 148.495 355.801C148.491 354.052 148.854 352.319 149.562 350.701C150.271 349.084 151.311 347.614 152.624 346.375C153.938 345.136 155.498 344.152 157.215 343.48C158.933 342.808 160.774 342.461 162.635 342.459H167.62M1532.36 313.565L1343.47 313.705C1339.72 313.713 1336.12 315.124 1333.46 317.628C1332.15 318.868 1331.11 320.338 1330.4 321.956C1329.69 323.574 1329.33 325.307 1329.34 327.057C1329.34 328.806 1329.71 330.538 1330.42 332.153C1331.14 333.768 1332.18 335.234 1333.5 336.468C1334.82 337.703 1336.38 338.681 1338.1 339.347C1339.82 340.013 1341.67 340.354 1343.53 340.35H1344.86M1342.42 366.995L1290.55 367.085C1288.69 367.088 1286.85 367.435 1285.13 368.108C1283.41 368.78 1281.85 369.765 1280.54 371.005C1279.23 372.245 1278.19 373.716 1277.48 375.335C1276.77 376.953 1276.41 378.687 1276.41 380.437C1276.42 383.935 1277.89 387.29 1280.51 389.772M1333.32 367.005L1367.57 366.945C1371.33 366.937 1374.93 365.526 1377.59 363.022C1378.9 361.782 1379.94 360.311 1380.65 358.694C1381.36 357.076 1381.72 355.342 1381.71 353.593C1381.71 351.843 1381.34 350.111 1380.62 348.496C1379.91 346.881 1378.86 345.415 1377.54 344.181C1374.88 341.688 1371.27 340.292 1367.51 340.3H1362.53M692.044 389.802L765.844 294.995L839.708 389.543M765.844 294.995L766.046 390.522M765.939 340.75L727.604 389.012M648.202 389.862L700.176 324.469L721.597 351.514M700.176 324.469L700.293 378.978M699.719 354.542L670.526 390.702M810.333 351.484L831.638 324.229L882.549 388.563M831.638 324.229L831.744 378.738M831.181 354.302L821.869 366.395M750.088 359.059L716.41 359.119M815.001 358.949L766.524 359.029M865.965 368.894L833.095 368.953M686.845 369.993L664.903 369.724"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g opacity="0.25">
              <path
                d="M967.331 351.804C967.331 351.804 958.486 350.634 958.465 344.977"
                stroke="#939AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M949.631 351.804C949.631 351.804 958.476 350.604 958.465 344.947M969.128 360.329C969.128 360.329 958.56 358.919 958.497 352.143"
                stroke="#939AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M947.919 360.369C947.919 360.369 958.551 358.919 958.551 352.143M969.138 369.604C969.138 369.604 958.582 368.195 958.571 361.418"
                stroke="#939AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M947.94 369.644C947.94 369.644 958.571 368.195 958.571 361.418M967.554 378.158C967.554 378.158 958.603 376.97 958.582 371.223M949.577 378.188C949.577 378.188 958.582 376.97 958.571 371.193M958.518 345.787L958.603 389.702M1066.15 355.172C1066.15 355.172 1058.59 354.173 1058.58 349.345C1058.59 354.202 1051.03 355.202 1051.03 355.202M1067.68 362.448C1067.68 362.448 1058.65 361.248 1058.64 355.451M1049.57 362.478C1049.57 362.478 1058.64 361.248 1058.63 355.481M1067.69 370.363C1067.69 370.363 1058.67 369.164 1058.66 363.367M1049.59 370.403C1049.59 370.403 1058.65 369.164 1058.64 363.407M1066.34 377.669C1066.34 377.669 1058.68 376.67 1058.67 371.743M1050.99 377.699C1050.99 377.699 1058.67 376.65 1058.66 371.702M1058.62 350.035L1058.69 387.524M1035.74 333.074C1035.74 333.074 1025.21 331.685 1025.18 324.959"
                stroke="#939AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1014.67 333.114C1014.67 333.114 1025.21 331.685 1025.18 324.959M1037.87 343.218C1037.87 343.218 1025.3 341.549 1025.28 333.484M1012.64 343.268C1012.64 343.268 1025.28 341.549 1025.26 333.484M1037.89 354.252C1037.89 354.252 1025.32 352.583 1025.3 344.517M1012.66 354.302C1012.66 354.302 1025.3 352.583 1025.28 344.518M1036 364.437C1036 364.437 1025.36 363.017 1025.36 356.171M1014.61 364.476C1014.61 364.476 1025.32 363.017 1025.31 356.171M1036.03 375.92C1036.03 375.92 1025.4 374.501 1025.4 367.654M1014.63 375.95C1014.63 375.95 1025.34 374.501 1025.33 367.654M1025.25 325.918L1025.38 389.892M1001.31 287.749C1001.31 287.749 990.773 286.36 990.763 279.634M980.247 287.839C980.247 287.839 990.772 286.41 990.762 279.684M1003.43 297.894C1003.43 297.894 990.868 296.225 990.857 288.159M978.218 297.944C978.218 297.944 990.847 296.225 990.836 288.159M1003.45 308.927C1003.45 308.927 990.889 307.258 990.879 299.193M978.238 308.977C978.238 308.977 990.868 307.258 990.857 299.193M1001.57 319.112C1001.57 319.112 990.942 317.693 990.942 310.846M980.173 319.152C980.173 319.152 990.889 317.693 990.879 310.846M1001.59 330.596C1001.59 330.596 990.963 329.166 990.963 322.33M980.205 330.626C980.205 330.626 990.921 329.166 990.9 322.33M1001.62 341.889C1001.62 341.889 990.985 340.47 990.985 333.624M980.227 341.929C980.227 341.929 990.943 340.47 990.922 333.624M1001.65 354.572C1001.65 354.572 991.017 353.153 991.017 346.316M980.247 354.612C980.247 354.612 990.964 353.153 990.953 346.317M1001.67 367.254C1001.67 367.254 991.038 365.835 991.038 358.999M980.279 367.295C980.279 367.295 990.996 365.835 990.974 358.999M990.815 280.593L991.038 389.953M479.553 356.231C479.553 356.231 471.994 355.232 471.984 350.404C471.994 355.251 464.436 356.251 464.436 356.251M481.073 363.507C481.073 363.507 472.058 362.308 472.048 356.511M462.98 363.537C462.98 363.537 472.048 362.308 472.037 356.541M481.094 371.423C481.094 371.423 472.08 370.223 472.068 364.426M462.99 371.462C462.99 371.462 472.058 370.223 472.048 364.467M479.744 378.729C479.744 378.729 472.09 377.729 472.08 372.802M464.383 378.789C464.383 378.789 472.08 377.74 472.068 372.791M472.016 351.084L472.101 390.892M559.689 352.533C559.689 352.533 568.534 351.334 568.523 345.687C568.534 351.334 577.389 352.503 577.389 352.503M557.934 361.069C557.934 361.069 568.491 359.629 568.481 352.853M579.122 361.039C579.122 361.039 568.491 359.629 568.491 352.853M557.956 370.343C557.956 370.343 568.512 368.904 568.502 362.128"
                stroke="#939AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M579.122 370.313C579.122 370.313 568.491 368.904 568.491 362.128M559.572 378.899C559.572 378.899 568.534 377.669 568.512 371.902M577.559 378.869C577.559 378.869 568.544 377.669 568.534 371.922M568.481 346.487L568.576 390.402M491.215 334.063C491.215 334.063 501.74 332.624 501.729 325.908"
                stroke="#939AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M512.275 334.024C512.275 334.024 501.739 332.624 501.73 325.908M489.121 344.218C489.121 344.218 501.687 342.489 501.665 334.434M514.348 344.168C514.348 344.168 501.708 342.489 501.686 334.434M489.153 355.242C489.153 355.242 501.708 353.522 501.687 345.467M514.369 355.202C514.369 355.202 501.729 353.522 501.707 345.467M491.077 365.416C491.077 365.416 501.708 363.957 501.708 357.12M512.466 365.376C512.466 365.376 501.75 363.957 501.739 357.12M491.098 376.899C491.098 376.899 501.729 375.441 501.729 368.604M512.498 376.859C512.498 376.859 501.772 375.441 501.761 368.604M501.676 326.857L501.803 390.832M525.458 288.609C525.458 288.609 535.981 287.18 535.971 280.464C535.981 287.181 546.517 288.569 546.517 288.569M523.374 298.763C523.374 298.763 535.929 297.044 535.908 288.979M548.59 298.723C548.59 298.723 535.95 297.044 535.928 288.979M523.395 309.827C523.395 309.827 535.95 308.108 535.939 300.043M548.612 309.747C548.612 309.747 535.971 308.078 535.95 300.012M525.319 319.972C525.319 319.972 535.95 318.512 535.95 311.666M546.719 319.931C546.719 319.931 535.993 318.512 535.981 311.666M525.341 331.455C525.341 331.455 535.972 329.995 535.972 323.15M546.74 331.414C546.74 331.414 536.013 329.995 536.003 323.15M525.361 342.749C525.361 342.749 535.993 341.289 535.993 334.453M546.762 342.709C546.762 342.709 536.035 341.289 536.024 334.453M525.393 355.432C525.393 355.432 536.024 353.972 536.024 347.136M546.783 355.391C546.783 355.391 536.067 353.972 536.046 347.136M525.415 368.114C525.415 368.114 536.046 366.655 536.046 359.819M546.815 368.075C546.815 368.075 536.088 366.655 536.078 359.819M535.918 281.413L536.141 390.771"
                stroke="#939AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <g opacity="0.25">
              <path
                d="M1533.43 414.028L-2.33578 416.327M1225.85 389.782C1223.5 389.719 1221.17 390.25 1219.11 391.32C1217.05 392.39 1215.33 393.96 1214.13 395.867C1212.94 397.773 1212.31 399.946 1212.31 402.16C1212.31 404.374 1212.94 406.547 1214.13 408.453C1215.33 410.36 1217.05 411.93 1219.11 413C1221.17 414.07 1223.5 414.601 1225.85 414.538M1180.67 414.428C1171.28 414.445 1163.68 421.617 1163.69 430.449C1163.71 439.281 1171.34 446.427 1180.74 446.41M304.642 391.261C306.995 391.194 309.324 391.721 311.387 392.787C313.45 393.853 315.171 395.42 316.372 397.324C317.573 399.228 318.209 401.4 318.214 403.614C318.219 405.827 317.592 408.002 316.4 409.91C315.207 411.819 313.492 413.392 311.434 414.466C309.375 415.54 307.048 416.076 304.695 416.017M350.557 415.767C353.47 415.762 356.332 416.477 358.858 417.842C361.383 419.207 363.482 421.172 364.944 423.542C366.406 425.911 367.178 428.6 367.184 431.339C367.189 434.077 366.428 436.769 364.976 439.143C363.524 441.518 361.433 443.491 358.913 444.865C356.393 446.239 353.533 446.965 350.621 446.97"
                stroke="#939AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              opacity="0.25"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1128.5 159.521C1127.68 159.557 1126.87 159.37 1126.16 158.984C1125.45 158.598 1124.88 158.028 1124.51 157.342C1124.15 156.683 1123.94 155.962 1123.89 155.223C1123.89 154.878 1123.75 154.548 1123.49 154.304C1123.23 154.06 1122.88 153.923 1122.51 153.923C1122.14 153.923 1121.79 154.06 1121.53 154.304C1121.27 154.548 1121.13 154.878 1121.13 155.223C1121.13 155.791 1121.02 156.355 1120.79 156.881C1120.56 157.407 1120.22 157.885 1119.79 158.287C1119.37 158.689 1118.86 159.007 1118.3 159.222C1117.74 159.437 1117.14 159.546 1116.54 159.541C1116.35 159.535 1116.17 159.564 1115.99 159.627C1115.82 159.69 1115.66 159.784 1115.53 159.906C1115.4 160.027 1115.29 160.172 1115.22 160.333C1115.15 160.493 1115.11 160.666 1115.11 160.84C1115.11 161.015 1115.15 161.187 1115.22 161.348C1115.29 161.508 1115.4 161.654 1115.53 161.775C1115.66 161.896 1115.82 161.991 1115.99 162.053C1116.17 162.116 1116.35 162.145 1116.54 162.139C1117.34 162.114 1118.13 162.299 1118.83 162.673C1119.53 163.047 1120.1 163.596 1120.49 164.258C1120.87 164.936 1121.09 165.682 1121.14 166.447C1121.16 167.154 1121.77 167.721 1122.52 167.727C1122.88 167.724 1123.23 167.587 1123.49 167.346C1123.74 167.105 1123.89 166.778 1123.89 166.437C1123.89 165.869 1124.01 165.306 1124.24 164.781C1124.47 164.255 1124.8 163.778 1125.23 163.377C1125.66 162.975 1126.17 162.657 1126.72 162.441C1127.28 162.225 1127.88 162.116 1128.48 162.119C1128.84 162.104 1129.18 161.96 1129.42 161.718C1129.67 161.476 1129.8 161.155 1129.8 160.82C1129.8 160.488 1129.67 160.169 1129.42 159.928C1129.18 159.686 1128.85 159.541 1128.5 159.521Z"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M816.755 232.23C815.913 232.263 815.078 232.069 814.349 231.671C813.62 231.272 813.027 230.686 812.64 229.981C812.271 229.301 812.055 228.556 812.003 227.793C812.003 227.438 811.853 227.097 811.586 226.845C811.319 226.594 810.956 226.453 810.579 226.453C810.201 226.453 809.838 226.594 809.571 226.845C809.304 227.097 809.154 227.438 809.154 227.793C809.157 228.379 809.036 228.961 808.799 229.503C808.562 230.045 808.213 230.538 807.772 230.952C807.331 231.367 806.807 231.695 806.23 231.918C805.654 232.141 805.036 232.254 804.412 232.251C804.055 232.28 803.723 232.435 803.481 232.683C803.239 232.932 803.105 233.257 803.105 233.595C803.105 233.932 803.239 234.257 803.481 234.506C803.723 234.754 804.055 234.909 804.412 234.939C805.24 234.907 806.06 235.094 806.781 235.477C807.502 235.86 808.096 236.425 808.495 237.107C808.885 237.811 809.113 238.584 809.164 239.376C809.187 240.103 809.815 240.685 810.589 240.695C810.964 240.693 811.323 240.552 811.589 240.304C811.856 240.055 812.008 239.719 812.014 239.366C812.009 238.78 812.129 238.199 812.365 237.657C812.601 237.115 812.949 236.622 813.389 236.208C813.829 235.793 814.352 235.465 814.928 235.242C815.504 235.019 816.121 234.905 816.744 234.909C816.934 234.913 817.123 234.881 817.299 234.816C817.476 234.751 817.637 234.653 817.773 234.528C817.908 234.403 818.016 234.254 818.09 234.089C818.164 233.925 818.202 233.748 818.202 233.569C818.202 233.391 818.164 233.214 818.09 233.05C818.016 232.885 817.908 232.736 817.773 232.611C817.637 232.486 817.476 232.388 817.299 232.323C817.123 232.258 816.934 232.226 816.744 232.23H816.755ZM1017.21 212.961C1016.62 212.978 1016.03 212.838 1015.51 212.558C1015 212.277 1014.58 211.866 1014.3 211.372C1014.04 210.889 1013.89 210.362 1013.85 209.823C1013.78 209.623 1013.65 209.449 1013.47 209.325C1013.28 209.202 1013.07 209.136 1012.84 209.136C1012.62 209.136 1012.4 209.202 1012.22 209.325C1012.04 209.449 1011.9 209.623 1011.83 209.823C1011.84 210.237 1011.75 210.647 1011.59 211.031C1011.42 211.414 1011.18 211.762 1010.87 212.055C1010.55 212.349 1010.18 212.58 1009.78 212.738C1009.37 212.895 1008.93 212.974 1008.49 212.971C1008.28 213.036 1008.1 213.164 1007.97 213.334C1007.83 213.505 1007.76 213.71 1007.76 213.92C1007.76 214.131 1007.83 214.336 1007.97 214.507C1008.1 214.677 1008.28 214.804 1008.49 214.87C1009.08 214.846 1009.66 214.976 1010.17 215.247C1010.68 215.517 1011.1 215.916 1011.38 216.399C1011.65 216.893 1011.82 217.439 1011.85 217.998C1011.89 218.523 1012.36 218.929 1012.92 218.927C1013.19 218.928 1013.45 218.833 1013.64 218.66C1013.84 218.488 1013.96 218.251 1013.98 217.998C1013.97 217.584 1014.06 217.174 1014.22 216.79C1014.39 216.407 1014.64 216.058 1014.95 215.765C1015.26 215.472 1015.63 215.24 1016.03 215.083C1016.44 214.926 1016.88 214.847 1017.32 214.85C1017.57 214.824 1017.79 214.714 1017.96 214.54C1018.13 214.365 1018.22 214.139 1018.22 213.905C1018.22 213.671 1018.13 213.446 1017.96 213.271C1017.79 213.097 1017.57 212.987 1017.32 212.961H1017.21Z"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M286.831 182.297C287.232 180.809 286.275 179.297 284.693 178.92C283.111 178.542 281.503 179.442 281.102 180.929C280.701 182.417 281.658 183.929 283.24 184.306C284.822 184.684 286.43 183.784 286.831 182.297Z"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1210.91 271.064C1211.31 269.576 1210.35 268.064 1208.77 267.687C1207.19 267.309 1205.58 268.209 1205.18 269.696C1204.78 271.184 1205.73 272.696 1207.32 273.073C1208.9 273.451 1210.51 272.551 1210.91 271.064Z"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1254.01 149.959C1254.41 148.472 1253.46 146.96 1251.88 146.582C1250.29 146.204 1248.69 147.104 1248.28 148.592C1247.88 150.079 1248.84 151.591 1250.42 151.969C1252 152.346 1253.61 151.447 1254.01 149.959Z"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.25"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M625.101 289.838C625.944 289.871 626.78 289.676 627.511 289.278C628.241 288.88 628.836 288.294 629.226 287.589C629.595 286.912 629.808 286.17 629.852 285.41C629.883 285.073 630.047 284.76 630.312 284.531C630.576 284.302 630.923 284.175 631.282 284.175C631.642 284.175 631.988 284.302 632.253 284.531C632.518 284.76 632.682 285.073 632.712 285.41C632.708 285.997 632.827 286.578 633.063 287.121C633.299 287.664 633.647 288.157 634.087 288.572C634.527 288.988 635.05 289.317 635.626 289.541C636.202 289.765 636.819 289.88 637.442 289.878C637.82 289.878 638.182 290.019 638.449 290.27C638.716 290.521 638.866 290.862 638.866 291.217C638.866 291.572 638.716 291.913 638.449 292.164C638.182 292.416 637.82 292.557 637.442 292.557C636.614 292.527 635.793 292.715 635.072 293.1C634.351 293.484 633.759 294.051 633.361 294.735C632.968 295.438 632.74 296.211 632.691 297.004C632.68 297.355 632.524 297.688 632.256 297.933C631.988 298.177 631.629 298.314 631.256 298.313C630.882 298.311 630.524 298.17 630.259 297.921C629.995 297.673 629.845 297.336 629.842 296.984C629.845 296.399 629.725 295.819 629.488 295.278C629.252 294.737 628.903 294.246 628.463 293.832C628.023 293.418 627.501 293.091 626.925 292.869C626.35 292.646 625.734 292.533 625.112 292.537C624.754 292.508 624.42 292.354 624.177 292.105C623.934 291.856 623.799 291.53 623.799 291.192C623.799 290.854 623.934 290.528 624.177 290.279C624.42 290.031 624.754 289.876 625.112 289.848L625.101 289.838ZM495.648 209.063C496.356 209.09 497.058 208.926 497.672 208.592C498.285 208.257 498.785 207.766 499.113 207.175C499.424 206.599 499.606 205.97 499.645 205.326C499.672 205.042 499.811 204.778 500.034 204.586C500.257 204.394 500.549 204.287 500.852 204.287C501.154 204.287 501.446 204.394 501.669 204.586C501.893 204.778 502.031 205.042 502.058 205.326C502.052 205.82 502.152 206.31 502.35 206.768C502.548 207.226 502.841 207.642 503.212 207.992C503.584 208.342 504.025 208.619 504.512 208.806C504.998 208.994 505.519 209.088 506.045 209.083C506.205 209.08 506.365 209.106 506.514 209.161C506.663 209.216 506.799 209.298 506.914 209.404C507.029 209.509 507.12 209.635 507.182 209.774C507.245 209.913 507.277 210.062 507.277 210.213C507.277 210.364 507.245 210.513 507.182 210.652C507.12 210.791 507.029 210.917 506.914 211.022C506.799 211.127 506.663 211.21 506.514 211.265C506.365 211.32 506.205 211.346 506.045 211.342C505.348 211.317 504.658 211.475 504.052 211.798C503.445 212.121 502.946 212.596 502.611 213.171C502.279 213.761 502.087 214.413 502.048 215.08C502.039 215.377 501.908 215.659 501.682 215.866C501.455 216.073 501.152 216.189 500.836 216.188C500.52 216.188 500.218 216.071 499.995 215.861C499.771 215.651 499.646 215.367 499.645 215.07C499.646 214.577 499.542 214.088 499.341 213.632C499.14 213.177 498.846 212.763 498.474 212.415C498.103 212.066 497.662 211.791 497.177 211.603C496.692 211.416 496.172 211.32 495.648 211.322C495.487 211.326 495.328 211.299 495.179 211.244C495.029 211.189 494.893 211.107 494.779 211.002C494.664 210.896 494.573 210.771 494.51 210.632C494.448 210.493 494.416 210.343 494.416 210.193C494.416 210.042 494.448 209.892 494.51 209.753C494.573 209.615 494.664 209.489 494.779 209.383C494.893 209.278 495.029 209.196 495.179 209.141C495.328 209.086 495.487 209.059 495.648 209.063Z"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1533.37 389.412L-2.38905 391.701M1394.51 131.676C1397.48 126.257 1399.16 120.296 1399.44 114.207C1399.71 108.117 1398.58 102.043 1396.12 96.4054M1310.53 106.381C1310.23 108.367 1310.08 110.371 1310.08 112.377C1310.08 130.68 1322.67 146.883 1341.22 152.441C1359.77 157.998 1380.01 151.634 1391.27 136.704M1393.19 90.8691C1384.1 76.5466 1366.86 68.6309 1349.26 70.6919C1331.65 72.7528 1317 84.4015 1311.92 100.384M65.8935 222.576C66.4937 222.599 67.0886 222.462 67.6096 222.18C68.1306 221.899 68.5565 221.485 68.8385 220.986C69.098 220.507 69.2498 219.984 69.2844 219.447C69.3097 219.213 69.4265 218.996 69.6121 218.839C69.7977 218.681 70.0389 218.593 70.289 218.593C70.5391 218.593 70.7804 218.681 70.966 218.839C71.1516 218.996 71.2683 219.213 71.2936 219.447C71.2921 219.861 71.3778 220.271 71.5456 220.654C71.7134 221.037 71.96 221.385 72.2713 221.677C72.5826 221.97 72.9523 222.202 73.3593 222.359C73.7662 222.517 74.2022 222.597 74.6423 222.595C74.8904 222.62 75.12 222.73 75.2869 222.905C75.4538 223.079 75.5461 223.305 75.5461 223.54C75.5461 223.775 75.4538 224.001 75.2869 224.175C75.12 224.35 74.8904 224.46 74.6423 224.485C74.0584 224.468 73.481 224.603 72.9731 224.875C72.4651 225.146 72.0462 225.543 71.7619 226.023C71.4886 226.52 71.329 227.065 71.2936 227.623C71.2546 228.147 70.7903 228.553 70.2305 228.552C69.9705 228.538 69.7251 228.434 69.5409 228.261C69.3567 228.088 69.2464 227.857 69.2311 227.612C69.2354 227.199 69.1521 226.789 68.9859 226.406C68.8197 226.024 68.574 225.676 68.2632 225.384C67.9523 225.091 67.5827 224.86 67.1758 224.704C66.7689 224.548 66.333 224.47 65.8935 224.474C65.6812 224.408 65.4963 224.281 65.3653 224.111C65.2342 223.94 65.1636 223.735 65.1636 223.525C65.1636 223.315 65.2342 223.11 65.3653 222.939C65.4963 222.769 65.6812 222.642 65.8935 222.576ZM1317.09 52.9704L1318.91 57.6077C1319.04 57.9388 1319.32 58.2003 1319.67 58.3269L1324.6 60.0365C1324.85 60.1246 1325.06 60.2807 1325.21 60.4842C1325.36 60.6877 1325.44 60.9289 1325.44 61.176C1325.44 61.423 1325.36 61.6643 1325.21 61.8678C1325.06 62.0712 1324.85 62.2274 1324.6 62.3155L1319.67 64.0235C1319.32 64.1531 1319.04 64.4139 1318.91 64.7435L1317.09 69.3808C1316.99 69.6118 1316.83 69.8106 1316.61 69.9509C1316.4 70.0911 1316.14 70.1662 1315.88 70.1662C1315.61 70.1662 1315.36 70.0911 1315.14 69.9509C1314.92 69.8106 1314.76 69.6118 1314.66 69.3808L1312.85 64.7435C1312.78 64.5804 1312.68 64.4324 1312.54 64.3086C1312.41 64.1848 1312.25 64.088 1312.08 64.0243L1307.15 62.3155C1306.9 62.2274 1306.69 62.0712 1306.54 61.8678C1306.39 61.6643 1306.31 61.423 1306.31 61.176C1306.31 60.9289 1306.39 60.6877 1306.54 60.4842C1306.69 60.2807 1306.9 60.1246 1307.15 60.0365L1312.08 58.3277C1312.43 58.2003 1312.71 57.9388 1312.85 57.6085L1314.66 52.9704C1314.76 52.7394 1314.92 52.5406 1315.14 52.4003C1315.36 52.2601 1315.61 52.185 1315.88 52.185C1316.14 52.185 1316.4 52.2601 1316.61 52.4003C1316.83 52.5406 1316.99 52.7394 1317.09 52.9704Z"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1394.58 171.734C1397.59 171.734 1400.03 169.438 1400.03 166.607C1400.03 163.775 1397.59 161.479 1394.58 161.479C1391.57 161.479 1389.12 163.775 1389.12 166.607C1389.12 169.438 1391.57 171.734 1394.58 171.734Z"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1357.49 93.6178C1358.95 93.6178 1360.14 92.4992 1360.14 91.1193C1360.14 89.7394 1358.95 88.6208 1357.49 88.6208C1356.02 88.6208 1354.83 89.7394 1354.83 91.1193C1354.83 92.4992 1356.02 93.6178 1357.49 93.6178Z"
              fill="#939AFF"
            />
            <path
              d="M1321.73 106.161H1305.99M1299.94 106.161H1296.2M1398.11 91.5291H1385.82M1415.12 91.5291H1409.8"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1404.04 92.5285C1404.63 92.5285 1405.1 92.0811 1405.1 91.5291C1405.1 90.9772 1404.63 90.5297 1404.04 90.5297C1403.45 90.5297 1402.98 90.9772 1402.98 91.5291C1402.98 92.0811 1403.45 92.5285 1404.04 92.5285Z"
              fill="#939AFF"
            />
            <path
              d="M1402.78 136.414H1386.18"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1380.86 137.413C1381.45 137.413 1381.93 136.966 1381.93 136.414C1381.93 135.862 1381.45 135.414 1380.86 135.414C1380.28 135.414 1379.8 135.862 1379.8 136.414C1379.8 136.966 1380.28 137.413 1380.86 137.413Z"
              fill="#939AFF"
            />
            <path
              d="M1339.29 124.86V116.894M1335.04 120.882H1343.54"
              stroke="#939AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_4_256">
              <rect width="1529" height="448" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

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
