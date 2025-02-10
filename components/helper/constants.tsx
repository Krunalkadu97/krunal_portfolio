
import { IoLogoApple } from "react-icons/io5";
import { TfiAndroid } from "react-icons/tfi";
import { IoGlobeSharp } from "react-icons/io5";
import vilogo1 from "@/components/assets/projects/vi1.webp";
import vilogo2 from "@/components/assets/projects/vi2.webp";
import vilogo3 from "@/components/assets/projects/vi3.webp";
import vilogo4 from "@/components/assets/projects/vi4.webp";
import vblogo from "@/components/assets/projects/VB.webp";
import rbnlogo from "@/components/assets/projects/RNB.webp";
import defaultlogo from "@/components/assets/projects/default.webp";
import hp1 from "@/components/assets/projects/hp1.webp";
import hp2 from "@/components/assets/projects/hp2.webp";
import hp3 from "@/components/assets/projects/hp3.webp";
import hp4 from "@/components/assets/projects/hp4.webp";
import ttlogo1 from "@/components/assets/projects/td1.webp";
import ttlogo2 from "@/components/assets/projects/td2.webp";
import ttlogo3 from "@/components/assets/projects/td3.webp";
import ttlogo4 from "@/components/assets/projects/td4.webp";
import ttlogo5 from "@/components/assets/projects/td5.webp";
import tslogo1 from "@/components/assets/projects/ts1.webp";
import tslogo2 from "@/components/assets/projects/ts2.webp";
import VIProject from "@/components/assets/projects/VI.png";
import TSProject from "@/components/assets/projects/Tradesutra.png";
import TTProject from "@/components/assets/projects/Tradetron.png";
import HPProject from "@/components/assets/projects/Heart.png";


export const projects = [
    {
      id: 1,
      year: 2024,
      title: "Vodafone-Idea (VI) User Application",
      image: VIProject,
      tag: ["All", "Mobile"],
      description: {
        Description:
          "Developed a high-performance mobile application for VI (Vodafone-Idea) using React Native, ensuring seamless cross-platform functionality. Focused on delivering an intuitive user experience while implementing Proof of Concept (PoC) solutions to enhance app performance and scalability. Leveraged modern development practices to optimize UI/UX and integrate advanced features, contributing to a robust and efficient digital solution.",
        Role_and_Responsibilities: [
          "Collaborated with teams to design and implement features.",
          "Delivered PoC solutions and optimized app performance.",
          "Integrated Firebase for real-time data and notifications.",
          "Conducted code reviews and followed best practices.",
        ],
        Technologies: ["React Native", "Redux", "Firebase"],
        Tools: ["Git", "Jira", "X-Code", "Android Studio"],
        Practices: ["Agile", "PoC Implementation"],
        Deployed: [
          {
            id: 1,
            title: "IOS",
            link: "https://apps.apple.com/in/app/vi-recharge-payments-games/id623834540",
            logo: IoLogoApple,
            color: "#fff",
          },
          {
            id: 2,
            title: "Android",
            link: "https://play.google.com/store/apps/details?id=com.mventus.selfcare.activity",
            logo: TfiAndroid,
            color: "#fff",
          },
        ],
        images: [vilogo1, vilogo2, vilogo3, vilogo4],
      },
    },
    {
      id: 2,
      year: 2023,
      title: "Valuebet (Sports Betting Management Platform)",
      image: vblogo,
      tag: ["All", "Mobile", "Web"],
      description: {
        Description:
          "Developed a robust platform to host and manage sports betting clubs, providing an end-to-end solution for administrators and users. The platform featured:    User management, Betting operations, Payments and security and Scalability.",
        Role_and_Responsibilities: [
          "Collaborated with the team to build new features and fix bugs.",
          "Implement visually clear and dynamic features for displaying real-time betting data, such as odds, statistics, and value bet highlights.",
        ],
        Technologies: ["React Native", "React.js", "Redux", "Firebase"],
        Tools: ["Git", "Trello", "X-Code", "Android Studio"],
        Practices: [],
        Deployed: [
          {
            id: 4,
            title: "Web",
            link: "https://dev.valuebet.app/",
            logo: IoGlobeSharp,
            color: "#fff",
          },
        ],
        images: [vblogo],
      },
    },
    {
      id: 3,
      year: 2024,
      title: "Wagefi (Early Wage Access Mobile and WebApp)",
      image: defaultlogo,
      tag: ["All", "Mobile", "Web"],
      description: {
        Description:
          "Developed a mobile app for VI (Vodafone-Idea) using React Native, focusing on cross-platform functionality and implementing PoC solutions.",
        Role_and_Responsibilities: [
          "Developed both mobile and web applications from scratch to final delivery.",
          "Implemented key features like Google Sign-in, Redux, Redux Saga, Stripe, Argyle payroll, Lithics card, and Custom Hooks.",
        ],
        Technologies: ["React Native", "React.js", "Redux", "Firebase"],
        Tools: ["Git", "Jira", "X-Code", "Android Studio"],
        Practices: [],
        Deployed: [
          { id: 4, title: "Web", link: "", logo: IoGlobeSharp, color: "#fff" },
        ],
        images: [defaultlogo],
      },
    },
    {
      id: 4,
      year: 2023,
      title: "Heart And Paw (Pet Services App)",
      image: HPProject,
      tag: ["All", "Mobile"],
      description: {
        Description:
          "Heart and Paw is a US-based app for pet owners, allowing users to book appointments for services like Care, Style, and Play at nearby centers.",
        Role_and_Responsibilities: [
          "Collaborated with the team to build new features and fix bugs.",
          "Addressed performance issues to ensure smooth app functionality.",
          "Implemented key features like Google Sign-in, Redux, Redux Saga, and Webview for handling credit card data.",
        ],
        Technologies: [
          "React Native",
          "Redux",
          "TypeScript",
          "Firebase",
          "Redux Saga",
          "Google Sign-in",
        ],
        Tools: ["Git", "Jira", "X-Code", "Android Studio"],
        Practices: [],
        Deployed: [
          {
            id: 1,
            title: "IOS",
            link: "https://apps.apple.com/us/app/heart-paw/id6451318915",
            logo: IoLogoApple,
            color: "#fff",
          },
          {
            id: 2,
            title: "Android",
            link: "https://play.google.com/store/apps/details?id=com.heartandpaw.mobile&pcampaignid=web_share",
            logo: TfiAndroid,
            color: "#fff",
          },
        ],
        images: [hp1, hp2, hp3, hp4],
      },
    },
    {
      id: 5,
      year: 2024,
      title: "Adhouzz",
      image: defaultlogo,
      tag: ["All", "Web"],
      description: {
        Description:
          "A web application enabling users to book advertising slots across platforms like Radio, Cinema, and Television. Adhouzz offers an intuitive interface for managing bookings, schedules, and payments, with real-time data integration and seamless front-end and back-end interaction.",
        Role_and_Responsibilities: [
          "Led a team of three developers, managing task allocation, code reviews, and ensuring adherence to timelines and quality standards.",
          "Managed state effectively using Redux, ensuring seamless data flow and user experience.",
        ],
        Technologies: ["React.js", "Redux", "Firebase"],
        Tools: ["Git"],
        Practices: [],
        Deployed: [
          { id: 4, title: "Web", link: "", logo: IoGlobeSharp, color: "#fff" },
        ],
        images: [defaultlogo],
      },
    },
    {
      id: 6,
      year: 2023,
      title: "RNB Gujarat Goverment",
      image: rbnlogo,
      tag: ["All", "Web"],
      description: {
        Description:
          "RNB (Rural & Non-Rural Buildings) Gujarat is a Gujarat Government project designed to manage and track all construction work data within the state. The platform provides efficient tools for monitoring the progress and details of various construction activities, ensuring transparency and effective project management.",
        Role_and_Responsibilities: [
          "Contributed to developing and implementing new features that enhanced the platform’s functionality.",
          "Addressed performance issues and optimized the app for faster load times and smoother interactions.",
          "Led Redux integration to ensure optimal state management across the platform and improve data flow efficiency.",
          "Collaborated with the team to ensure cross-functional alignment and timely project delivery.",
        ],
        Technologies: ["React.js", "Redux", "useQuery", "Tailwind"],
        Tools: ["Git"],
        Practices: [],
        Deployed: [
          {
            id: 4,
            title: "Web",
            link: "https://rnb.gujarat.gov.in/",
            logo: IoGlobeSharp,
            color: "#fff",
          },
        ],
        images: [rbnlogo],
      },
    },
    {
      id: 7,
      year: 2024,
      title: "Tradetron - Financial Application",
      image: TTProject,
      tag: ["All", "Mobile"],
      description: {
        Description:
          "Tradetron is a financial application that provides users with live market updates and enables them to trade directly from the platform. The app delivers real-time financial data, empowering users to make informed decisions and manage their trades efficiently.",
        Role_and_Responsibilities: [
          "Worked on implementing updated features to enhance user experience and functionality.",
          "Focused on performance improvements, ensuring smoother app interactions and faster load times.",
          "Collaborated with the team to optimize the app for better market data handling and trading features.",
        ],
        Technologies: ["React Native", "Context API", "Firebase"],
        Tools: ["Git", "X-Code", "Android Studio"],
        Practices: [],
        Deployed: [
          {
            id: 1,
            title: "IOS",
            link: "https://apps.apple.com/in/app/tradetron/id1540269842",
            logo: IoLogoApple,
            color: "#fff",
          },
          {
            id: 2,
            title: "Android",
            link: "https://play.google.com/store/apps/details?id=com.tradetron",
            logo: TfiAndroid,
            color: "#fff",
          },
        ],
        images: [ttlogo1, ttlogo2, ttlogo3, ttlogo4, ttlogo5],
      },
    },
    {
      id: 8,
      year: 2023,
      title: "TradeSutra - Financial Services Application",
      tag: ["All", "Mobile"],
      image: TSProject,
      description: {
        Description:
          "TradeSutra is a financial services application that offers stock market tips to users based on their subscription status (paid or free). The platform is designed to help users make informed decisions by providing stock market insights tailored to their needs.",
        Role_and_Responsibilities: [
          "Worked on integrating custom notifications and sounds to enhance user engagement.",
          "Implemented in-app purchases for iOS, enabling users to subscribe to premium features.",
          "Integrated Razorpay payment gateway for smooth and secure transactions.",
          "Collaborated with the team to deliver high-quality features and maintain a smooth user",
        ],
        Technologies: ["React Native", "Redux", "Firebase"],
        Tools: ["Git", "X-Code", "Android Studio"],
        Practices: [],
        Deployed: [
          {
            id: 1,
            title: "IOS",
            link: "https://apps.apple.com/in/app/tradesutra/id1611014436",
            logo: IoLogoApple,
            color: "#fff",
          },
        ],
        images: [tslogo1, tslogo2],
      },
    },
    {
      id: 9,
      year: 2023,
      title: "Bhanumart - Multi-Vendor E-Commerce Application",
      image: defaultlogo,
      tag: ["All", "Mobile"],
      description: {
        Description:
          "Bhanumart is a multi-vendor e-commerce platform that allows users to browse products from different vendors and make purchases. The app provides users with the flexibility of choosing between UPI payment and Cash on Delivery options for seamless transactions.",
        Role_and_Responsibilities: [
          "Integrated Google Maps to allow users to find vendors based on location.",
          "Worked on UPI and Card Payment Gateway Integration to provide secure transaction methods.",
          "Implemented Auto-Complete Address functionality to enhance the checkout process and reduce user input errors.",
          "Collaborated with the team to improve app performance and ensure a smooth user experience.",
        ],
        Technologies: ["React Native", "Redux", "Firebase"],
        Tools: ["Git", "X-Code", "Android Studio"],
        Practices: [],
        Deployed: [
          { id: 4, title: "Web", link: "", logo: IoGlobeSharp, color: "#fff" },
        ],
        images: [defaultlogo],
      },
    },
    {
      id: 10,
      year: 2023,
      title: "Events 360",
      image: defaultlogo,
      tag: ["All", "Mobile"],
      description: {
        Description:
          "Developed a mobile app for VI (Vodafone-Idea) using React Native, focusing on cross-platform functionality and implementing PoC solutions.",
        Role_and_Responsibilities: [
          "Collaborated with teams to design and implement features.",
          "Delivered PoC solutions and optimized app performance.",
          "Integrated Firebase for real-time data and notifications.",
          "Conducted code reviews and followed best practices.",
        ],
        Technologies: ["React Native", "Redux", "Firebase"],
        Tools: ["Git", "Jira", "X-Code", "Android Studio"],
        Practices: ["Agile", "PoC Implementation"],
        Deployed: [
          { id: 4, title: "Web", link: "", logo: IoGlobeSharp, color: "#fff" },
        ],
        images: [defaultlogo],
      },
    },
  ];
  
  export const activeTag = ["All", "Mobile", "Web"]
  export const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  