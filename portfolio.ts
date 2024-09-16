import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  ProjectType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Drake Nguyen",
  title: "Hi all, I'm Drake",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with NodeJS, ReactJS, React Native and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "Long182k",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:thanhlong9123@gmail.com",
  linkedin: "https://www.linkedin.com/in/drakenguyen1820/",
  github: "https://github.com/Long182k",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Typescript",
          iconifyTag: "logos:typescript-icon-round",
        },
        {
          skillName: "React - React Native",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
        },
        {
          skillName: "React Query",
          iconifyTag: "logos:react-query-icon",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "NestJS",
          iconifyTag: "logos:nestjs",
        },
        {
          skillName: "Prisma",
          iconifyTag: "logos:prisma",
        },
        {
          skillName: "RabbitMQ",
          iconifyTag: "devicon:rabbitmq",
        },
        {
          skillName: "BullMQ",
          iconifyTag: "lucide-lab:bull-head",
        },
        {
          skillName: "Webhook",
          iconifyTag: "logos:webhooks",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "Redis",
          iconifyTag: "logos:redis",
        },
        {
          skillName: "Postman",
          iconifyTag: "logos:postman-icon",
        },
        {
          skillName: "Jest",
          iconifyTag: "logos:jest",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "GitLab",
          iconifyTag: "skill-icons:gitlab-light",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Vercel",
          iconifyTag: "akar-icons:vercel-fill",
        },
        {
          skillName: "Nginx",
          iconifyTag: "logos:nginx",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "PM2",
          iconifyTag: "logos:pm2-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "75", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Deployment",
    progressPercentage: "70",
  },
  {
    Stack: "Communication and Teamwork",
    progressPercentage: "70",
  },
  {
    Stack: "Languages (Vietnamese and English)",
    progressPercentage: "80",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "The International University (HCM-IU)",
    subHeader: "Bachelor’s Degree in Information Technology",
    // duration: "September 2017 - April 2020",
    // desc: "",
    // grade: "Grade A",
    // descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Engineer",
    company: "ZTO Logistic Singapore",
    companyLogo: "/img/icons/common/zto.webp",
    date: "April 2023 - Aug 2024",
    desc: "Experienced in developing features with React, Node.js, Prisma, and microservices architecture, focusing on WMS/OMS systems and task scheduling with Redis, RabbitMQ, and Cron Jobs. Skilled in creating APIs for third-party integration and optimizing customer interactions. Contributed to Agile Scrum processes and developed mobile app features for package scanning and transfers.",
  },
  {
    role: "Software Engineer",
    company: "Guvi Technology Solutions CO., LTD",
    companyLogo: "/img/icons/common/guvi.jpg",
    date: "Jan 2022 - Jan 2023",
    desc: "Skilled in React, Node.js (NestJS), Mongoose, and MongoDB for developing APIs and features for household services. Experienced in building admin websites, participating in Agile Scrum with Jira, and training backend interns. Collaborated with QA for testing and maintaining systems.",
  },
  {
    role: "Software Engineer",
    company: "DGM JSC CO., LTD",
    companyLogo: "/img/icons/common/dgm.png",
    date: "Jan 2021 - Aug 2021",
    desc: "Skilled in React, Node.js (NestJS), and MySQL for developing REST APIs and integrating Lidar machine data. Collaborated with marketing and project teams to develop and enhance features based on feedback. Built admin websites for comprehensive data management.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Portfolio",
    desc: "Developed a software developer portfolio template using React.js, Next.js, and Bootstrap to showcase projects and skills. The template features sections for work, skills, and personal information, providing a professional platform for developers to display their expertise.",
    github: "https://github.com/Long182k/Porfolio",
    link: "https://drake-porfolio.vercel.app/",
  },
  {
    name: "The Online Hospital Platform",
    desc: "Built a bilingual medical booking platform using React.js, Redux, Node.js, and MySQL, with features for managing doctor schedules, patient bookings, and email notifications. Developed an admin system for managing users, doctors, and patients, and deployed the project with Docker Compose.",
    link: "https://drake-hospital.xyz/",
  },
  {
    name: "The Opinion Mining System",
    desc: "Create a post to share your feelings and invite others to comment. The system will analyze and rank comments, determining if a user's status is Good or Bad. View statistics of Good/Bad comments with visualizations using Chart.js. Admins can manage keywords for analysis by creating, updating, or deleting them.",
    // link: "#",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Drake's Portfolio",
  description: greetings.description,
  author: "Drake Nguyen",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: ["Drake Nguyen", "Portfolio", "Drake Nguyen Portfolio "],
};
