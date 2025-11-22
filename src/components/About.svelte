<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { Coffee, Code, Server, Shield } from "lucide-svelte";

    gsap.registerPlugin(ScrollTrigger);

    let aboutSection: HTMLElement;

    onMount(() => {
        gsap.from(".about-content", {
            scrollTrigger: {
                trigger: aboutSection,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
        });
    });
</script>

<section
    bind:this={aboutSection}
    id="about"
    class="py-20 bg-white dark:bg-dark text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300"
>
    <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-12">
            <!-- Profile Image -->
            <div class="w-full md:w-1/3 flex justify-center about-content">
                <div class="relative w-64 h-64 md:w-80 md:h-80">
                    <div
                        class="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl rotate-6 opacity-50 blur-lg"
                    ></div>
                    <img
                        src="/assets/IMG_6668.jpg"
                        alt="Prathamesh Ratthe"
                        class="relative w-full h-full object-cover rounded-2xl border-2 border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>

            <!-- Content -->
            <div class="w-full md:w-2/3 about-content">
                <h2
                    class="text-3xl md:text-4xl font-heading font-bold mb-6 flex items-center gap-3"
                >
                    About Me
                </h2>

                <p
                    class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6"
                >
                    I'm a <span class="text-primary font-semibold"
                        >Software Developer</span
                    > passionate about building secure, scalable solutions. My work
                    spans full-stack development, cloud computing, and cybersecurity
                    — transforming complex challenges into impactful, real-world
                    software experiences.
                </p>

                <p class="text-gray-500 dark:text-gray-400 mb-8 italic">
                    "Building scalable apps, engineering backends, deploying
                    services, and drinking coffee."
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div
                        class="p-4 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-primary/30 transition-all group"
                    >
                        <Code
                            class="text-primary mb-3 group-hover:scale-110 transition-transform"
                            size={32}
                        />
                        <h3 class="font-bold mb-1">Full Stack</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                            React, Svelte, FastAPI, Node.js
                        </p>
                    </div>

                    <div
                        class="p-4 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-secondary/30 transition-all group"
                    >
                        <Shield
                            class="text-secondary mb-3 group-hover:scale-110 transition-transform"
                            size={32}
                        />
                        <h3 class="font-bold mb-1">Security</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                            Cybersecurity, Encryption, Auth
                        </p>
                    </div>

                    <div
                        class="p-4 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-primary/30 transition-all group"
                    >
                        <Server
                            class="text-primary mb-3 group-hover:scale-110 transition-transform"
                            size={32}
                        />
                        <h3 class="font-bold mb-1">DevOps</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                            Docker, AWS, CI/CD
                        </p>
                    </div>

                    <div
                        class="p-4 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-secondary/30 transition-all group"
                    >
                        <Coffee
                            class="text-secondary mb-3 group-hover:scale-110 transition-transform"
                            size={32}
                        />
                        <h3 class="font-bold mb-1">Lifestyle</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                            Coffee, Coding, Learning
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
