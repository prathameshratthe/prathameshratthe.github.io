<script lang="ts">
    import { onMount } from "svelte";
    import { ArrowUp } from "lucide-svelte";
    import { fly } from "svelte/transition";

    let showScrollTop = false;

    onMount(() => {
        const handleScroll = () => {
            showScrollTop = window.scrollY > 500;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
</script>

{#if showScrollTop}
    <button
        on:click={scrollToTop}
        transition:fly={{ y: 20, duration: 300 }}
        class="fixed bottom-8 right-8 z-40 p-3 bg-primary text-dark rounded-full shadow-lg hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Scroll to top"
    >
        <ArrowUp size={24} class="group-hover:scale-110 transition-transform" />
    </button>
{/if}
