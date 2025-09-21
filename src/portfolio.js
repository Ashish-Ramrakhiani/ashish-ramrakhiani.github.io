/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ashish Ramrakhiani's Portfolio",
  description:
    "A passionate software engineer and Graduate student at Oregon State University with expertise in full stack development, machine learning, and scalable system design.",
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
    "A passionate software engineer and Graduate student at Oregon State University with over four years of industry experience. I specialize in designing scalable, high-performance systems and have expertise in full stack development, serverless computing, machine learning, and data-driven decision-making.",
  resumeLink:
    "https://drive.google.com/file/d/13NlZfvBvlOV6FLcwDu9TLS-EEEhdfUiY/view?usp=sharing",
  portfolio_repository: "https://github.com/Ashish-Ramrakhiani",
  githubProfile: "https://github.com/Ashish-Ramrakhiani",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

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
        "⚡ Proficient in multiple programming languages including Java, Python, JavaScript, TypeScript, SAP ABAP, C++, C#, and R",
        "⚡ Experience with modern frameworks like React, Redux, Node.js, Express.js, Spring Boot, Next.js, and Bootstrap",
        "⚡ Mobile development with Flutter and Android, plus web technologies like HTML, CSS, and PHP",
        "⚡ Database expertise with SQL and specialized in enterprise applications with SAP ABAP",
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
        "⚡ Experience with Hibernate, JPA for enterprise-grade backend development and WebSocket implementation",
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
    },
    {
      title: "Cloud & Enterprise Systems",
      fileName: "DesignImg",
      skills: [
        "⚡ Multi-cloud expertise with AWS (S3, Lambda, EC2, RDS), GCP, Azure for scalable deployments",
        "⚡ Serverless computing with OpenWhisk, SLURM, MinIO, and container orchestration platforms",
        "⚡ SAP enterprise systems including MDG, HANA, Fiori/UI5, Webdynpro, OData, CDS Views, and BRF+",
        "⚡ Agile/Scrum methodologies, Unit Testing (JUnit, Mockito), System Design, and OWASP security principles",
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
      duration: "Sept 2023 - Dec 2025 (Expected)",
      descriptions: [
        "⚡ Current GPA: 3.96/4.0 - Graduate Research Assistant specializing in Bug Localization and Serverless Frameworks",
        "⚡ Conducting cutting-edge research in unsupervised fault localization using genetic programming",
        "⚡ Developing production-grade serverless middleware frameworks for multi-cloud deployment",
        "⚡ Contributing to academic publications and advancing the field of software engineering",
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
          
          title: "Graduate Research Assistant",
          company: "Oregon State University",
          company_url: "https://oregonstate.edu/",
          logo_path: "osu_logo.png",
          duration: "Sept 2023 - Present",
          location: "Corvallis, OR, USA",
          description:
            "Conducting research in Bug Localization and Serverless Frameworks. Developed BugSleuth - an unsupervised bug localization technique using genetic programming with real-time debugging capabilities. Architected FaaSr - a production-grade serverless middleware framework for multi-cloud deployment. Research has resulted in publications and practical applications in industry.",
          color: "#DC6900",
      },
        {
          title: "Sr. Technology Associate",
          company: "Colgate Global Business Services",
          company_url: "https://www.colgatepalmolive.com/",
          logo_path: "colgate_logo.png",
          duration: "Aug 2019 - Aug 2023",
          location: "Mumbai, India",
          description:
            "Led Master Data Management and IT Analytics initiatives. Redesigned SAP material management workflows achieving 70% efficiency improvement. Deployed robust REST web services with 91.67% response time reduction. Automated Finance Master Data processes reducing load time from 8 hours to minutes. Transformed operational reporting into real-time dashboards eliminating 32 business hours of manual work monthly.",
          color: "#FF0000",
        },
        {
          title: "Co-founder & Full-Stack Developer",
          company: "Viva Mind – Mental Health & Wellness Tracker",
          company_url: "",
          logo_path: "vivamind_logo.png",
          duration: "May 2020 - Aug 2022",
          location: "Remote",
          description:
            "Engineered a full-stack wellness tracking platform on MERN stack with modular microservices. Designed real-time sentiment analysis pipeline for journal entries. Built secure backend with MongoDB, role-based access, and JWT/OAuth 2.0. Deployed using Docker and CI/CD pipelines for scalable cloud delivery with rapid iteration capabilities.",
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
          title: "Co-founder & Full-Stack Developer",
          company: "Viva Mind – Mental Health & Wellness Tracker",
          company_url: "",
          logo_path: "vivamind_logo.png",
          duration: "May 2020 - Aug 2022",
          location: "Remote",
          description:
            "Engineered a full-stack wellness tracking platform on MERN stack with modular microservices. Designed real-time sentiment analysis pipeline for journal entries. Built secure backend with MongoDB, role-based access, and JWT/OAuth 2.0. Deployed using Docker and CI/CD pipelines for scalable cloud delivery with rapid iteration capabilities.",
          color: "#4CAF50",
        },
      ],
    },
    {
      title: "Research & Academic",
      experiences: [
        {
          title: "Graduate Research Assistant",
          company: "Oregon State University",
          company_url: "https://oregonstate.edu/",
          logo_path: "osu_logo.png",
          duration: "Sept 2023 - Present",
          location: "Corvallis, OR, USA",
          description:
            "Conducting research in Bug Localization and Serverless Frameworks. Developed BugSleuth - an unsupervised bug localization technique using genetic programming with real-time debugging capabilities. Architected FaaSr - a production-grade serverless middleware framework for multi-cloud deployment. Research has resulted in publications and practical applications in industry.",
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
      id: "faasr-framework-pub",
      name: "FaaSr: Multi-Cloud Serverless Orchestration Framework",
      createdAt: "2025-09-01T00:00:00Z",
      description: "Pending research publication on production-grade serverless middleware framework",
      url: "https://github.com/FaaSr/",
    },
    {
      id: "bugsleuth-pub",
      name: "BugSleuth: Unsupervised Bug Localization using Genetic Programming",
      createdAt: "2024-08-02T00:00:00Z",
      description: "Pending research publication on innovative fault localization technique",
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