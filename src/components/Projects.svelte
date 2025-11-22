<script lang="ts">
    import { projects } from "../data/projects";
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { Github, ExternalLink } from "lucide-svelte";

    gsap.registerPlugin(ScrollTrigger);

    let projectsSection: HTMLElement;

    onMount(() => {
        gsap.from(".project-card", {
            scrollTrigger: {
                trigger: projectsSection,
                start: "top 90%",
            },
            y: 50,
            // opacity: 0, // Removed to fix visibility issue
            duration: 0.8,
            stagger: 0.2,
        });
    });

    function handleMouseMove(e: MouseEvent, index: number) {
        const card = document.getElementById(`project-card-${index}`);
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function handleMouseLeave(index: number) {
        const card = document.getElementById(`project-card-${index}`);
        if (card) {
            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        }
    }
</script>

<section
    bind:this={projectsSection}
    id="projects"
    class="py-20 bg-dark text-white"
>
    <div class="container mx-auto px-6">
        <h2
            class="text-3xl md:text-4xl font-heading font-bold mb-12 text-center"
        >
            <span class="text-primary">03.</span> Featured Projects
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each projects as project, i}
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div
                    id={`project-card-${i}`}
                    class="project-card group relative p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 ease-out"
                    on:mousemove={(e) => handleMouseMove(e, i)}
                    on:mouseleave={() => handleMouseLeave(i)}
                >
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    ></div>

                    <div class="relative z-10">
                        <div class="flex justify-between items-start mb-4">
                            <h3
                                class="text-2xl font-bold text-white group-hover:text-primary transition-colors"
                            >
                                {project.name}
                            </h3>
                            <div class="flex gap-4">
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    class="text-gray-400 hover:text-primary transition-colors"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    class="text-gray-400 hover:text-primary transition-colors"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <p class="text-gray-400 mb-6 h-12 line-clamp-2">
                            {project.description}
                        </p>

                        <div class="mb-6">
                            <ul
                                class="list-disc list-inside text-sm text-gray-300 space-y-1"
                            >
                                {#each project.achievements as achievement}
                                    <li>{achievement}</li>
                                {/each}
                            </ul>
                        </div>

                        <div class="flex flex-wrap gap-2 mt-auto">
                            {#each project.tech as tech}
                                <span
                                    class="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded"
                                >
                                    {tech}
                                </span>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
