export const content = {
  hero: {
    name: "MANN VASWANI",
    taglines: ["AI Enthusiast", "AI Engineer", "Builder of things"],
    description: "Futuristic Developer & AI Enthusiast. Building next-gen interfaces and intelligent systems."
  },
  
  about: {
    bio: "Hi, I'm Mann. I bridge the gap between design and engineering, combining a passion for AI with a sharp eye for minimalist aesthetics. Driven by curiosity and a commitment to building products that matter.",
    skills: {
      "Frontend": ["React", "TypeScript", "JavaScript", "Framer Motion", "Tailwind CSS"],
      "Backend & AI": ["Python", "Node.js", "Express", "MongoDB", "Firebase"],
      "Tools & Design": ["Git", "Figma", "VS Code", "Vercel"]
    }
  },

  experience: [
    {
      company: "RealtyEaseAI",
      role: "Business Development Supervisor",
      period: "Mar. 2022 – Apr. 2023 | Khandwa, India",
      summary: "Led client communications, onboarding, strategy and product feedback loops.",
      points: [
        "Youngest early employee; led business development, strategy, and outbound growth",
        "Built branding kit and online presence (1.8K Instagram + LinkedIn), generating 3+ inbound clients",
        "Designed revenue model and scaled to $4K+ Monthly Recurring Revenue",
        "Systematized operations and reduced non-productive hours by 70%",
        "Established Client Delivery department; led team handling 90% of external communication",
        "Reduced workload across departments by 30–40%"
      ]
    },
    {
      company: "MoveInSync",
      role: "Frontend Web Developer",
      period: "June 2024 – Aug 2024 | Bangalore",
      summary: "Built production UI used by enterprise customers in corporate mobility.",
      points: [
        "Built responsive enterprise web flows used by 50,000+ employees",
        "Developed reusable UI components; solved device-specific edge cases",
        "Led entire deployment lifecycle; achieved zero critical UI issues post-launch"
      ]
    },
    {
      company: "Rishihood University",
      role: "Full Stack Web Developer",
      period: "June 2024 – Aug 2024 | Sonipat",
      summary: "Built the end-to-end student experience system used across campus.",
      points: [
        "Built Rishiverse, a Student ERP for 5,500+ users (1,200 active at launch)",
        "Digitized 80% of campus workflows",
        "Built and integrated 8+ modules including Attendance, Mess, Exit Pass, Profiles, Complaints",
        "Designed unified data flow with role-based access across departments"
      ]
    },
    {
      company: "Praxto Designs",
      role: "UI UX Executive",
      period: "Mar 2026 - May 2026 | Bengaluru, Karnataka, India (Remote)",
      summary: "Designed high-converting user interfaces, conducted user research, and optimized wireframes for next-gen products.",
      points: [
        "Conducted comprehensive UX audits on client platforms, increasing user activation rates by up to 25%",
        "Created high-fidelity wireframes, interactive prototypes, and modular UI component libraries using Figma",
        "Collaborated directly with front-end engineering teams to ensure pixel-perfect design implementation",
        "Developed and maintained design systems to streamline design-to-development workflows"
      ]
    },
    {
      company: "Harvard Project for Asian and International Relations (HPAIR)",
      role: "Delegate (Apprenticeship)",
      period: "Aug 2024 | Bangkok City, Thailand (On-site)",
      summary: "My HPAIR 2024 Experience in Bangkok 🌏",
      points: [
        "Attending HPAIR in Bangkok was an inspiring journey filled with learning and meaningful connections. The sessions provided deep insights into leadership, business strategy, and the dynamic landscape of Asia, broadening my understanding of the region's challenges and opportunities.",
        "A highlight was the cultural fair, where I experienced the rich diversity of Asian cultures, reinforcing the importance of cross-cultural exchange. This experience has left me motivated to apply what I've learned and contribute to positive change in our communities."
      ]
    }
  ],

  education: [
    {
      school: "Newton School of Technology",
      degree: "B.Tech – Computer Science & AI",
      period: "Aug 2023 – May 2027 | Sonipat, India",
      gpa: "9.06/10",
      description: "Relevant Coursework: Probability and Statistics, Fundamentals of Programming, OOP, DSA, Advanced Programming."
    },
    {
      school: "Scholars’ Den School",
      degree: "High School – Maths and Science",
      period: "Graduated with 87.6%",
      gpa: "87.6%",
      description: ""
    }
  ],

  projects: [
    {
      id: "deceptivision",
      title: "DeceptiVision — AI Powered Deception Detection",
      subtitle: "Multimodal AI Deception Detection System",
      category: "AI/ML",
      date: "2025",
      tech: ["AI/ML", "Computer Vision", "Deep Learning", "Multimodal Fusion"],
      description: "DeceptiVision is a multimodal AI system that detects deception by analyzing facial micro-expressions, body language, and video-based behavioral cues.",
      coverImage: "/project assets/Deceptivision/Cover.png",
      demoLink: "https://decepti-vision.vercel.app/",
      codeLink: "https://github.com/MannVaswani4/DeceptiVision",
      pdfLink: "https://drive.google.com/file/d/1YDhZiby4CDTxSA4VUZ5WG_vgfxgb8HQW/view?usp=sharing",
      details: [
        {
          subtitle: "Why Deception Detection Is Hard",
          content: "Humans are poor at detecting lies from observation alone. Micro-expressions, subtle body movements, and behavioral inconsistencies happen in milliseconds and are almost impossible to track reliably at scale. Traditional systems rely on single signals like facial emotion or speech, which leads to low accuracy and high bias.",
          image: "/project assets/Deceptivision/sub1.png"
        },
        {
          subtitle: "A Multimodal Behavioral Intelligence System",
          content: "DeceptiVision combines facial micro-expressions, body-pose analysis, and video-based behavioral cues into a single AI pipeline. By extracting and learning from multiple human signals at once, the system delivers far more reliable truth vs deception predictions than single-channel models.",
          image: "/project assets/Deceptivision/sub2.png"
        },
        {
          subtitle: "From Raw Video to AI-Driven Insight",
          content: "The platform processes raw interview videos into structured datasets through frame extraction, face detection, emotion embedding, and body-pose estimation. These signals are then fed into deep-learning models trained to classify deceptive versus truthful behavior with confidence scoring.",
          image: "/project assets/Deceptivision/sub3.png"
        },
        {
          subtitle: "Built for Research, Forensics, and Behavioral Analysis",
          content: "DeceptiVision is designed as a reproducible research system that can be extended with new data sources like audio, biometrics, or additional video streams. It enables academic researchers, analysts, and security teams to explore deception in a scalable, data-driven way."
        }
      ]
    },
    {
      id: "tripadvisor",
      title: "TripAdvisor — AI Trip Planner Product Breakdown",
      subtitle: "AI Trip Planner Product Breakdown & UX Audit",
      category: "Product Teardown",
      date: "2026",
      tech: ["Product Strategy", "UX Audit", "Behavioral Design", "Product Thinking"],
      description: "A detailed product teardown of TripAdvisor’s AI-powered trip planning flow, analyzing user journeys, UX decisions, business logic, and opportunities to improve trust, conversion, and itinerary quality.",
      coverImage: "/project assets/TripAdvisor/Cover.png",
      pdfLink: "https://drive.google.com/file/d/1B8OHBeFXaKtKP9kzmtjfrLUQH0cIhY3p/view?usp=sharing",
      details: [
        {
          subtitle: "Product Overview",
          content: "TripAdvisor is one of the world’s largest travel platforms, hosting over 1 billion reviews across 8 million businesses and serving 400M+ monthly travelers across 43 markets. The AI Trip Planner is designed to simplify one of the hardest parts of travel — converting inspiration into a structured, bookable itinerary — by allowing users to generate personalized travel plans using AI instead of manual research.",
          image: "/project assets/TripAdvisor/Sub1.png"
        },
        {
          subtitle: "User & Journey",
          content: "The experience starts when users input their destination and travel dates, followed by preference selection such as interests and travel style. Users feel increasingly confident as the AI asks relevant questions, making the system feel personalized and trustworthy. Once the itinerary is generated, users browse hotels, activities, and attractions with integrated reviews and map views, giving them both inspiration and validation in one flow.",
          image: "/project assets/TripAdvisor/sub2.png"
        },
        {
          subtitle: "Pain Points & Insights",
          content: "Despite a smooth UI and fast AI generation, users face friction when itineraries ignore budget preferences and geographic proximity. Activities are often randomly ordered, forcing users to manually rearrange plans even though location data is already available. This creates unnecessary cognitive load and reduces trust in the AI’s understanding of real-world travel behavior.",
          image: "/project assets/TripAdvisor/sub3.png"
        },
        {
          subtitle: "Product Strategy",
          content: "By adding budget controls (economy, moderate, luxury) and automatically grouping activities by proximity, the AI planner could generate more realistic, efficient, and trustworthy itineraries. These changes would reduce manual editing, improve itinerary relevance, and directly impact TripAdvisor’s north star metric — more users saving itineraries and converting to bookings.",
          image: "/project assets/TripAdvisor/sub4.png"
        }
      ],
      gallery: [
        "/project assets/TripAdvisor/sub5.png",
        "/project assets/TripAdvisor/sub6.png"
      ]
    },
    {
      id: "agrilo",
      title: "Agrilo — AI-Powered Digital Agronomist",
      subtitle: "Multimodal AI Crop Diagnostics & Smart Irrigation Platform",
      category: "Full Stack Development",
      date: "2025",
      tech: ["React", "Node.js", "MongoDB", "Computer Vision", "OpenEPI", "PWA"],
      description: "A full-stack, AI-driven agriculture platform that helps smallholder farmers diagnose crop diseases, optimize irrigation, and plan climate-adaptive farming using real-time data and computer vision.",
      coverImage: "/project assets/Agrilo/Cover.png",
      pdfLink: "https://drive.google.com/file/d/1J4FpzfNSJPhC1ro2Ge_Nmz7qQP5PQgOd/view?usp=sharing",
      details: [
        {
          subtitle: "The Global Problem",
          content: "Smallholder farmers produce over 70% of the world’s food, yet they operate under extreme risk due to crop disease, water scarcity, and climate instability. 40% of crops are lost due to preventable diseases and poor irrigation, while 60% of freshwater is wasted by inefficient irrigation. Climate unpredictability makes traditional planting calendars unreliable, leaving farmers to make high-stakes decisions based on guesswork.",
          image: "/project assets/Agrilo/Screenshot 2026-06-08 at 3.50.21 PM.png"
        },
        {
          subtitle: "The Product Vision",
          content: "Agrilo (also called AgriSphere in the platform architecture) was designed as a digital agronomist — an AI system that translates complex climate, soil, and crop data into simple, daily farming decisions. The goal was to give farmers clear disease diagnoses, precise watering instructions, climate-aware planting guidance, and a single 'what to do today' command center, aligning with UN Sustainable Development Goals 1, 2, 6, and 13.",
          image: "/project assets/Agrilo/Screenshot 2026-06-08 at 3.50.29 PM.png"
        },
        {
          subtitle: "The AI System",
          content: "Agrilo is powered by OpenEPI datasets and computer vision. After defining their farm boundary via map coordinates, the system analyzes soil composition, forecasts, and crop health signals. Key modules include the AI Crop Doctor (plant disease recognition with ~95% accuracy), Smart Irrigation Advisor (calculates watering requirements to reduce waste by 40%), and Climate-Smart Planner (crop ranking and risk forecasting).",
          image: "/project assets/Agrilo/Screenshot 2026-06-08 at 3.50.42 PM.png"
        },
        {
          subtitle: "Engineering & Accessibility",
          content: "Designed for low-literacy, low-connectivity, and low-end devices: Agrilo includes a Progressive Web App (PWA) with offline sync, multi-language support (English, Hindi, Spanish, French, German), icon-driven UI, AI voice assistance, and geo-mapped farm boundaries built with a lightweight React frontend and Node.js + MongoDB backend.",
          image: "/project assets/Agrilo/Screenshot 2026-06-08 at 3.50.49 PM.png"
        }
      ]
    },
    {
      id: "studio448",
      title: "Studio 448 — Custom Property Booking Platform",
      subtitle: "Full-Stack Hospitality & Booking Platform",
      category: "Full Stack Development",
      date: "2026",
      tech: ["React", "Node.js", "Express", "Stripe", "Live Chat", "MongoDB"],
      description: "A full-stack property booking platform built from scratch for a real client, featuring payments, chat, booking management, and a fully custom user experience designed around business needs.",
      coverImage: "/project assets/Studio448/Cover.png",
      demoLink: "https://studio448.vercel.app/",
      details: [
        {
          subtitle: "The Challenge",
          content: "The property owner wanted to move away from third-party marketplaces and needed a dedicated website that reflected their brand, controlled the customer experience, and supported direct bookings. The goal was to build a product that worked for both guests and the business — not just a listing page.",
          image: "/project assets/Studio448/Screenshot 2026-06-08 at 3.53.28 PM.png"
        },
        {
          subtitle: "Solution",
          content: "Studio 448 was designed entirely around the client’s workflow and guest journey. Users can browse the property, view availability, chat with the host, select packages, and complete bookings in one smooth flow — all inside a single, purpose-built product.",
          image: "/project assets/Studio448/Screenshot 2026-06-08 at 3.53.39 PM.png"
        },
        {
          subtitle: "The System",
          content: "The platform includes secure payments, booking records, user profiles, live chat, downloadable invoices, and booking breakdowns. Everything was built as a custom system rather than stitched together from templates, ensuring reliability, flexibility, and scalability.",
          image: "/project assets/Studio448/Screenshot 2026-06-08 at 3.53.59 PM.png"
        },
        {
          subtitle: "Business Impact",
          content: "By shifting to a dedicated booking platform, the client now owns their traffic, customer data, and revenue funnel. This increases profit margins, improves guest relationships, and turns a single property into a sustainable digital business.",
          image: "/project assets/Studio448/Screenshot 2026-06-08 at 3.54.13 PM.png"
        }
      ]
    },
    {
      id: "opportrix",
      title: "Opportrix — AI-Powered Freelance Opportunity Aggregator",
      subtitle: "Freelance Opportunity Aggregator & Lead Generation Platform",
      category: "Full Stack Development & AI",
      date: "2026",
      tech: ["React", "Node.js", "Express", "OpenAI", "MongoDB", "Aggregator"],
      description: "A full-stack lead generation platform that aggregates freelance opportunities from multiple platforms into a single intelligent feed, helping freelancers discover, track, and respond to high-value opportunities faster.",
      coverImage: "/project assets/Opportrix/Cover.png",
      demoLink: "https://opportrix.vercel.app/",
      codeLink: "https://github.com/MannVaswani4/Opportrix",
      details: [
        {
          subtitle: "The Challenge",
          content: "Freelancers spend hours switching between LinkedIn, Twitter, Reddit, job boards, and communities searching for opportunities. Valuable leads often get buried under noise, and being late to respond can mean losing potential clients. The challenge was to create a centralized system that eliminates platform hopping, surfaces only relevant opportunities, and helps freelancers engage with prospects before the competition.",
          image: "/project assets/Opportrix/ChatGPT Image Jun 8, 2026, 04_02_27 PM.png"
        },
        {
          subtitle: "Solution",
          content: "Opportrix acts as a unified opportunity intelligence platform. It aggregates freelance opportunities from multiple sources into a single feed, allowing users to discover projects, filter opportunities by skills and requirements, and instantly identify high-value leads. The platform combines opportunity discovery, ATS profile analysis, and AI-assisted engagement tools into one streamlined workflow designed specifically for freelancers and independent professionals.",
          image: "/project assets/Opportrix/ChatGPT Image Jun 8, 2026, 04_03_31 PM.png"
        },
        {
          subtitle: "The System",
          content: "The platform features a real-time aggregated feed, advanced filtering, ATS profile scoring, AI-generated response suggestions, opportunity prioritization, skill-based matching, and engagement automation tools. Users can connect their profiles, define their expertise, monitor relevant opportunities across platforms, and receive intelligent recommendations that improve lead conversion and visibility.",
          image: "/project assets/Opportrix/Screenshot 2026-06-08 at 4.04.18 PM.png"
        },
        {
          subtitle: "Business Impact",
          content: "Opportrix transforms freelance lead generation from a manual, time-consuming process into an automated growth engine. By consolidating multiple opportunity sources into one dashboard, freelancers save hours every week, respond faster to prospects, and increase their chances of securing projects. The platform helps independent professionals focus less on searching for work and more on delivering it, creating a scalable and efficient client acquisition system.",
          image: "/project assets/Opportrix/Screenshot 2026-06-08 at 4.05.06 PM.png"
        }
      ]
    },
    {
      id: "accredian",
      title: "Accredian Student Communication Dashboard",
      subtitle: "Communication-First Learning Experience for Online Students",
      category: "Product Design",
      date: "2026",
      tech: ["Product Design", "UX Strategy", "EdTech", "AI Integration", "Community Design"],
      description: "A communication-first learning experience designed for Accredian that brings doubts, peer discussions, networking, mentorship, and AI-powered support directly into the course journey — reducing dependency on WhatsApp, Telegram, and LinkedIn while increasing student engagement and retention.",
      coverImage: "/project assets/Accredian/Cover.png",
      pdfLink: "https://drive.google.com/file/d/1V9Q6j79Q6hFT_okql1xRPrJZao3Qz8wK/view?usp=sharing",
      details: [
        {
          subtitle: "Problem & Opportunity",
          content: "Students enrolled in online learning platforms often rely on external applications like WhatsApp, Telegram, and LinkedIn for discussions, networking, and doubt solving. While fast and familiar, these platforms create fragmented learning experiences because conversations are disconnected from the actual course context. This reduces engagement within the platform, weakens community bonds among peers, and makes it harder for educators to support students at scale. Accredian, a rapidly growing online education platform, needed a native communication layer that keeps students engaged, supported, and connected — entirely within the course environment.",
          image: "/project assets/Accredian/Screenshot 2026-06-08 at 4.48.31 PM.png"
        },
        {
          subtitle: "The Solution",
          content: "The Accredian Student Communication Dashboard is a unified, context-aware communication system embedded directly into the learning experience. It includes a Doubt Resolution Hub where students submit course-specific questions, tag instructors or mentors, track response status, and search previously resolved doubts — eliminating the back-and-forth of chat-based support. A structured Peer Discussion Forum with upvoting and expert-marked answers drives collaborative learning. The Cohort Networking Hub enables profile-based peer discovery and direct messaging, keeping students connected without needing LinkedIn.",
          image: "/project assets/Accredian/Screenshot 2026-06-08 at 4.48.37 PM.png"
        },
        {
          subtitle: "AI & Mentorship Features",
          content: "An AI Doubt Assistant provides instant answers for common questions by drawing from course material, past resolutions, and community answers — with intelligent handoff to human instructors for complex queries. The Live Interaction Layer includes live Q&A sessions, recorded office hours, and interactive polls tied to course milestones. A Progress & Milestone Feed celebrates student achievements, builds a shared sense of momentum, and reinforces community identity throughout the learning journey.",
          image: "/project assets/Accredian/Screenshot 2026-06-08 at 4.48.47 PM.png"
        },
        {
          subtitle: "Design Decisions & Business Impact",
          content: "Key UX decisions included surfacing the communication hub contextually (per module, not as a global tab), using async-first design to respect timezone diversity, and separating social networking from academic doubt resolution to reduce noise. Expected outcomes include a 35-50% reduction in students leaving the platform for external tools, 2-3x increase in peer interaction rates, and faster doubt resolution that directly correlates with course completion rates — translating to stronger NPS, lower churn, and higher referral rates for Accredian.",
          image: "/project assets/Accredian/Screenshot 2026-06-08 at 4.48.52 PM.png"
        }
      ]
    },
    {
      id: "humanness",
      title: "Humanness — India-Wide Image & Culture Data Platform",
      subtitle: "Multimodal Image & Culture Dataset Verification Platform",
      category: "UI/UX Design",
      date: "2026",
      tech: ["Figma", "UI/UX Design", "System Design", "Multimodal Data", "Product Strategy"],
      description: "A product and system designed to collect, verify, and scale culturally rich image-and-text datasets across every village in India — powering more inclusive and accurate AI models.",
      coverImage: "/project assets/Humanness/Cover.png",
      demoLink: "https://www.figma.com/design/ffqvW7ymL6vxpsjBr5MiAt/Mann-Vaswani?node-id=0-1&t=gHxY2JWxhOtLxPBM-1",
      details: [
        {
          subtitle: "The Problem",
          content: "Modern vision and multimodal AI systems are trained primarily on Western, urban-centric datasets. As a result, these models can identify global landmarks like the Eiffel Tower but fail to recognize Indian cultural, rural, and regional objects such as Durga Puja pandals, Rath Yatra processions, or village handpumps.\n\nThis gap exists because high-quality, geographically verified, and semantically accurate Indian image–text datasets do not exist at sufficient scale. Most available datasets lack location grounding, multilingual labeling, and multi-stage verification, which directly increases model error rates and bias in downstream AI systems.\n\nJoshTalksAI needed a system capable of collecting 1,000+ high-quality image–caption pairs per village while maintaining data integrity, geographic accuracy, and annotation reliability at a national scale.",
          image: "/project assets/Humanness/Screenshot 2026-06-09 at 12.03.47 AM.png"
        },
        {
          subtitle: "Users & Constraints",
          content: "The platform serves two fundamentally different user groups:\n\nContributors — NGO partners, field workers, and volunteers operating in low-bandwidth environments, low-end Android devices, multilingual contexts, and minimal training conditions.\n\nReviewers & Admins — Internal data teams responsible for quality assurance, geographic coverage tracking, annotation accuracy, and dataset readiness for AI training.\n\nThe core challenge was building a system that is simple enough for rural contributors but powerful enough for data scientists and operations teams managing nationwide dataset pipelines.",
          image: "/project assets/Humanness/Screenshot 2026-06-09 at 12.04.06 AM.png"
        },
        {
          subtitle: "The Product & System",
          content: "I designed and documented the entire system through a full Product Requirements Document (PRD), defining user roles, data pipelines, quality gates, and success metrics before building flows and UI.\n\nThe platform enables contributors to capture or upload images, auto-tag GPS location with manual override, add short multilingual descriptions, work offline and sync later, and review/confirm before submission.\n\nOn the backend, the admin system provides district-wise coverage heat maps, submission queues (pending, approved, rejected), image + metadata verification tools, filters by state, district, contributor, and date, and progress tracking toward the 1,000-image target per village. This converts raw crowd-sourced inputs into a structured, auditable, and model-ready dataset suitable for training vision-language models like CLIP or GPT-4V.",
          image: "/project assets/Humanness/Screenshot 2026-06-09 at 12.04.28 AM.png"
        },
        {
          subtitle: "The Impact",
          content: "The platform transforms millions of decentralized, low-quality inputs into a national-scale, culturally representative, and verification-backed AI dataset.\n\nBy enforcing location validation, caption quality, reviewer approval, and coverage tracking, the system directly improves training data accuracy, cultural representation, and model generalization across Indian contexts.\n\nThis reduces vision model bias, improves recognition accuracy, and enables JoshTalksAI to deliver 98–99% word- and image-level correctness — making AI systems more inclusive, fair, and useful for India.",
          image: "/project assets/Humanness/Screenshot 2026-06-09 at 12.04.37 AM.png"
        }
      ]
    },
    {
      id: "globalair",
      title: "Global Air Quality Intelligence Platform",
      subtitle: "Large-Scale Environmental Data Science & Machine Learning Platform",
      category: "Data Analysis",
      date: "2026",
      tech: ["Python", "Machine Learning", "Streamlit", "Data Pipelines", "Statistical Analysis"],
      description: "A large-scale environmental data science project integrating OpenAQ sensor data and World Bank indicators to analyze, model, and visualize global air pollution patterns using machine learning and statistical inference.",
      coverImage: "/project assets/Global/Cover.png",
      pdfLink: "https://drive.google.com/file/d/1nN2tO-gUuWnaKhaU0MoIUE06XbaOK9EN/view?usp=sharing",
      details: [
        {
          subtitle: "Problem",
          content: "Air pollution is responsible for approximately 7 million premature deaths annually, yet policymaking is often based on fragmented, regional, or single-pollutant studies. Most existing analyses fail to integrate real sensor data with socioeconomic indicators, making it difficult to understand inequality, seasonality, and policy impact at a global scale.\n\nThis project aimed to build a data-driven, reproducible analytical framework capable of answering high-stakes questions about how pollution, income, urbanization, and health interact across countries and over time.",
          image: "/project assets/Global/sub1.png"
        },
        {
          subtitle: "The Data & Pipeline",
          content: "I led the construction of a multi-source analytical dataset by integrating 30,241 raw air-quality measurements from OpenAQ and 3,092 socioeconomic records from the World Bank. These were standardized, cleaned, and aggregated into 946 country-year records with 33 engineered features.\n\nKey technical steps included ISO-2 → ISO-3 country code harmonization, removal of invalid coordinates and pollutant values, prevention of data leakage by deduplicating country-year pairs, and aggregation of sensor data into mean, median, variance, and counts. The result was a model-ready dataset linking pollution to GDP, urbanization, income class, and exposure metrics.",
          image: "/project assets/Global/sub2.png"
        },
        {
          subtitle: "Analysis & Machine Learning",
          content: "I conducted exploratory data analysis, statistical hypothesis testing, and machine learning to uncover global pollution patterns. Validated multiple hypotheses, including a strong negative correlation between urbanization and PM2.5, a statistically significant seasonal spike in winter vs summer pollution, and strong PM2.5-PM10 co-movement. A Random Forest Regressor was trained to predict PM2.5 using GDP per capita, urbanization, and pollutant values, achieving an R² of 0.82, RMSE of 14.29, and MAE of 4.70. This demonstrated that air pollution is driven by non-linear socio-economic and environmental interactions.",
          image: "/project assets/Global/sub3.png"
        },
        {
          subtitle: "Visualization & Impact",
          content: "To make the insights actionable, I built a Streamlit dashboard that allows users to compare countries and income groups, visualize trends from 2010–2023, explore seasonal patterns, validate hypotheses interactively, and view ML predictions in real time. The platform transforms raw environmental data into a policy-grade intelligence system for researchers, governments, and climate analysts.",
          image: "/project assets/Global/sub4.png"
        }
      ],
      gallery: [
        "/project assets/Global/sub5.png"
      ]
    }
  ],

  journey: [
    {
      year: "2023",
      title: "The Beginning",
      description: "Started my B.Tech in CS & AI at Newton School of Technology. Embarked on the journey of programming and software engineering."
    },
    {
      year: "2024",
      title: "Industry Experience",
      description: "Interned at MoveInSync building enterprise web UI, and developed Rishiverse — a full university ERP system from scratch."
    },
    {
      year: "2024",
      title: "Global Exposure",
      description: "Selected as a delegate for the HPAIR Harvard Conference at Chulalongkorn University in Bangkok."
    },
    {
      year: "2025",
      title: "Innovation & Growth",
      description: "Scaled operations at RealtyEaseAI, generated significant MRR, and built AgriSphere to solve real-world agricultural challenges."
    }
  ],

  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/mannvaswani" },
    { name: "GitHub", url: "https://github.com/mannvaswani" },
    { name: "Instagram", url: "https://instagram.com/mannvaswani" }
  ]
};
