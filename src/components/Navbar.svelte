<script lang="ts">
    import { onMount } from "svelte";
    import { Menu, X } from "lucide-svelte";
    import { isResumeModalOpen } from "../lib/store";
    import { slide } from "svelte/transition";
    import { gsap } from "gsap";

    let isMenuOpen = false;
    let isScrolled = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function openResumeModal() {
        isResumeModalOpen.set(true);
        isMenuOpen = false;
    }

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 50;
        };
        window.addEventListener("scroll", handleScroll);

        // Initial Animation
        const tl = gsap.timeline();
        tl.from(".nav-logo", {
            y: -20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        }).from(
            ".nav-link",
            {
                y: -20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out",
            },
            "-=0.4",
        );

        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<nav
    class={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-dark/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"}`}
>
    <div class="container mx-auto px-6 flex justify-between items-center">
        <a href="#" class="nav-logo text-2xl font-heading font-bold text-white">
            PR<span class="text-primary">.</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
            {#each ["About", "Skills", "Projects", "Experience", "Contact"] as item}
                <a
                    href={`#${item.toLowerCase() === "skills" ? "stack" : item.toLowerCase()}`}
                    class="nav-link group relative text-gray-300 hover:text-primary transition-colors py-2"
                >
                    {item}
                    <span
                        class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                    ></span>
                </a>
            {/each}

            <button
                on:click={openResumeModal}
                class="nav-link px-5 py-2 bg-primary/10 border border-primary/50 rounded-full text-primary font-semibold hover:bg-primary hover:text-dark transition-all cursor-pointer hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:-translate-y-0.5"
            >
                Resume
            </button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="nav-logo md:hidden text-white" on:click={toggleMenu}>
            {#if isMenuOpen}
                <X size={28} />
            {:else}
                <Menu size={28} />
            {/if}
        </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
        <div
            transition:slide={{ duration: 300 }}
            class="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-md border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl"
        >
            {#each ["About", "Skills", "Projects", "Experience", "Contact"] as item}
                <a
                    href={`#${item.toLowerCase() === "skills" ? "stack" : item.toLowerCase()}`}
                    class="text-gray-300 hover:text-primary transition-colors"
                    on:click={toggleMenu}>{item}</a
                >
            {/each}
            <button
                on:click={openResumeModal}
                class="text-primary font-semibold text-left">Resume</button
            >
        </div>
    {/if}
</nav>
