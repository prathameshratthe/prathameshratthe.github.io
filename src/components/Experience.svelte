<script lang="ts">
    import { experience } from "../data/experience";
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { Briefcase } from "lucide-svelte";

    gsap.registerPlugin(ScrollTrigger);

    let experienceSection: HTMLElement;

    onMount(() => {
        gsap.from(".experience-card", {
            scrollTrigger: {
                trigger: experienceSection,
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
    bind:this={experienceSection}
    id="experience"
    class="py-20 bg-white dark:bg-dark text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300"
>
    <div class="container mx-auto px-6 relative z-10 max-w-4xl">
        <h2
            class="text-3xl md:text-4xl font-heading font-bold mb-12 flex items-center gap-3"
        >
            Experience
        </h2>

        <div
            class="relative border-l-2 border-gray-200 dark:border-white/10 ml-4 md:ml-8 space-y-12"
        >
            {#each experience as exp}
                <div class="experience-card relative pl-8 md:pl-12">
                    <!-- Timeline Dot -->
                    <div
                        class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    ></div>

                    <div
                        class="bg-gray-100 dark:bg-white/5 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-primary/30 transition-all group"
                    >
                        <div
                            class="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2"
                        >
                            <h3
                                class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors"
                            >
                                {exp.role}
                            </h3>
                            <span
                                class="text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full w-fit"
                            >
                                {exp.period}
                            </span>
                        </div>

                        <div
                            class="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-6"
                        >
                            <Briefcase size={16} />
                            <span class="font-semibold">{exp.company}</span>
                        </div>

                        <ul class="space-y-3">
                            {#each exp.description as item}
                                <li
                                    class="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                                >
                                    <span class="text-primary mt-1.5">▹</span>
                                    <span>{item}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
