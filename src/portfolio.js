/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ashish Ramrakhiani's Portfolio",
  description:
    "Software engineer with 4+ years in production systems and a research track record. Former Technical Lead at Colgate (Fortune 500). Published in serverless orchestration (CCGrid'26) and automated debugging (ICSE'25). M.S. Computer Science at Oregon State.",
  og: {
    title: "Ashish Ramrakhiani Portfolio",
    type: "website",
    url: "https://ashish-ramrakhiani.github.io",
  },
};

//Home Page
const greeting = {
  title: "Ashish Ramrakhiani",
  logo_name: "AshishRamrakhiani",
  nickname: "ashish-ramrakhiani",
  subTitle:
    "I've spent 4+ years at the intersection of industry and research — leading backend teams at Colgate, co-founding a startup, and publishing in top software engineering venues. Whether I'm designing distributed systems for 200+ markets or localizing real-world bugs with zero training data, I care about building things that are both rigorous and useful. Currently wrapping up my M.S. at Oregon State (GPA 3.96), and actively looking for engineering roles where depth matters.",
  resumeLink:
    "https://drive.google.com/file/d/19sEHPtuiy7D918DtrTGc2wRqgaz2_Qrd/view?usp=drive_link",
  portfolio_repository: "https://github.com/Ashish-Ramrakhiani",
  githubProfile: "https://github.com/Ashish-Ramrakhiani",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Ashish-Ramrakhiani",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashish-ramrakhiani/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ramrakhiyaniashish@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Gmail",
    link: "mailto:ramrakha@oregonstate.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Phone",
    link: "tel:+15412862203",
    fontAwesomeIcon: "fas fa-phone",
    backgroundColor: "#4CAF50",
  },
];

const skills = {
  data: [
    {
      title: "Languages & Frameworks",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in multiple programming languages including Java, Python, JavaScript, TypeScript, SAP ABAP, C++, C#, R, and Julia",
        "⚡ Experience with modern frameworks like React, Redux, Node.js, Express.js, Spring Boot, FastAPI, Next.js, and Bootstrap",
        "⚡ Mobile development with Flutter and Android, plus web technologies like HTML, CSS, and PHP",
        "⚡ Database expertise with SQL and specialized in enterprise applications with SAP ABAP and Hibernate/JPA",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: { color: "#007396" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Julia",
          fontAwesomeClassname: "simple-icons:julia",
          style: { color: "#9558B2" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: { color: "#339933" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: { color: "#02569B" },
        },
      ],
    },
    {
      title: "Backend & Development Tools",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building robust REST APIs and GraphQL services with comprehensive authentication using Spring Framework and Spring Boot",
        "⚡ Event-driven architecture with Redis caching, Kafka-based invalidation, and RabbitMQ message routing for high-throughput systems",
        "⚡ CI/CD pipeline setup with Git, GitHub Actions, Jenkins, Vercel, and Docker containerization",
        "⚡ OAuth 2.0 and JWT authentication systems for secure microservices architecture",
      ],
      softwareSkills: [
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: { color: "#DC382D" },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: { color: "#231F20" },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: { color: "#FF6600" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#000000" },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: { color: "#E10098" },
        },
        {
          skillName: "JWT",
          fontAwesomeClassname: "simple-icons:jsonwebtokens",
          style: { color: "#000000" },
        },
      ],
    },
    {
      title: "Cloud & Enterprise Systems",
      fileName: "DesignImg",
      skills: [
        "⚡ Multi-cloud expertise with AWS (S3, Lambda, EC2, RDS), GCP (Cloud Run, BigQuery), and Azure for scalable deployments",
        "⚡ Serverless computing with OpenWhisk, SLURM, MinIO, and container orchestration with Kubernetes and Terraform",
        "⚡ Data warehousing and pipeline orchestration with Snowflake, DBT, and Apache Airflow for enterprise-scale analytics",
        "⚡ SAP enterprise systems including MDG, HANA, Fiori/UI5, Webdynpro, OData, CDS Views, and BRF+",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: { color: "#4285F4" },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0089D6" },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: { color: "#7B42BC" },
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "simple-icons:snowflake",
          style: { color: "#29B5E8" },
        },
        {
          skillName: "DBT",
          fontAwesomeClassname: "simple-icons:dbt",
          style: { color: "#FF694A" },
        },
        {
          skillName: "SAP",
          fontAwesomeClassname: "simple-icons:sap",
          style: { color: "#0FAAFF" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "MinIO",
          fontAwesomeClassname: "simple-icons:minio",
          style: { color: "#C72E29" },
        },
      ],
    },
    {
      title: "Data & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Advanced machine learning with Scikit-learn, TensorFlow for deep learning and genetic programming applications",
        "⚡ Specialized in sentiment analysis, unsupervised learning techniques, and real-time data analysis",
        "⚡ Database management with MongoDB, MySQL, Oracle, Snowflake, and modern data tools like DBT",
        "⚡ Data pipeline orchestration with Apache Airflow and visualization with Tableau and Sigma",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Scikit Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Apache Airflow",
          fontAwesomeClassname: "simple-icons:apacheairflow",
          style: { color: "#017CEE" },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: { color: "#E97627" },
        },
      ],
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/ramrakha/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Oregon State University",
      subtitle: "M.S. in Computer Science",
      logo_path: "osu_logo.png",
      alt_name: "Oregon State University",
      duration: "Sept 2023 - Mar 2026",
      descriptions: [
        "⚡ GPA: 3.96/4.0 — Graduate Research Assistant across two research labs",
        "⚡ Developed BugSleuth (ICSE'25): unsupervised genetic algorithm that localizes 56.8% of 704 real-world bugs in top-5 predictions, outperforming supervised deep learning and LLM baselines",
        "⚡ Architected EphFlow (CCGrid'26): multi-cloud serverless middleware extending AWS Lambda execution limits from 15 min to 90+ minutes via ephemeral EC2 provisioning",
        "⚡ Built language-agnostic RPC client libraries and a React-based visual DAG composer for serverless pipeline configuration",
      ],
      website_link: "https://oregonstate.edu/",
    },
    {
      title: "K.J Somaiya College of Engineering",
      subtitle: "Bachelor of Technology in Computer Engineering",
      logo_path: "kjsce_logo.png",
      alt_name: "K.J Somaiya College of Engineering",
      duration: "Aug 2016 - May 2019",
      descriptions: [
        "⚡ Graduated with GPA: 9.26/10 from Mumbai University",
        "⚡ Strong foundation in computer science fundamentals and software engineering principles",
        "⚡ Participated in various technical projects and research initiatives",
        "⚡ Active involvement in coding competitions and hackathons",
      ],
      website_link: "https://kjsce.somaiya.edu/en",
    },
  ],
};

const certifications = {
  certifications: [ 
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Professional Work, Research and Entrepreneurship",
  description:
    "4+ years of professional engineering across industry, research, and entrepreneurship — from leading distributed systems at a Fortune 500 to publishing in top software engineering venues and co-founding a startup.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Professional Work",
      work: true,
      experiences: [
        {
          title: "R&D Software Engineer — Serverless Systems",
          company: "HipCastor Labs (faasr.io)",
          company_url: "https://faasr.io",
          logo_path: "faasr_logo.png",
          duration: "Sept 2024 - Present",
          location: "Corvallis, OR, USA",
          badge: ["Research", "Industry"],
          description:
            "Architected EphFlow (CCGrid'26), a multi-cloud serverless middleware that transparently extends AWS Lambda execution limits from 15 minutes to 90+ minutes via ephemeral EC2 VM provisioning; implemented the 3,600-line Python/FastAPI core from scratch. Built a React-based visual DAG composer enabling researchers to configure multi-cloud serverless pipelines, and engineered language-agnostic RPC client libraries (Python, R, Julia) with S3-based coordination validated across 1,051 invocations on AWS Lambda, GCP Cloud Run, GitHub Actions, OpenWhisk, and SLURM.",
          color: "#4285F4",
        },
        {
          title: "R&D Software Engineer — Automated Fault Localization",
          company: "ANSWER Labs",
          company_url: "https://github.com/Ashish-Ramrakhiani/BugLocalization_BugSleuth",
          logo_path: "osu_logo.png",
          duration: "Sept 2023 - Aug 2024",
          location: "Corvallis, OR, USA",
          badge: ["Research", "Industry"],
          description:
            "Developed BugSleuth (ICSE'25), an unsupervised genetic algorithm for automated fault localization that outperforms supervised deep learning and LLM baselines (CodeGen-16B) on the Defects4J benchmark with zero training data — localizing 56.8% of 704 real-world bugs in top-5 predictions. Optimized rank aggregation by framing fault localization as an optimization problem using custom Spearman Footrule fitness, achieving a 3.3s average runtime per bug.",
          color: "#DC6900",
        },
        {
          title: "Technical Lead & Senior Software Engineer",
          company: "Colgate Global Business Services",
          company_url: "https://www.colgatepalmolive.com/",
          logo_path: "colgate_logo.png",
          duration: "Aug 2019 - Aug 2023",
          location: "Mumbai, India",
          badge: "Industry",
          description:
            "Promoted to Technical Lead to direct 6 engineers; authored and defended system design documents for global deployments passing rigorous Enterprise Architecture Board reviews. Reduced API response time from 12s to under 1s (92%) for a 15-country platform by architecting a Redis caching tier with Kafka-based invalidation. Orchestrated org-wide migration from SAP to Snowflake, DBT, and Airflow, reducing data freshness lag from 24 hours to 15-minute intervals. Redesigned a synchronous supply-chain backend into an event-driven architecture using RabbitMQ, routing 500+ weekly product launches across parallel enterprise services. Automated manual ETL into async services, reducing end-to-end processing from 8 hours to 15 minutes (97% reduction) and saving $50K+ annually.",
          color: "#FF0000",
        },
        {
          title: "Co-Founder & Lead Developer",
          company: "Viva Mind",
          company_url: "",
          logo_path: "vivamind_logo.png",
          duration: "May 2020 - Aug 2022",
          location: "Remote",
          badge: "Entrepreneurship",
          description:
            "Co-founded a privacy-first mental health journaling platform processing 50,000+ journal entries across an 18-month production lifecycle. Engineered a Node.js/Express backend with AES-256 field-level encryption and JWT/OAuth 2.0 RBAC. Decoupled Hugging Face sentiment analysis into a Redis-backed async job queue with retry logic and exponential backoff, reducing user-facing response time from ~850ms to ~95ms. Built a React/Redux frontend with real-time mood dashboards; deployed full stack on AWS (EC2, S3) via Docker and GitHub Actions CI/CD with rolling deployments and zero downtime.",
          color: "#4CAF50",
        },
        {
          title: "Research Intern – Space Application Centre",
          company: "Indian Space Research Organization (ISRO)",
          company_url: "https://www.isro.gov.in/",
          logo_path: "isro_logo.png",
          duration: "June 2019 - July 2019",
          location: "Ahmedabad, India",
          badge: "Research",
          description:
            "Directed the 'Automated Wetland Delineation using Deep Learning' project, designing a novel atrous convolution neural network that reduced manual validation efforts by 80%, outperformed U-Net architectures, and achieved Dice coefficients of 0.68/0.65 for training/validation. The model, requiring 100x fewer parameters, served as a quality control tool for ISRO's hyperspectral image analysis.",
          color: "#FF6B35",
        },
      ],
    },
  ],
};

// Selected Projects (shown on Projects page with full card descriptions)
const selectedProjects = {
  data: [
    {
      title: "CareerMind — AI-Powered Job Search Manager",
      company: "Open Source Project",
      company_url: "https://github.com/Ashish-Ramrakhiani/CareerMind",
      logo_path: "careermind_logo.svg",
      duration: "2025 - Present",
      location: "Remote",
      badge: ["Personal Project", "Open Source"],
      description:
        "Built a full-stack, self-hosted job search management platform with AI-powered resume review, semantic job matching, and automated job discovery. Architected a multi-provider AI abstraction layer (Ollama, OpenAI, DeepSeek) using the Vercel AI SDK with streaming responses. Engineered a cron-based automation engine that scrapes job boards, deduplicates results, and runs LLM-based match scoring against stored resumes on a configurable schedule. Implemented AES-256 encryption for API key storage, NextAuth credentials auth, and a full resume builder with PDF parsing. Deployed via Docker with multi-stage Alpine builds and SQLite persistence.",
      color: "#6366F1",
    },
    {
      title: "EphFlow: Multi-Cloud Serverless Middleware",
      company: "Research Publication · CCGrid'26",
      company_url: "https://faasr.io",
      logo_path: "faasr_logo.png",
      duration: "Sept 2024 - Present",
      location: "Corvallis, OR",
      description:
        "Architected a multi-cloud serverless middleware that transparently extends AWS Lambda execution limits from 15 minutes to 90+ minutes via ephemeral EC2 VM provisioning; implemented the 3,600-line Python/FastAPI core from scratch. Built a React-based visual DAG composer enabling researchers to configure multi-cloud serverless pipelines, and engineered language-agnostic RPC client libraries (Python, R, Julia) with S3-based coordination validated across 1,051 invocations on 5 platforms.",
      color: "#4285F4",
    },
    {
      title: "BugSleuth: Automated Fault Localization",
      company: "Research Publication · ICSE'25",
      company_url: "https://github.com/Ashish-Ramrakhiani/BugLocalization_BugSleuth",
      logo_path: "bugsleuth_logo.png",
      duration: "Sept 2023 - Aug 2024",
      location: "Corvallis, OR",
      description:
        "Developed an unsupervised genetic algorithm for fault localization that outperforms supervised deep learning and LLM baselines (CodeGen-16B) on Defects4J with zero training data — localizing 56.8% of 704 real-world bugs in top-5 predictions. Framed rank aggregation as an optimization problem using custom Spearman Footrule fitness, achieving a 3.3s average runtime per bug.",
      color: "#DC6900",
    },
    {
      title: "Viva Mind: Mental Health Journaling Platform",
      company: "Startup · Co-Founded",
      company_url: "",
      logo_path: "vivamind_logo.png",
      duration: "May 2020 - Aug 2022",
      location: "Remote",
      description:
        "Co-founded a privacy-first mental health journaling platform processing 50,000+ journal entries over 18 months. Engineered a Node.js/Express backend with AES-256 field-level encryption and JWT/OAuth 2.0 RBAC. Decoupled Hugging Face sentiment analysis into a Redis-backed async job queue, reducing response time from ~850ms to ~95ms. Deployed on AWS (EC2, S3) with Docker and GitHub Actions CI/CD with zero downtime.",
      color: "#4CAF50",
    },
    {
      title: "AirBnB Backend API",
      company: "Personal Project",
      company_url: "https://github.com/Ashish-Ramrakhiani/AirBnB-Backend-API",
      logo_path: "airbnb_logo.png",
      duration: "2025",
      location: "Remote",
      description:
        "Built a production-grade hotel booking backend with Spring Boot covering the full guest lifecycle — hotel browsing, room availability, booking initialization, Stripe payment processing, and cancellation workflows. Implemented JWT-based auth with token refresh, RBAC for admin inventory management, and Stripe webhook handling across 7 API domains with 30+ endpoints. Containerized with Docker, backed by PostgreSQL.",
      color: "#FF5A5F",
    },
    {
      title: "Event-Driven Course Platform",
      company: "Personal Project",
      company_url: "https://github.com/Ashish-Ramrakhiani/course-platform",
      logo_path: "event_platform_logo.png",
      duration: "2025",
      location: "Remote",
      description:
        "Developed async Spring Boot microservices with Kafka consumer groups achieving sub-100ms end-to-end event latency. Integrated Prometheus metrics and Grafana dashboards for real-time observability of event processing rates and system performance. Deployed full stack via Docker Compose.",
      color: "#6DB33F",
    },
    {
      title: "Multi-Threaded HTTP Server",
      company: "Personal Project",
      company_url: "https://github.com/Ashish-Ramrakhiani/multithreaded-http-server",
      logo_path: "http_server_logo.png",
      duration: "2024",
      location: "Remote",
      description:
        "Built a production-ready HTTP/1.1 server from scratch in Java featuring a configurable thread pool and connection pooling to handle concurrent request dispatching. Includes real-time throughput monitoring, directory traversal protection, and a live web dashboard for load testing.",
      color: "#2E7D32",
    },
    {
      title: "AI-Powered Stock Tracking & Alert System",
      company: "Personal Project",
      company_url: "https://github.com/Ashish-Ramrakhiani/stock-tracker-agent",
      logo_path: "stock_tracker_logo.jpg",
      duration: "2025",
      location: "Remote",
      description:
        "Architected a real-time stock monitoring system with AI-driven market analysis and automated SMS notifications. Built multi-agent architecture using OpenAI's Agents SDK for natural language command processing and contextual alert generation. Integrated 24/7 background scheduling and Twilio REST webhook endpoints.",
      color: "#2196F3",
    },
    {
      title: "JWT Authentication Microservice",
      company: "Personal Project",
      company_url: "https://github.com/Ashish-Ramrakhiani/authservice",
      logo_path: "auth_service_logo.png",
      duration: "2025",
      location: "Remote",
      description:
        "Production-ready Spring Boot JWT auth microservice with stateless access tokens, secure refresh token rotation stored in MySQL, RBAC with many-to-many user-role relationships, and BCrypt password hashing. Built with Spring Security 6, Java 17, and custom JWT filter chain integration.",
      color: "#6DB33F",
    },
    {
      title: "Automated Wetland Delineation",
      company: "Research · ISRO Space Application Centre",
      company_url: "https://www.isro.gov.in/",
      logo_path: "isro_logo.png",
      duration: "June 2019 - July 2019",
      location: "Ahmedabad, India",
      description:
        "Designed a novel atrous CNN for hyperspectral wetland mapping that outperformed U-Net with 100× fewer parameters. Achieved Dice coefficients of 0.68/0.65 (train/val) and reduced manual delineation effort by 80%. Deployed as a quality control tool for ISRO's LISS-III imagery analysis pipeline.",
      color: "#FF6B35",
    },
    {
      title: "College Recommendation System",
      company: "Academic Project",
      company_url: "",
      logo_path: "college_rec_logo.png",
      duration: "2018 - 2019",
      location: "Mumbai, India",
      description:
        "Developed a Flutter mobile app recommending engineering colleges based on user profiles. Built a Python web scraper using BeautifulSoup and a Random Forest recommendation algorithm achieving 97.89% accuracy.",
      color: "#9C27B0",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects demonstrate expertise in serverless computing, machine learning, full-stack development, and enterprise systems. Each project showcases practical solutions to real-world problems with measurable impact.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Research contributions in software engineering and computer science.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "ephflow-ccgrid26-pub",
      name: "EphFlow: Extending AWS Lambda Execution Limits via Ephemeral VM Provisioning (CCGrid'26)",
      createdAt: "2026-01-01T00:00:00Z",
      description: "Architected a multi-cloud serverless middleware that transparently extends AWS Lambda execution limits from 15 minutes to 90+ minutes via ephemeral EC2 VM provisioning. Implemented a 3,600-line Python/FastAPI core from scratch and validated the framework across 5 platforms (AWS Lambda, GCP Cloud Run, GitHub Actions, OpenWhisk, SLURM) with 1,051 invocations.",
      url: "https://faasr.io",
    },
    {
      id: "bugsleuth-icse25-pub",
      name: "BugSleuth: Unsupervised Fault Localization using Genetic Programming (ICSE'25)",
      createdAt: "2025-01-01T00:00:00Z",
      description: "Developed an unsupervised genetic algorithm for automated fault localization that outperforms supervised deep learning and LLM baselines (CodeGen-16B) on the Defects4J benchmark with zero training data — localizing 56.8% of 704 real-world bugs in top-5 predictions. Achieved a 3.3s average runtime per bug using custom Spearman Footrule fitness for rank aggregation.",
      url: "https://github.com/Ashish-Ramrakhiani/BugLocalization_BugSleuth/",
    },
  ],
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashish2.png",
    description:
      "I'm available for software engineering opportunities, research collaborations, and consulting projects. Feel free to reach out for full-time positions, internships, or technical discussions. I respond promptly to all professional inquiries.",
  },
  blogSection: {
    title: "Research & Technical Writing",
    subtitle:
      "I share insights from my research in software engineering, machine learning applications, and enterprise system optimization through technical articles and academic publications.",
    link: "https://github.com/Ashish-Ramrakhiani/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Corvallis, OR, USA",
    locality: "Corvallis",
    country: "USA",
    region: "Oregon",
    postalCode: "97331",
    streetAddress: "Oregon State University",
    avatar_image_path: "address_image.svg",
    location_map_link:"https://www.google.com/maps/place/Oregon+State+University,+Corvallis,+OR",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+1 (541) 286-2203",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  selectedProjects,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};