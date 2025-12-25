export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string[];
}

export const experience: Experience[] = [
    {
        role: "Assistant System Engineer",
        company: "Tata Consultancy Services (TCS)",
        period: "Dec 2025 – Present",
        description: [
            "Working on enterprise-grade software development and maintenance projects.",
            "Contributing to backend and API development, debugging, and performance optimization.",
            "Collaborating with cross-functional teams to deliver scalable and reliable solutions.",
            "Following Agile/Scrum practices and adhering to coding standards and best practices."
        ]
    },
    {
        role: "Secretary & Joint Secretary",
        company: "Cybersecurity Students’ Executive Council, RCOEM",
        period: "2023 - 2025",
        description: [
            "Led the executive council in organizing events and workshops.",
            "Managed a team of student volunteers.",
            "Promoted cybersecurity awareness among students."
        ]
    },
    {
        role: "Class Representative",
        company: "RCOEM",
        period: "2023 - 2024",
        description: [
            "Represented the class in official meetings.",
            "Coordinated between students and faculty.",
            "Organized class activities and events."
        ]
    },
    {
        role: "Event Organizer",
        company: "AARHANT’23",
        period: "2023",
        description: [
            "Organized a 1-week Cybersecurity Awareness Event with 1500+ participants.",
            "Managed logistics and scheduling.",
            "Coordinated with speakers and sponsors."
        ]
    }
];
