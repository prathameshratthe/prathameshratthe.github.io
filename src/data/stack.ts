export interface TechCategory {
    name: string;
    skills: string[];
}

export const techStack: TechCategory[] = [
    {
        name: "AI & GenAI",
        skills: ["Large Language Models (LLMs)", "OpenAI APIs", "Prompt Engineering", "RAG", "AI Automation Workflows"]
    },
    {
        name: "Frontend",
        skills: ["React", "Svelte", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
        name: "Backend",
        skills: ["FastAPI", "Python", "Node.js", "REST APIs", "API Integration", "Microservices Architecture"]
    },
    {
        name: "Database",
        skills: ["PostgreSQL", "MySQL", "Redis"]
    },
    {
        name: "Cloud & DevOps",
        skills: ["AWS (S3, EC2, Lambda, API Gateway)", "Docker", "CI/CD Pipelines", "Git", "GitHub Actions"]
    },
    {
        name: "Security",
        skills: ["JWT", "OAuth", "AES & RSA Encryption", "Secure API Architecture"]
    }
];
