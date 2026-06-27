export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string[];
}

export const experience: Experience[] = [
    {
        role: "Gen AI Engineer",
        company: "Tata Consultancy Services (TCS)",
        period: "Dec 2025 – Present",
        description: [
            "Contributed to the development and deployment of AI-powered enterprise solutions on the iR2D.ai platform for global clients including Airbus and Siemens Energy.",
            "Worked on integrating Generative AI workflows, backend APIs, and cloud-native services using Python and FastAPI to support AI-driven enterprise applications.",
            "Collaborated with Agile teams on deployment, monitoring, testing, and optimization of scalable AI solutions using Git-based workflows and CI/CD pipelines."
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
