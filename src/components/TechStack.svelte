<script lang="ts">
    import { techStack } from "../data/stack";
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { Layout, Server, Database } from "lucide-svelte";

    gsap.registerPlugin(ScrollTrigger);

    let stackSection: HTMLElement;

    onMount(() => {
        gsap.from(".stack-category", {
            scrollTrigger: {
                trigger: stackSection,
                start: "top 90%",
            },
            y: 30,
            // opacity: 0, // Removed to fix visibility issue
            duration: 0.8,
            stagger: 0.1,
        });
    });
</script>

<section
    bind:this={stackSection}
    id="stack"
    class="py-20 bg-white dark:bg-dark text-gray-900 dark:text-white transition-colors duration-300"
>
    <div class="container mx-auto px-6">
        <h2
            class="text-3xl md:text-4xl font-heading font-bold mb-12 text-center"
        >
            Tech Stack
        </h2>

        <div class="flex flex-wrap justify-center gap-8">
            {#each techStack as category}
                <div
                    class="stack-category group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-6 bg-gray-100 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                    <h3
                        class="text-xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-primary transition-colors flex items-center gap-2"
                    >
                        {#if category.name === "Frontend"}
                            <Layout size={20} />
                        {:else if category.name === "Backend"}
                            <Server size={20} />
                        {:else}
                            <Database size={20} />
                        {/if}
                        {category.name}
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        {#each category.skills as skill}
                            <span
                                class="px-3 py-1 bg-white dark:bg-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                            >
                                {skill}
                            </span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
