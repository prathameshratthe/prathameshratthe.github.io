<script lang="ts">
    import { onMount } from "svelte";
    import { Menu, X } from "lucide-svelte";
    import { isResumeModalOpen } from "../lib/store";

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
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<nav
    class={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-dark/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"}`}
>
    <div class="container mx-auto px-6 flex justify-between items-center">
        <a href="#" class="text-2xl font-heading font-bold text-white">
            PR<span class="text-primary">.</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
            <a
                href="#about"
                class="text-gray-300 hover:text-primary transition-colors"
                >About</a
            >
            <a
                href="#stack"
                class="text-gray-300 hover:text-primary transition-colors"
                >Skills</a
            >
            <a
                href="#projects"
                class="text-gray-300 hover:text-primary transition-colors"
                >Projects</a
            >
            <a
                href="#experience"
                class="text-gray-300 hover:text-primary transition-colors"
                >Experience</a
            >
            <a
                href="#contact"
                class="text-gray-300 hover:text-primary transition-colors"
                >Contact</a
            >
            <button
                on:click={openResumeModal}
                class="px-5 py-2 bg-primary/10 border border-primary/50 rounded-full text-primary font-semibold hover:bg-primary hover:text-dark transition-all cursor-pointer"
            >
                Resume
            </button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white" on:click={toggleMenu}>
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
            class="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-md border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl"
        >
            <a
                href="#about"
                class="text-gray-300 hover:text-primary transition-colors"
                on:click={toggleMenu}>About</a
            >
            <a
                href="#stack"
                class="text-gray-300 hover:text-primary transition-colors"
                on:click={toggleMenu}>Skills</a
            >
            <a
                href="#projects"
                class="text-gray-300 hover:text-primary transition-colors"
                on:click={toggleMenu}>Projects</a
            >
            <a
                href="#experience"
                class="text-gray-300 hover:text-primary transition-colors"
                on:click={toggleMenu}>Experience</a
            >
            <a
                href="#contact"
                class="text-gray-300 hover:text-primary transition-colors"
                on:click={toggleMenu}>Contact</a
            >
            <button
                on:click={openResumeModal}
                class="text-primary font-semibold text-left">Resume</button
            >
        </div>
    {/if}
</nav>
