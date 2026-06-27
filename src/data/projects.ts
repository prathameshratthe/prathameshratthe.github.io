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
        description: "Full-stack restaurant billing and management system with React frontend, backend APIs, Redis caching, and cloud storage on AWS.",
        tech: ["FastAPI", "React", "TypeScript", "Tailwind CSS", "Redis", "MySQL", "AWS S3", "Docker"],
        achievements: [
            "Architected and implemented a full-stack restaurant billing and management system.",
            "Integrated Redis caching and AWS cloud storage, improving response consistency.",
            "Supported multi-role operational workflows across menu, billing, and organization modules.",
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
        name: "SecureMedicose",
        description: "Encrypted health records platform with backend APIs, authentication, and role-based access control.",
        tech: ["Python", "FastAPI", "AES/RSA Encryption", "JWT Auth", "PostgreSQL", "AWS Security"],
        achievements: [
            "Developed a secure health records platform with backend APIs, encryption, and authentication.",
            "Implemented role-based access control for secure healthcare data handling.",
            "Resulted in a patented solution for secure health data protection (Indian Patent Office, 2024)."
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
        description: "Real-time security vulnerability scanner integrated with backend logic to identify common web vulnerabilities.",
        tech: ["JavaScript", "React", "Chrome Extension APIs", "Cybersecurity Scanning", "Git"],
        achievements: [
            "Built a browser-based security scanning application for real-time vulnerability detection.",
            "Integrated with backend logic to identify common web vulnerabilities.",
            "Generated actionable security insights and detailed reports."
        ],
        repoLink: "https://github.com/prathameshratthe/VulneraTrack",
        liveLink: "#",
        category: "Security"
    }
];
