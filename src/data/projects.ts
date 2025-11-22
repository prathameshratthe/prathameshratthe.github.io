export interface Project {
    name: string;
    description: string;
    tech: string[];
    achievements: string[];
    repoLink: string;
    liveLink: string;
}

export const projects: Project[] = [
    {
        name: "ThermalBill",
        description: "Full-stack restaurant billing and management system with menu, billing, and organization modules.",
        tech: ["FastAPI", "React", "TypeScript", "Tailwind CSS", "Redis", "MySQL", "AWS S3", "Docker"],
        achievements: [
            "Built a full-stack restaurant billing and management system.",
            "Integrated Redis caching for faster data retrieval.",
            "Implemented AWS S3 for secure file storage.",
            "Designed a scalable REST API with FastAPI."
        ],
        repoLink: "https://github.com/prathameshratthe",
        liveLink: "#"
    },
    {
        name: "SecureMedicose",
        description: "Secure platform for storing and managing health records using encryption techniques.",
        tech: ["Python", "FastAPI", "AES/RSA Encryption", "JWT Auth", "PostgreSQL", "AWS Security"],
        achievements: [
            "Developed a secure platform for health records.",
            "Ensured user authentication and data privacy through advanced security protocols.",
            "Patent holder for secure health data protection (Application No: 202421042657)."
        ],
        repoLink: "https://github.com/prathameshratthe",
        liveLink: "#"
    },
    {
        name: "VulneraTrack",
        description: "Web extension to track and identify security vulnerabilities in real time.",
        tech: ["JavaScript", "React", "Chrome Extension APIs", "Cybersecurity Scanning", "Git"],
        achievements: [
            "Developed a web extension for real-time vulnerability tracking.",
            "Enabled seamless browser integration.",
            "Provided detailed reports for effective vulnerability management."
        ],
        repoLink: "https://github.com/prathameshratthe",
        liveLink: "#"
    },
    {
        name: "summarIQ",
        description: "AI-driven system to summarize YouTube videos and verify content authenticity.",
        tech: ["Python", "FastAPI", "NLP & ML", "YouTube API", "React", "Tailwind CSS"],
        achievements: [
            "Created an AI-driven system to summarize YouTube videos.",
            "Integrated fact-checking and fake news detection.",
            "Utilized NLP models for accurate content analysis."
        ],
        repoLink: "https://github.com/prathameshratthe",
        liveLink: "#"
    }
];
