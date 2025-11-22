<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ArrowRight, Download } from "lucide-svelte";
  import { isResumeModalOpen } from "../lib/store";

  let heroSection: HTMLElement;
  let content: HTMLElement;
  let image: HTMLElement;

  function openResumeModal() {
    isResumeModalOpen.set(true);
  }

  onMount(() => {
    const tl = gsap.timeline();

    tl.from(content, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    }).from(
      image,
      {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.8",
    );

    // Particle effect
    const particles = document.querySelectorAll(".particle");
    particles.forEach((p) => {
      gsap.to(p, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(2, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  });
</script>

<section
  bind:this={heroSection}
  class="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark text-white pt-20"
>
  <!-- Background Elements -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      class="particle absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-50 blur-sm"
    ></div>
    <div
      class="particle absolute top-3/4 right-1/4 w-3 h-3 bg-secondary rounded-full opacity-40 blur-sm"
    ></div>
    <div
      class="particle absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full opacity-30"
    ></div>

    <div
      class="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"
    ></div>
  </div>

  <div class="container mx-auto px-6 relative z-10">
    <div
      class="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
    >
      <!-- Text Content -->
      <div bind:this={content} class="lg:w-1/2 text-center lg:text-left">
        <h1
          class="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >Prathamesh Ratthe</span
          >
        </h1>

        <p class="text-xl md:text-2xl text-gray-400 mb-10 font-light">
          Software Developer
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
        >
          <a
            href="#projects"
            class="group relative px-8 py-3 bg-primary/10 border border-primary/50 rounded-full text-primary font-semibold overflow-hidden transition-all hover:bg-primary hover:text-dark hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            <span class="relative z-10 flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </span>
          </a>

          <button
            on:click={openResumeModal}
            class="group px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download size={18} /> Download Resume
          </button>
        </div>
      </div>

      <!-- Profile Image -->
      <div
        bind:this={image}
        class="lg:w-1/2 flex justify-center lg:justify-end"
      >
        <div class="relative w-72 h-72 md:w-96 md:h-96">
          <div
            class="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse"
          ></div>
          <div
            class="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-primary to-secondary"
          >
            <img
              src="/assets/profile.jpg"
              alt="Prathamesh Ratthe"
              class="w-full h-full object-cover rounded-full border-4 border-dark"
            />
          </div>

          <!-- Floating Badge -->
          <div
            class="absolute bottom-4 -left-4 bg-dark/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 animate-bounce shadow-xl"
          >
            <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse"
            ></span>
            <span class="text-sm font-mono">Open to Work</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
