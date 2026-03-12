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
  subtitle: "Professional Work, Projects, Research and Entrepreneurship",
  description:
    "I have extensive experience in enterprise software development, research, and entrepreneurship. My work spans from optimizing large-scale SAP systems to developing cutting-edge research in fault localization and building successful startups.",
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
          description:
            "Architected EphFlow (CCGrid'26), a multi-cloud serverless middleware that transparently extends AWS Lambda execution limits from 15 minutes to 90+ minutes via ephemeral EC2 VM provisioning; implemented the 3,600-line Python/FastAPI core from scratch. Built a React-based visual DAG composer enabling researchers to configure multi-cloud serverless pipelines, and engineered language-agnostic RPC client libraries (Python, R, Julia) with S3-based coordination validated across 1,051 invocations on AWS Lambda, GCP Cloud Run, GitHub Actions, OpenWhisk, and SLURM.",
          color: "#4285F4",
        },
        {
          title: "R&D Software Engineer — Automated Fault Localization",
          company: "ANSWER Labs, Oregon State University",
          company_url: "https://github.com/Ashish-Ramrakhiani/BugLocalization_BugSleuth",
          logo_path: "osu_logo.png",
          duration: "Sept 2023 - Aug 2024",
          location: "Corvallis, OR, USA",
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
          description:
            "Directed the 'Automated Wetland Delineation using Deep Learning' project, designing a novel atrous convolution neural network that reduced manual validation efforts by 80%, outperformed U-Net architectures, and achieved Dice coefficients of 0.68/0.65 for training/validation. The model, requiring 100x fewer parameters, served as a quality control tool for ISRO's hyperspectral image analysis.",
          color: "#FF6B35",
        },
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title: "FaaSr: Multi-Cloud Serverless Orchestration Framework",
          company: "FaaSr",
          company_url: "https://github.com/FaaSr/",
          logo_path: "faasr_logo.png",
          duration: "Sept 2024 - Present",
          location: "Corvallis, Oregon",
          description:
            "Architected and developed a production-grade serverless middleware framework that abstracts multi-cloud complexity through DAG-based workflow orchestration, enabling seamless deployment across 5+ cloud platforms (AWS Lambda, GCP Cloud Run, GitHub Actions, OpenWhisk, SLURM HPC). Engineered robust authentication systems with JWT token validation and OAuth 2.0 flows, designed fault-tolerant RPC architecture with automated retry mechanisms, and built comprehensive CI/CD pipelines with automated Docker containerization. Implemented intelligent workflow validation, dependency management, and real-time monitoring systems, reducing deployment complexity by 80% while maintaining enterprise-grade security and scalability standards.",
          color: "#4285F4",
        },
        {
          title: "BugSleuth: Unsupervised Bug Localization",
          company: "Research Project",
          company_url: "https://www.github.com/Ashish-Ramrakhiani/BugLocalization_BugSleuth",
          logo_path: "bugsleuth_logo.png",
          duration: "January 2024 - February 2025",
          location: "Corvallis, Oregon",
          description:
            "Developed an unsupervised bug localization technique using genetic programming, achieving real-time debugging with millisecond runtime and localizing 56% of bugs from 704 real-world projects in the top-5 ranked suspicious statements, surpassing state-of-the-art methods. This research contributes to advancing automated debugging techniques in software engineering.",
          color: "#FF5722",
        },
        {
          title: "Event-Driven Microservices Platform",
          company: "Personal Project",
          company_url: "https://github.com/Ashish-Ramrakhiani/course-platform",
          logo_path: "event_platform_logo.png",
          duration: "2025",
          location: "Remote",
          description:
            "Architected and developed a production-grade event-driven microservices system demonstrating real-time data processing and comprehensive monitoring capabilities. Engineered Spring Boot producer-consumer microservices with RESTful APIs handling course purchase and enrollment events, implementing proper CORS configuration and JSON event serialization. Designed Apache Kafka event streaming architecture with 3-partition topic configuration, processing asynchronous events through consumer groups and generating custom Micrometer counters for business metrics. Integrated Prometheus metrics collection and Grafana visualization for real-time dashboards displaying event processing rates, system performance, and business intelligence analytics. Built React-based event generation interface as a testing tool for demonstrating system capabilities and triggering various event types. Implemented Docker Compose orchestration for seamless deployment of Kafka ecosystem, monitoring stack, and microservices, showcasing enterprise-ready distributed system design with comprehensive observability and scalable event processing architecture.",
          color: "#6DB33F",
        },
        
        {
          title: "AirBnB Backend API",
          company: "Personal Project",
          company_url: "https://github.com/Ashish-Ramrakhiani/AirBnB-Backend-API",
          logo_path: "airbnb_logo.png",
          duration: "2025",
          location: "Remote",
          description:
            "Built a production-grade hotel booking backend with Spring Boot covering the full guest lifecycle — hotel browsing, room availability, booking initialization, Stripe payment processing, and cancellation workflows. Implemented JWT-based authentication with token refresh, role-based access control for admin inventory management (rooms, hotels, guests), and Stripe webhook handling for payment capture. Organized across 7 API domains with 30+ endpoints, containerized with Docker, and backed by PostgreSQL with a normalized relational schema.",
          color: "#FF5A5F",
        },
        {
          title: "Multi-threaded HTTP Server",
          company: "Personal Project",
          company_url: "https://github.com/Ashish-Ramrakhiani/HttpServer",
          logo_path: "http_server_logo.png",
          duration: "2024",
          location: "Remote",
          description:
            "Architected and implemented a production-ready HTTP/1.1 server from scratch using Java, showcasing advanced concurrent programming and network engineering expertise. Engineered thread pool-based architecture with configurable pool size, achieving optimal resource utilization and handling multiple simultaneous connections efficiently. Built comprehensive RESTful API endpoints with real-time server monitoring, statistics tracking, and health checks using JSON responses with proper HTTP status codes. Implemented robust security measures including directory traversal attack prevention, input sanitization, and comprehensive error handling with custom 404/501 pages. Developed modern responsive web interface with real-time updates, interactive load testing capabilities, and dynamic content manipulation using vanilla JavaScript. Demonstrated enterprise-grade practices with proper resource management, atomic request counting, memory usage monitoring, and CORS support for cross-origin requests.",
          color: "#2E7D32",
        },
        {
          title: "JWT Authentication Microservice",
          company: "Personal Project",
          company_url: "https://github.com/Ashish-Ramrakhiani/authservice",
          logo_path: "auth_service_logo.png",
          duration: "2025",
          location: "Remote",
          description:
            "Architected and developed a production-ready JWT authentication microservice using Spring Boot with comprehensive user management and token lifecycle capabilities. Implemented stateless authentication architecture featuring short-lived access tokens with secure refresh token rotation stored in MySQL database. Engineered role-based access control (RBAC) with many-to-many user-role relationships, custom JWT filter chain integration, and BCrypt password hashing for enterprise-grade security. Built RESTful API endpoints for user registration, authentication, and token refresh with proper HTTP status codes and comprehensive error handling. Demonstrated advanced Spring Security configuration with custom authentication providers, stateless session management, and CORS/CSRF security policies, showcasing microservices architecture patterns suitable for distributed systems.",
          color: "#6DB33F",
        },
        {
          title: "Enterprise Train Ticket Booking System",
          company: "Personal Project",
          company_url: "https://github.com/Ashish-Ramrakhiani/TicketBookingSystem",
          logo_path: "train_booking_logo.png",
          duration: "2024",
          location: "Remote",
          description:
            "Architected and developed a comprehensive console-based train booking system demonstrating enterprise-grade software engineering practices. Implemented secure user authentication with BCrypt password hashing and salt generation, designed clean architecture with service layer patterns, and built intelligent train search algorithms with route validation. Engineered real-time seat management with atomic transactions, integrated Jackson for efficient JSON data persistence, and utilized modern Java features including Stream API, Optional, and lambda expressions. Showcased professional development practices with Gradle build automation, comprehensive error handling, input validation, and modular design patterns suitable for scaling to REST API and microservices architecture.",
          color: "#2E7D32",
        },
        {
          title: "VivaMind: Mental Health & Wellness Tracker",
          company: "Startup Project",
          company_url: "",
          logo_path: "vivamind_logo.png",
          duration: "May 2020 - Aug 2022",
          location: "Remote",
          description:
            "Engineered a full-stack wellness tracking platform on the MERN stack, architected with modular microservices for journaling, sentiment analysis, and analytics. Designed and deployed a pipeline for real-time sentiment analysis of journal entries, integrated with Node.js APIs to personalize insights for users. Built and optimized a secure backend with MongoDB, role-based access, and JWT/OAuth 2.0, ensuring privacy and reliability in handling sensitive personal data. Deployed services using Docker and CI/CD pipelines for scalable cloud delivery.",
          color: "#4CAF50",
        },
        {
          title: "AI-Powered Stock Tracking & Alert System",
          company: "Personal Project",
          company_url: "https://www.github.com/Ashish-Ramrakhiani/stock-tracker-agent",
          logo_path: "stock_tracker_logo.jpg",
          duration: "2025",
          location: "Remote",
          description:
            "Architected and deployed a comprehensive real-time stock monitoring system integrating AI-driven market analysis with automated SMS notifications. Built multi-agent architecture using OpenAI's Agents SDK for natural language command processing, intelligent news research, and contextual alert generation. Implemented 24/7 background scheduling for hourly price monitoring across global exchanges, REST webhook endpoints for Twilio SMS integration, and persistent JSON-based data management. Achieved seamless user interaction through conversational SMS commands and deployed scalable cloud infrastructure supporting continuous operation.",
          color: "#2196F3",
        },
        {
          title: "College Recommendation System",
          company: "Academic Project",
          company_url: "",
          logo_path: "college_rec_logo.png",
          duration: "2018 - 2019",
          location: "Mumbai, India",
          description:
            "Developed a mobile app with Flutter for recommending engineering colleges based on user profiles. Implemented a Python-based web scraper using BeautifulSoup and a recommendation algorithm with Random Forest, achieving 97.89% recommendation accuracy. The system provides personalized college suggestions to help students make informed decisions about their higher education.",
          color: "#9C27B0",
        },
        
        {
          title: "Automated Wetland Delineation (ISRO)",
          company: "Indian Space Research Organization",
          company_url: "https://www.isro.gov.in/",
          logo_path: "isro_logo.png",
          duration: "June 2019 - July 2019",
          location: "Ahmedabad, India",
          description:
            "Directed deep learning project at ISRO for mapping wetlands using hyperspectral LISS-III imagery. Designed an atrous CNN that outperformed U-Net, reducing parameters by 100×. Achieved Dice coefficients of 0.68 (train) and 0.65 (validation). Reduced manual delineation effort by 80%, used as a QC tool at ISRO.",
          color: "#FF6B35",
        },
        {
          title: "SAP Material Management Workflow Optimization",
          company: "Colgate Global Business Services",
          company_url: "https://www.colgatepalmolive.com/",
          logo_path: "colgate_logo.png",
          duration: "2020 - 2021",
          location: "Mumbai, India",
          description:
            "Redesigned SAP Material Management workflows using parallel processing and milestone tracking. Identified process bottlenecks and KPIs, achieving a 70% improvement in material creation efficiency. Demonstrated expertise in enterprise workflow automation and KPI-driven performance improvements.",
          color: "#FF0000",
        },
        {
          title: "Finance Master Data Automation",
          company: "Colgate Global Business Services",
          company_url: "https://www.colgatepalmolive.com/",
          logo_path: "colgate_logo.png",
          duration: "2021 - 2022",
          location: "Mumbai, India",
          description:
            "Automated finance master data load process by replacing legacy file transfers with a secure Webdynpro application. Reduced data load time from 8 hours to a few minutes. Leveraged SAP HANA and OData services to deliver real-time data flows with enterprise-grade security.",
          color: "#FF0000",
        },
      ],
    },
    {
      title: "Entrepreneurship",
      experiences: [
        {
          title: "Co-Founder & Lead Developer",
          company: "Viva Mind",
          company_url: "",
          logo_path: "vivamind_logo.png",
          duration: "May 2020 - Aug 2022",
          location: "Remote",
          description:
            "Co-founded a privacy-first mental health journaling platform processing 50,000+ journal entries across an 18-month production lifecycle. Engineered a Node.js/Express backend with AES-256 field-level encryption and JWT/OAuth 2.0 RBAC. Decoupled Hugging Face sentiment analysis into a Redis-backed async job queue with retry logic and exponential backoff, reducing user-facing response time from ~850ms to ~95ms. Built a React/Redux frontend with real-time mood dashboards; deployed full stack on AWS (EC2, S3) via Docker and GitHub Actions CI/CD with rolling deployments and zero downtime.",
          color: "#4CAF50",
        },
      ],
    },
    {
      title: "Research & Academic",
      experiences: [
        {
          title: "R&D Software Engineer — Serverless Systems",
          company: "HipCastor Labs (faasr.io)",
          company_url: "https://faasr.io",
          logo_path: "faasr_logo.png",
          duration: "Sept 2024 - Present",
          location: "Corvallis, OR, USA",
          description:
            "Architected EphFlow (CCGrid'26), a multi-cloud serverless middleware that transparently extends AWS Lambda execution limits from 15 minutes to 90+ minutes via ephemeral EC2 VM provisioning; implemented the 3,600-line Python/FastAPI core from scratch. Built a React-based visual DAG composer enabling researchers to configure multi-cloud serverless pipelines, and engineered language-agnostic RPC client libraries (Python, R, Julia) with S3-based coordination validated across 1,051 invocations on AWS Lambda, GCP Cloud Run, GitHub Actions, OpenWhisk, and SLURM.",
          color: "#4285F4",
        },
        {
          title: "R&D Software Engineer — Automated Fault Localization",
          company: "ANSWER Labs, Oregon State University",
          company_url: "https://github.com/Ashish-Ramrakhiani/BugLocalization_BugSleuth",
          logo_path: "osu_logo.png",
          duration: "Sept 2023 - Aug 2024",
          location: "Corvallis, OR, USA",
          description:
            "Developed BugSleuth (ICSE'25), an unsupervised genetic algorithm for automated fault localization that outperforms supervised deep learning and LLM baselines (CodeGen-16B) on the Defects4J benchmark with zero training data — localizing 56.8% of 704 real-world bugs in top-5 predictions. Optimized rank aggregation by framing fault localization as an optimization problem using custom Spearman Footrule fitness, achieving a 3.3s average runtime per bug.",
          color: "#DC6900",
        },
      ],
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
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};