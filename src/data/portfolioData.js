export const personalInfo = {
  name: "MUGISHA Thicien",
  title: "Principal Full Stack Architect",
  subtitle: "Building the Next Generation of Hyper-Scale Web Experiences & Interactive Graphics.",
  bio: "A highly passionate software engineer specializing in crafting scalable backend services, high-performance frontend architectures, and immersive interactive graphics. Driven by efficiency, modern UI/UX design patterns, and clean code principles.",
  cvUrl: "#", // Mock CV URL or downloadable
  email: "thicien@dev.io",
  location: "San Francisco, CA / Remote",
  github: "https://github.com/thicien",
  linkedin: "https://linkedin.com/in/thicien",
  twitter: "https://twitter.com/thicien",
};

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js / Next.js", level: 95, icon: "React" },
      { name: "Tailwind CSS", level: 98, icon: "Tailwind" },
      { name: "TypeScript", level: 90, icon: "TS" },
      { name: "Three.js / WebGL", level: 80, icon: "Three" },
      { name: "Framer Motion", level: 92, icon: "Framer" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js / Express", level: 92, icon: "Node" },
      { name: "Python / FastAPI", level: 85, icon: "Python" },
      { name: "GraphQL / REST APIs", level: 94, icon: "API" },
      { name: "Docker & K8s", level: 78, icon: "DevOps" },
    ]
  },
  {
    category: "Database & Cloud",
    skills: [
      { name: "PostgreSQL & MongoDB", level: 88, icon: "DB" },
      { name: "Redis (Caching)", level: 82, icon: "Redis" },
      { name: "AWS (S3, EC2, Lambda)", level: 85, icon: "AWS" },
      { name: "Vercel / Netlify", level: 95, icon: "Vercel" },
    ]
  },
  {
    category: "Tools & Core Concepts",
    skills: [
      { name: "Git & GitHub CI/CD", level: 92, icon: "Git" },
      { name: "Figma (UI Design)", level: 80, icon: "Figma" },
      { name: "System Architecture", level: 88, icon: "Arch" },
      { name: "Performance Optimization", level: 90, icon: "Perf" },
    ]
  }
];

export const projectsData = [
  {
    id: "quantum-flow",
    title: "QuantumFlow Dashboard",
    category: "Frontend",
    shortDesc: "A real-time telemetry visualization platform processing over 50,000 events per second with sub-10ms rendering latency.",
    desc: "QuantumFlow is a premium telemetry dashboard designed for high-frequency trading and live sensor data. It utilizes custom WebGL rendering and canvas optimizations to sustain 60 FPS while displaying complex charts, scatter plots, and network graphs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Three.js", "Tailwind CSS", "WebSockets"],
    liveUrl: "https://quantum-flow.vercel.app",
    githubUrl: "https://github.com/thicien/quantum-flow",
    features: [
      "Dynamic canvas-based grid rendering for high-frequency charts",
      "Real-time state synchronization using custom React Context + WebSockets",
      "Interactive 3D network architecture topology visualizer using Three.js",
      "Optimized DOM footprint with virtualization for long event tables"
    ],
    challenges: "Handling thousands of incoming data payloads without blocking the UI thread or triggering excessive React re-renders.",
    solutions: "Implemented an offscreen worker to buffer and downsample telemetry streams, coupled with custom React state throttling and canvas overlays."
  },
  {
    id: "nova-ecom",
    title: "Nova headless e-Commerce",
    category: "Full Stack",
    shortDesc: "Ultra-fast headless commerce platform with 99%+ Lighthouse score and customized dynamic checkout integration.",
    desc: "Nova is a state-of-the-art headless commerce engine using Next.js on the frontend and an optimized Node.js microservice architecture on the backend. Designed to be blazingly fast and SEO optimal.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Stripe API"],
    liveUrl: "https://nova-shop.vercel.app",
    githubUrl: "https://github.com/thicien/nova-ecom",
    features: [
      "Stripe integration with custom payment element and pre-authorization checkout",
      "Advanced fuzzy search powered by MongoDB Atlas Search and multi-level facet filtering",
      "Incremental Static Regeneration (ISR) ensuring instant page loads under 200ms",
      "Responsive admin dashboard with live order tracking and stock alerts"
    ],
    challenges: "Synchronizing high-velocity promotional flash sales inventory updates in real time to prevent double-purchasing.",
    solutions: "Leveraged Redis distributed locks and transactional MongoDB operations to serialize item checkouts during high-demand events."
  },
  {
    id: "hologrid-database",
    title: "HoloGrid Spatial DBMS",
    category: "Backend",
    shortDesc: "High-performance spatial database engine optimized for indexing high-dimensional geographical vector data.",
    desc: "HoloGrid is an experimental spatial indexing system designed for fast querying of geographical overlays and nearest-neighbor search. Includes a visual dashboard for querying and indexing validation.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["FastAPI", "Python", "React", "PostGIS", "Tailwind CSS"],
    liveUrl: "https://hologrid.vercel.app",
    githubUrl: "https://github.com/thicien/hologrid",
    features: [
      "Advanced R-Tree spatial indexing with interactive canvas visualization",
      "Highly responsive Python API capable of processing geo queries in less than 5ms",
      "Custom GeoJSON parser and visualizer supporting large multi-polygon datasets",
      "Automated DB backup pipelines with integrated AWS S3 sync"
    ],
    challenges: "Visualizing 10,000+ geographical boundary polygons smoothly in a standard web browser environment.",
    solutions: "Used custom SVG rendering and dynamic bounding box filtering (viewport clipping) to render only active geographic entities on screen."
  }
];

export const experienceData = [
  {
    role: "Senior Software Architect",
    company: "Nexus Labs",
    duration: "2024 - Present",
    desc: "Lead a high-performing engineering squad building high-throughput dashboard software. Architected micro-frontend modules using Next.js and Module Federation, improving build performance by 40% and site reliability by 99.9%.",
    tech: ["Next.js", "TypeScript", "GraphQL", "AWS", "Kubernetes"]
  },
  {
    role: "Full Stack Engineer",
    company: "Vertex Solutions",
    duration: "2022 - 2024",
    desc: "Engineered headless commerce backends and dynamic web interfaces. Developed customized canvas charts, real-time analytics graphs, and fully accessible Stripe-integrated checkout elements.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "Tailwind CSS"]
  },
  {
    role: "Software Development Intern",
    company: "CloudBound Inc.",
    duration: "2021 - 2022",
    desc: "Developed internal tools and automated serverless pipelines. Written Lambda functions for automated daily telemetry exports and resolved high-priority responsive UI layout bugs.",
    tech: ["JavaScript", "Python", "AWS Lambda", "Git", "CSS"]
  }
];

export const achievementsData = [
  {
    title: "Discovered Passion for Programming",
    date: "2018",
    desc: "Wrote first line of code in Python and fell in love with software architecture."
  },
  {
    title: "First Commercial Web App Released",
    date: "2020",
    desc: "Launched a localized delivery portal helping local small businesses survive remote transitions."
  },
  {
    title: "Mastered React & Core State Architectures",
    date: "2021",
    desc: "Dived deep into Virtual DOM internals, Redux, Zustand, and concurrent rendering."
  },
  {
    title: "AWS Certified Developer - Associate",
    date: "2022",
    desc: "Achieved official AWS Cloud Certification validation demonstrating infrastructure capabilities."
  },
  {
    title: "1st Place Winner - Nexus Hackathon",
    date: "2023",
    desc: "Led a team of three to build a real-time collaborative code visualizer in 36 hours."
  },
  {
    title: "Launched Hologrid DBMS Open Source",
    date: "2024",
    desc: "Released open-source spatial database tool, garnering over 1,500 GitHub Stars in two weeks."
  }
];

export const testimonialsData = [
  {
    name: "Dr. Sarah Jenkins",
    role: "VP of Engineering, Nexus Labs",
    feedback: "Thicien possesses a rare combination of pure technical mastery and strong user empathy. He architected our telemetry dashboard, turning a slow legacy application into a lightning-fast experience that completely wowed our clients.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Alex Rivera",
    role: "Founder, NovaCommerce",
    feedback: "Working with Thicien to build our headless commerce store was an absolute pleasure. He solved our critical race-condition issue with Redis within hours and designed a dynamic, beautiful UI that improved our conversion rate by 34%.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Eléna Rostova",
    role: "Lead UI Developer, CreativeFlow",
    feedback: "Thicien is the most design-focused full-stack developer I've worked with. He writes clean, predictable backend APIs while maintaining a sharp eye for layout, micro-interactions, and premium UI animations. Highly recommended!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  }
];
