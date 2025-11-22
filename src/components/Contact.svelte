<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import {
        Github,
        Linkedin,
        Mail,
        Send,
        Loader2,
        CheckCircle,
        AlertCircle,
    } from "lucide-svelte";

    gsap.registerPlugin(ScrollTrigger);

    let contactSection: HTMLElement;

    // Form State
    let name = "";
    let email = "";
    let message = "";
    let isSubmitting = false;
    let submitStatus: "idle" | "success" | "error" = "idle";
    let statusMessage = "";

    // Web3Forms Access Key
    const ACCESS_KEY = "274fb1d1-b4e9-4451-ae2e-a5c16071507c";

    onMount(() => {
        gsap.from(".contact-content", {
            scrollTrigger: {
                trigger: contactSection,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
        });
    });

    async function handleSubmit() {
        if (!name || !email || !message) return;

        isSubmitting = true;
        submitStatus = "idle";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    name,
                    email,
                    message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                submitStatus = "success";
                statusMessage =
                    "Message sent successfully! I'll get back to you soon.";
                name = "";
                email = "";
                message = "";
            } else {
                submitStatus = "error";
                statusMessage =
                    result.message || "Something went wrong. Please try again.";
            }
        } catch (error) {
            submitStatus = "error";
            statusMessage =
                "Failed to send message. Please check your connection.";
        } finally {
            isSubmitting = false;
            setTimeout(() => {
                submitStatus = "idle";
                statusMessage = "";
            }, 5000);
        }
    }
</script>

<section
    bind:this={contactSection}
    id="contact"
    class="py-20 bg-dark text-white relative overflow-hidden"
>
    <!-- Background Glow -->
    <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
        class="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
    ></div>

    <div class="container mx-auto px-6 max-w-4xl relative z-10">
        <h2
            class="text-3xl md:text-4xl font-heading font-bold mb-12 text-center"
        >
            <span class="text-primary">05.</span> Get In Touch
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Contact Info -->
            <div class="contact-content space-y-8">
                <p class="text-gray-300 text-lg leading-relaxed">
                    I'm currently looking for new opportunities. Whether you
                    have a question or just want to say hi, I'll try my best to
                    get back to you!
                </p>

                <div class="space-y-4">
                    <a
                        href="mailto:prathameshratthe@gmail.com"
                        class="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors group"
                    >
                        <div
                            class="p-3 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors"
                        >
                            <Mail size={24} />
                        </div>
                        <span class="text-lg">prathameshratthe@gmail.com</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/prathameshratthe"
                        target="_blank"
                        class="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors group"
                    >
                        <div
                            class="p-3 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors"
                        >
                            <Linkedin size={24} />
                        </div>
                        <span class="text-lg">LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/prathameshratthe"
                        target="_blank"
                        class="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors group"
                    >
                        <div
                            class="p-3 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors"
                        >
                            <Github size={24} />
                        </div>
                        <span class="text-lg">GitHub</span>
                    </a>
                </div>
            </div>

            <!-- Contact Form -->
            <form
                on:submit|preventDefault={handleSubmit}
                class="contact-content space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10"
            >
                <div class="relative group">
                    <input
                        type="text"
                        id="name"
                        bind:value={name}
                        required
                        placeholder=" "
                        class="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors peer"
                    />
                    <label
                        for="name"
                        class="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-dark peer-focus:px-1 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-dark peer-not-placeholder-shown:px-1 pointer-events-none"
                    >
                        Your Name
                    </label>
                </div>

                <div class="relative group">
                    <input
                        type="email"
                        id="email"
                        bind:value={email}
                        required
                        placeholder=" "
                        class="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors peer"
                    />
                    <label
                        for="email"
                        class="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-dark peer-focus:px-1 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-dark peer-not-placeholder-shown:px-1 pointer-events-none"
                    >
                        Your Email
                    </label>
                </div>

                <div class="relative group">
                    <textarea
                        id="message"
                        bind:value={message}
                        required
                        rows="4"
                        placeholder=" "
                        class="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors peer resize-none"
                    ></textarea>
                    <label
                        for="message"
                        class="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-dark peer-focus:px-1 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-dark peer-not-placeholder-shown:px-1 pointer-events-none"
                    >
                        Message
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    class="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                    {#if isSubmitting}
                        <Loader2 size={18} class="animate-spin" /> Sending...
                    {:else}
                        Send Message <Send size={18} />
                    {/if}
                </button>

                {#if submitStatus === "success"}
                    <div
                        class="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 p-3 rounded-lg"
                    >
                        <CheckCircle size={16} />
                        {statusMessage}
                    </div>
                {:else if submitStatus === "error"}
                    <div
                        class="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg"
                    >
                        <AlertCircle size={16} />
                        {statusMessage}
                    </div>
                {/if}
            </form>
        </div>
    </div>
</section>
