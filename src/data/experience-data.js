import { GiAchievement } from "react-icons/gi";

export const workExperiences = [
  {
    id: 1,
    title: "Solution Developer",
    duration: "Aug 2022 - Present",
    place: "Eye-Share Singapore Pte. Ltd",
    subDescription: "Norwegian tech company building solutions for digitalization and management of documents, with a particular focus on invoice management. Provided 1st & 2nd level customer support and built custom solutions for clients in Asia & Europe.",
    responsibilities: [
      "Leveraged C# & .NET to implement advanced threading techniques, ensuring efficient management of shared resources to handle any concurrency issues. Optimized performance by 40%.",
      "Designed API integrations, facilitating seamless real-time communication and data exchange between our application and external systems such as SAP & Oracle. Leveraged C#, MongoDB & Azure for cloud deployment.",
      "Led the successful migration of 4 servers & databases and the implementation of a new server for an on-premise customer with minimal downtime and preserved data integrity for 3 large clients, each with over 3000 users.",
    ],
    extraDetails: [
      "Participated in weekly Agile sprint meetings to ensure project milestones were met on time.",
      "Provided technical training to new team members, enhancing team capabilities and productivity."
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
      title: "Bachelor of Computing, Computer Science (Hons)", 
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
        { src: "cc-meeting.jpg", caption: "1st Milestone meeting with the Management Committee members" },
      ],
      achievements: [
        "School of Computing clinched the champions title at the NUS Inter Faculty Games for the first time ever, in 20 years, under the leadership of the members of the 24th Management Committee!"
      ]
    },
    // More leadership experiences...
  ];
  