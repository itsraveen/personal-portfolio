import { GiAchievement } from "react-icons/gi";

export const workExperiences = [
  {
    id: 1,
    title: "Founder",
    duration: "Apr 2025 – Jul 2026",
    place: "Gigspresso (Singapore)",
    link: "https://gigspresso.com",
    subDescription: "I built and launched a two-sided marketplace that connects brands with micro-creators for user-generated content. I owned everything from product design and development to creator acquisition, growth and operations. I ran 20+ user interviews to shape the MVP and go-to-market strategy, onboarded 15 creators and several brand partners, launched our first live campaign, and improved campaign engagement by 15% based on user feedback.",
    images: [
      { src: "gigspresso1.png", caption: "Gigspresso on mobile: UGC campaigns for brands" },
      { src: "gigspresso2.png", caption: "Launch campaign for brands" },
    ]
  },
  {
    id: 2,
    title: "Senior Technical Consultant",
    duration: "Aug 2022 – Aug 2026",
    place: "Eye-share (Norway & Singapore)",
    subDescription: "Eye-share is a Norwegian software company that automates invoice processing and purchase-to-pay for enterprises. I joined as one of its first five employees in Singapore and worked with clients across Asia and Europe.",
    responsibilities: [
      "Helped shape Eye-share's expansion into Asia, adapting service models and SLAs to what clients in the region expected.",
      "Supported enterprise sales through pre-sales consulting, turning prospects' needs into tailored solutions.",
      "Advised C-suite stakeholders in Norway, Greece and Hong Kong, which built a pipeline of 3+ follow-on projects.",
      "Led three cross-border enterprise implementations from start to go-live, with 100% client retention.",
      "Cut processing time by 80% and operating costs by 25% through automation and integrations with SAP and Oracle (20,000+ transactions a month).",
    ],
    images: [
      { src: "eye-share-pioneer-memebers.png", caption: "Pioneering members of Eye-share Singapore" },
      { src: "eye-share-trip.png", caption: "Team Hike Up Preikestolen (Stavanger, Norway)" },
    ]
  },
  // More work experiences...
];


  
export const educations = [
    {
      id: 1,
      title: "Master of Business Administration (MBA), Management Science",
      duration: "Aug 2026 – May 2028 (expected)",
      place: "Boston University, Questrom School of Business",
      extraDetails: [
        "Focus: product, strategy and go-to-market for tech companies",
        "Relevant coursework: Marketing Management, Business Analytics (Data Analysis & Risk), Finance, Team Coaching",
        "Integrated Project: analyzed JetBlue Airways' strategy as a team and presented recommendations to faculty",
        "Competing in the Woolpower case competition on ethical growth strategy",
      ],
      images: [
        { src: "MBA1.png", caption: "Starting my MBA at Boston University" },
        { src: "MBA2.png", caption: "Presenting our JetBlue strategy recommendations" },
      ]
    },
    {
      id: 2,
      title: "Bachelors of Computing (Honours) in Computer Science", 
      duration: "2020 - 2024", 
      place: "National University of Singapore",
      extraDetails: [
        "Relevant coursework include Data Structures & Algorithms, Database Systems, Computer Networks, Operating Systems, Computer Architecture, Machine Learning, Artificial Intelligence, Cloud Computing",
        "Teaching assistant for CS3240 Interaction Design (UIUX) Module",
      ],
      images: [
        { src: "gradonstage.png", caption: "Commencement Day" },
        { src: "grad.png", caption: "Graduation 2024" },
      ]
    },
    // More education entries...
];
  
  export const leadershipExperiences = [
    {
      id: 1,
      title: "President",
      duration: "Aug 2021 - Sep 2022",
      place: "NUS Students' Computing Club (School of Computing)",
      subDescription: "Led a student club at NUS with over 300 members.",
      responsibilities: [
        "Led a team of 200 members in organizing over 40 events for students of the NUS School of Computing (SoC).",
        "Ensured the well-being of over 4,500 students by overseeing and supporting student life in the NUS SoC and maintaining a cordial relationship with the Dean’s Office.",
      ],
      images: [
        { src: "cc-booth.jpg", caption: "Computing Club Booth with committee members" },
        { src: "cc-meeting.jpg", caption: "1st Milestone meeting with the Management Committee" }
      ],
      achievements: [
        "School of Computing clinched the champions title at the NUS Inter Faculty Games for the first time ever, in 20 years, under the leadership of the members of the 24th Management Committee!"
      ]
    },
    // More leadership experiences...
  ];
  