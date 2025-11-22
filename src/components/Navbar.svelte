<script lang="ts">
    import { onMount } from "svelte";
    import { Menu, X, Download, Sun, Moon } from "lucide-svelte";
    import { isResumeModalOpen } from "../lib/store";
    import { slide, fly } from "svelte/transition";
    import { gsap } from "gsap";

    let isMenuOpen = false;
    let isScrolled = false;
    let showResumeBtn = false;
    let isDark = true;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function openResumeModal() {
        isResumeModalOpen.set(true);
        isMenuOpen = false;
    }

    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }

    onMount(() => {
        // Initialize Theme - Default to Light Mode
        if (localStorage.theme === "dark") {
            document.documentElement.classList.add("dark");
            isDark = true;
        } else if (
            localStorage.theme === "light" ||
            !("theme" in localStorage)
        ) {
            document.documentElement.classList.remove("dark");
            isDark = false;
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark");
            isDark = true;
        } else {
            document.documentElement.classList.remove("dark");
            isDark = false;
        }

        const handleScroll = () => {
            isScrolled = window.scrollY > 50;
            showResumeBtn = window.scrollY > window.innerHeight * 0.6;
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
    class={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 dark:bg-dark/80 backdrop-blur-md py-4 shadow-lg border-b border-gray-200 dark:border-white/10" : "bg-transparent py-6"}`}
>
    <div class="container mx-auto px-6 flex justify-between items-center">
        <a
            href="#"
            class="nav-logo text-2xl font-heading font-bold text-black dark:text-white"
        >
            PR<span class="text-primary">.</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
            {#each ["About", "Skills", "Projects", "Experience", "Contact"] as item}
                <a
                    href={`#${item.toLowerCase() === "skills" ? "stack" : item.toLowerCase()}`}
                    class="nav-link group relative text-black dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors py-2"
                >
                    {item}
                    <span
                        class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-primary-dark transition-all duration-300 group-hover:w-full"
                    ></span>
                </a>
            {/each}

            <button
                on:click={toggleTheme}
                class="nav-link p-2 rounded-full text-black dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
                aria-label="Toggle Theme"
            >
                {#if isDark}
                    <Sun size={20} />
                {:else}
                    <Moon size={20} />
                {/if}
            </button>

            {#if showResumeBtn}
                <div transition:fly={{ y: -20, duration: 500 }}>
                    <a
                        href="/resume.pdf"
                        download="Prathamesh_Ratthe_Resume.pdf"
                        class="nav-link px-5 py-2 bg-white dark:bg-white/5 border-2 border-primary dark:border-primary-dark rounded-full text-primary dark:text-primary-dark font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-dark transition-all cursor-pointer hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
                    >
                        <Download size={18} /> Resume
                    </a>
                </div>
            {/if}
        </div>

        <!-- Mobile Menu Button -->
        <button
            class="nav-logo md:hidden text-black dark:text-white"
            on:click={toggleMenu}
        >
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
            class="md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark/95 backdrop-blur-md border-b-2 border-gray-200 dark:border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl"
        >
            {#each ["About", "Skills", "Projects", "Experience", "Contact"] as item}
                <a
                    href={`#${item.toLowerCase() === "skills" ? "stack" : item.toLowerCase()}`}
                    class="text-black dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
                    on:click={toggleMenu}>{item}</a
                >
            {/each}

            <button
                on:click={toggleTheme}
                class="text-black dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors flex items-center gap-2"
            >
                {#if isDark}
                    <Sun size={20} /> Light Mode
                {:else}
                    <Moon size={20} /> Dark Mode
                {/if}
            </button>

            <a
                href="/resume.pdf"
                download="Prathamesh_Ratthe_Resume.pdf"
                class="text-primary dark:text-primary-dark font-semibold text-left flex items-center gap-2"
                on:click={toggleMenu}
            >
                <Download size={18} /> Download Resume
            </a>
        </div>
    {/if}
</nav>
