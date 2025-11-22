<script lang="ts">
    import { projects } from "../data/projects";
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { Github } from "lucide-svelte";

    gsap.registerPlugin(ScrollTrigger);

    let projectsSection: HTMLElement;

    let selectedCategory = "All";
    const categories = ["All", "Full Stack", "Security", "AI/ML"];

    $: filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    onMount(() => {
        gsap.from(".project-card", {
            scrollTrigger: {
                trigger: projectsSection,
                start: "top 90%",
            },
            y: 50,
            duration: 0.8,
            stagger: 0.2,
        });
    });
</script>

<section
    bind:this={projectsSection}
    id="projects"
    class="py-20 bg-white dark:bg-dark text-gray-900 dark:text-white transition-colors duration-300"
>
    <div class="container mx-auto px-6">
        <h2
            class="text-3xl md:text-4xl font-heading font-bold mb-12 text-center"
        >
            Featured Projects
        </h2>

        <!-- Filter Buttons -->
        <div class="flex justify-center gap-4 mb-12 flex-wrap">
            {#each categories as category}
                <button
                    class="px-6 py-2 rounded-full border-2 transition-all duration-300
                    {selectedCategory === category
                        ? 'bg-primary text-white dark:bg-primary-dark dark:text-dark border-primary dark:border-primary-dark font-semibold'
                        : 'bg-white dark:bg-transparent text-black dark:text-gray-400 border-black dark:border-white/10 hover:border-primary dark:hover:border-primary-dark hover:text-primary dark:hover:text-primary-dark'}"
                    on:click={() => (selectedCategory = category)}
                >
                    {category}
                </button>
            {/each}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each filteredProjects as project, i (project.name)}
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-card-${i}`}
                    class="project-card h-full flex flex-col group relative bg-white dark:bg-white/5 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-white/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-primary dark:hover:border-primary-dark"
                >
                    <div class="p-8 relative z-10 flex flex-col h-full">
                        <div class="flex justify-between items-start mb-4">
                            <h3
                                class="text-2xl font-bold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary-dark transition-colors"
                            >
                                {project.name}
                            </h3>
                            <div class="flex gap-4">
                                <div
                                    class="text-black dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors"
                                >
                                    <Github size={20} />
                                </div>
                            </div>
                        </div>

                        <p
                            class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                        >
                            {project.description}
                        </p>

                        <div class="space-y-3 mb-8 flex-grow">
                            {#each project.achievements as achievement}
                                <div class="flex items-start gap-2">
                                    <span class="text-primary mt-1">▹</span>
                                    <span
                                        class="text-sm text-gray-600 dark:text-gray-400"
                                        >{achievement}</span
                                    >
                                </div>
                            {/each}
                        </div>

                        <div class="flex flex-wrap gap-3 mt-auto">
                            {#each project.tech as tech}
                                <span
                                    class="px-3 py-1 bg-white dark:bg-white/10 rounded-full text-xs font-mono text-primary border border-gray-200 dark:border-white/5"
                                >
                                    {tech}
                                </span>
                            {/each}
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>
