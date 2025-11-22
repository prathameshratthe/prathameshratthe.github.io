export interface Project {
    name: string;
    description: string;
    tech: string[];
    achievements: string[];
    repoLink: string;
    liveLink: string;
    category: "Full Stack" | "Security" | "AI/ML";
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
        repoLink: "https://github.com/prathameshratthe/ThermalBill",
        liveLink: "#",
        category: "Full Stack"
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
        repoLink: "https://github.com/prathameshratthe/summarIQ",
        liveLink: "#",
        category: "AI/ML"
    },
    {
        name: "OSINT Recon Bot",
        description: "Open-source intelligence reconnaissance bot for gathering and analyzing public data.",
        tech: ["Python", "APIs", "Web Scraping", "Data Analysis", "Automation"],
        achievements: [
            "Developed an OSINT tool for automated reconnaissance.",
            "Integrated multiple data sources for comprehensive analysis.",
            "Implemented efficient data collection and reporting."
        ],
        repoLink: "https://github.com/prathameshratthe/osint-recon-bot",
        liveLink: "#",
        category: "Security"
    },
    {
        name: "SecureMedicos",
        description: "Secure platform for storing and managing health records using encryption techniques.",
        tech: ["Python", "FastAPI", "AES/RSA Encryption", "JWT Auth", "PostgreSQL", "AWS Security"],
        achievements: [
            "Developed a secure platform for health records.",
            "Ensured user authentication and data privacy through advanced security protocols.",
            "Patent holder for secure health data protection (Application No: 202421042657)."
        ],
        repoLink: "https://github.com/prathameshratthe/SecureMedicos",
        liveLink: "#",
        category: "Security"
    },
    {
        name: "Bakery Order Management System",
        description: "Comprehensive system for managing bakery orders, inventory, and customer relationships.",
        tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX"],
        achievements: [
            "Built a complete order management system for bakeries.",
            "Implemented inventory tracking and customer management.",
            "Designed an intuitive admin dashboard."
        ],
        repoLink: "https://github.com/prathameshratthe/Bakery-Order-Management-System",
        liveLink: "#",
        category: "Full Stack"
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
        repoLink: "https://github.com/prathameshratthe/VulneraTrack",
        liveLink: "#",
        category: "Security"
    }
];
