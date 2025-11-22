export interface TechCategory {
    name: string;
    skills: string[];
}

export const techStack: TechCategory[] = [
    {
        name: "Frontend",
        skills: ["React", "Svelte", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
        name: "Backend",
        skills: ["FastAPI", "Python", "Node.js", "REST APIs"]
    },
    {
        name: "Database",
        skills: ["MySQL", "PostgreSQL", "Redis"]
    },
    {
        name: "DevOps & Cloud",
        skills: ["Docker", "AWS (S3, Security)", "Zscaler", "Cloud Computing", "Git", "Linux"]
    },
    {
        name: "Tools & Security",
        skills: ["VS Code", "Postman", "Wireshark", "Nmap", "BigQuery", "Figma"]
    }
];
