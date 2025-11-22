<script lang="ts">
    import { techStack } from "../data/stack";
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    class="py-20 bg-dark/50 text-white"
>
    <div class="container mx-auto px-6">
        <h2
            class="text-3xl md:text-4xl font-heading font-bold mb-12 text-center"
        >
            Tech Stack
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each techStack as category}
                <div
                    class="stack-category p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                    <h3 class="text-xl font-bold mb-4 text-primary">
                        {category.name}
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        {#each category.skills as skill}
                            <span
                                class="px-3 py-1 bg-dark rounded-full text-sm text-gray-300 border border-white/10 hover:border-primary/50 hover:text-white transition-colors cursor-default"
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
