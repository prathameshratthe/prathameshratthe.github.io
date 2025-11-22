<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import Hero from "./components/Hero.svelte";
  import About from "./components/About.svelte";
  import Achievements from "./components/Achievements.svelte";
  import TechStack from "./components/TechStack.svelte";
  import Projects from "./components/Projects.svelte";
  import Experience from "./components/Experience.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import ResumeModal from "./components/ResumeModal.svelte";
  import Cursor from "./components/Cursor.svelte";
  import ScrollToTop from "./components/ScrollToTop.svelte";
  import { onMount } from "svelte";

  // Smooth scrolling for anchor links
  onMount(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href",
        );
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          targetElement?.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  });
</script>

<main
  class="bg-white dark:bg-dark min-h-screen text-gray-900 dark:text-white selection:bg-primary/30 selection:text-primary transition-colors duration-300"
>
  <Navbar />
  <Cursor />
  <Hero />
  <About />
  <Achievements />
  <TechStack />
  <Projects />
  <Experience />
  <Contact />
  <Footer />
  <ResumeModal />
  <Cursor />
  <ScrollToTop />
</main>
