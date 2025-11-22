<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";

    let cursor: HTMLElement;
    let follower: HTMLElement;
    let isOverCaptcha = false;

    onMount(() => {
        const moveCursor = (e: MouseEvent) => {
            // Check if hovering over hCaptcha
            const target = e.target as HTMLElement;
            const captchaElement = target.closest(".h-captcha");
            isOverCaptcha = captchaElement !== null;

            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
                opacity: isOverCaptcha ? 0 : 1,
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out",
                opacity: isOverCaptcha ? 0 : 0.5,
            });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    });
</script>

<div
    bind:this={cursor}
    class="fixed top-0 left-0 w-[26px] h-[26px] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
>
    <img
        src="/assets/cursor.png"
        alt="cursor"
        class="w-full h-full object-contain"
    />
</div>

<div
    bind:this={follower}
    class="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
>
    <div
        class="w-full h-full rounded-full border border-primary/50 bg-primary/10 blur-sm"
    ></div>
</div>

<style>
    :global(body) {
        cursor: none;
    }

    :global(a),
    :global(button) {
        cursor: none;
    }
</style>
