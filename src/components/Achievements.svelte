<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { Award, ExternalLink, Shield, Code, Terminal } from "lucide-svelte";

    gsap.registerPlugin(ScrollTrigger);

    let achievementsSection: HTMLElement;

    const achievements = [
        {
            title: "Patent Holder",
            organization: "Intellectual Property India",
            description: "Secure Health Data Protection System",
            id: "Application No: 202421042657",
            icon: Shield,
            color: "text-primary dark:text-green-400",
            bg: "bg-primary/10 dark:bg-green-400/10",
            border: "border-primary/20 dark:border-green-400/20",
            link: "#",
        },
        {
            title: "Credly Badges",
            organization: "Professional Certifications",
            description: "Verified skills and certifications",
            id: "View Profile",
            icon: Award,
            color: "text-primary dark:text-orange-400",
            bg: "bg-primary/10 dark:bg-orange-400/10",
            border: "border-primary/20 dark:border-orange-400/20",
            link: "https://www.credly.com/users/prathameshratthe/edit#credly",
        },
        {
            title: "HackerRank",
            organization: "Competitive Programming",
            description: "Problem Solving & Algorithms",
            id: "View Profile",
            icon: Terminal,
            color: "text-primary dark:text-green-500",
            bg: "bg-primary/10 dark:bg-green-500/10",
            border: "border-primary/20 dark:border-green-500/20",
            link: "https://www.hackerrank.com/profile/prathameshratthe",
        },
        {
            title: "LeetCode",
            organization: "Coding Challenges",
            description: "Data Structures & Algorithms",
            id: "View Profile",
            icon: Code,
            color: "text-primary dark:text-yellow-500",
            bg: "bg-primary/10 dark:bg-yellow-500/10",
            border: "border-primary/20 dark:border-yellow-500/20",
            link: "https://leetcode.com/u/prathameshratthe/",
        },
    ];

    onMount(() => {
        gsap.from(".achievement-card", {
            scrollTrigger: {
                trigger: achievementsSection,
                start: "top 80%",
            },
            y: 30,
            duration: 0.8,
            stagger: 0.2,
        });
    });
</script>

<section
    bind:this={achievementsSection}
    id="achievements"
    class="py-20 bg-white dark:bg-dark text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300"
>
    <!-- Background Elements -->
    <div
        class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
    ></div>
    <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
    ></div>

    <div class="container mx-auto px-6 relative z-10">
        <h2
            class="text-3xl md:text-4xl font-heading font-bold mb-12 text-center"
        >
            Achievements & Certifications
        </h2>

        <div class="flex flex-wrap justify-center gap-6">
            {#each achievements as item}
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class={`achievement-card w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] group relative p-6 rounded-xl border ${item.border} ${item.bg} hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-1`}
                >
                    <div class="flex items-start justify-between mb-4">
                        <div class={`p-3 rounded-lg ${item.bg} ${item.color}`}>
                            <svelte:component this={item.icon} size={24} />
                        </div>
                        {#if item.link !== "#"}
                            <ExternalLink
                                size={16}
                                class="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                            />
                        {/if}
                    </div>

                    <h3
                        class="text-xl font-bold mb-1 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                    >
                        {item.title}
                    </h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {item.organization}
                    </p>

                    <div
                        class="pt-4 border-t border-gray-200 dark:border-white/5"
                    >
                        <p
                            class="text-sm text-gray-600 dark:text-gray-300 mb-1"
                        >
                            {item.description}
                        </p>
                        <p class="text-xs font-mono text-primary/80">
                            {item.id}
                        </p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>
