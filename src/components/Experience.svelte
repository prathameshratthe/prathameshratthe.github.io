<script lang="ts">
    import { experience } from "../data/experience";
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    let expSection: HTMLElement;

    onMount(() => {
        gsap.from(".exp-item", {
            scrollTrigger: {
                trigger: expSection,
                start: "top 80%",
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
        });
    });
</script>

<section
    bind:this={expSection}
    id="experience"
    class="py-20 bg-dark/50 text-white"
>
    <div class="container mx-auto px-6 max-w-4xl">
        <h2
            class="text-3xl md:text-4xl font-heading font-bold mb-12 flex items-center gap-3"
        >
            <span class="text-primary">04.</span> Experience
        </h2>

        <div
            class="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12"
        >
            {#each experience as job}
                <div class="exp-item relative pl-8 md:pl-12">
                    <!-- Dot -->
                    <div
                        class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-dark border-2 border-primary shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    ></div>

                    <div
                        class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2"
                    >
                        <h3 class="text-xl font-bold text-white">{job.role}</h3>
                        <span
                            class="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0"
                        >
                            {job.period}
                        </span>
                    </div>

                    <h4 class="text-lg text-secondary font-semibold mb-4">
                        {job.company}
                    </h4>

                    <ul class="list-disc list-inside space-y-2 text-gray-400">
                        {#each job.description as desc}
                            <li>{desc}</li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</section>
