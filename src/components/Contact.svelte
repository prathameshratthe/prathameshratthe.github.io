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
        MapPin,
        Twitter,
    } from "lucide-svelte";

    gsap.registerPlugin(ScrollTrigger);

    let contactSection: HTMLElement;

    // Form State
    let name = "";
    let email = "";
    let message = "";
    let botcheck = false; // Honeypot field
    let isSubmitting = false;
    let submitStatus: "idle" | "success" | "error" = "idle";
    let statusMessage = "";
    let lastSubmitTime = 0; // Rate limiting

    // Input length limits (security)
    const MAX_NAME_LENGTH = 100;
    const MAX_EMAIL_LENGTH = 254;
    const MAX_MESSAGE_LENGTH = 5000;
    const MIN_SUBMIT_INTERVAL = 5000; // 5 seconds between submissions

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

        // Input length validation (security)
        if (name.length > MAX_NAME_LENGTH) {
            submitStatus = "error";
            statusMessage = `Name must be less than ${MAX_NAME_LENGTH} characters.`;
            setTimeout(() => {
                submitStatus = "idle";
                statusMessage = "";
            }, 3000);
            return;
        }

        if (message.length > MAX_MESSAGE_LENGTH) {
            submitStatus = "error";
            statusMessage = `Message must be less than ${MAX_MESSAGE_LENGTH} characters.`;
            setTimeout(() => {
                submitStatus = "idle";
                statusMessage = "";
            }, 3000);
            return;
        }

        // Improved email validation (security)
        const emailRegex =
            /^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9.-]*[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
        if (email.length > MAX_EMAIL_LENGTH || !emailRegex.test(email)) {
            submitStatus = "error";
            statusMessage = "Please provide a valid email address.";
            setTimeout(() => {
                submitStatus = "idle";
                statusMessage = "";
            }, 3000);
            return;
        }

        // Rate limiting (security)
        const now = Date.now();
        if (now - lastSubmitTime < MIN_SUBMIT_INTERVAL) {
            submitStatus = "error";
            statusMessage =
                "Please wait a few seconds before submitting again.";
            setTimeout(() => {
                submitStatus = "idle";
                statusMessage = "";
            }, 3000);
            return;
        }
        lastSubmitTime = now;

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
                    botcheck, // Honeypot
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
    class="py-20 bg-white dark:bg-dark text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300"
>
    <div class="container mx-auto px-6 relative z-10">
        <h2
            class="text-3xl md:text-4xl font-heading font-bold mb-12 text-center"
        >
            Get In Touch
        </h2>

        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Contact Info -->
            <div class="contact-content space-y-8">
                <h3 class="text-2xl font-bold mb-6">Let's Connect</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-8">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your visions.
                </p>

                <div class="space-y-6">
                    <div class="flex items-center gap-4 group">
                        <div
                            class="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform"
                        >
                            <Mail size={24} />
                        </div>
                        <div>
                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                Email
                            </p>
                            <a
                                href="mailto:prathameshratthe@gmail.com"
                                class="text-lg font-semibold hover:text-primary transition-colors"
                                >prathameshratthe@gmail.com</a
                            >
                        </div>
                    </div>

                    <div class="flex items-center gap-4 group">
                        <div
                            class="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:scale-110 transition-transform"
                        >
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                Location
                            </p>
                            <p class="text-lg font-semibold">Nagpur, India</p>
                        </div>
                    </div>

                    <div class="flex gap-4 pt-4">
                        <a
                            href="https://github.com/prathameshratthe"
                            target="_blank"
                            class="p-3 bg-white dark:bg-white/5 border-2 border-gray-200 dark:border-white/10 rounded-lg text-black dark:text-white hover:text-primary dark:hover:text-primary-dark hover:border-primary dark:hover:border-primary-dark transition-all hover:-translate-y-1"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/prathameshratthe"
                            target="_blank"
                            class="p-3 bg-white dark:bg-white/5 border-2 border-gray-200 dark:border-white/10 rounded-lg text-black dark:text-white hover:text-primary dark:hover:text-primary-dark hover:border-primary dark:hover:border-primary-dark transition-all hover:-translate-y-1"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="https://twitter.com/prathameshratthe"
                            target="_blank"
                            class="p-3 bg-white dark:bg-white/5 border-2 border-gray-200 dark:border-white/10 rounded-lg text-black dark:text-white hover:text-primary dark:hover:text-primary-dark hover:border-primary dark:hover:border-primary-dark transition-all hover:-translate-y-1"
                        >
                            <Twitter size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <form
                on:submit|preventDefault={handleSubmit}
                class="contact-content bg-gray-100 dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10"
            >
                <div class="space-y-6">
                    <div>
                        <label
                            for="name"
                            class="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2"
                            >Name</label
                        >
                        <input
                            type="text"
                            id="name"
                            bind:value={name}
                            class="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="email"
                            class="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2"
                            >Email</label
                        >
                        <input
                            type="email"
                            id="email"
                            bind:value={email}
                            class="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                            placeholder="john.doe@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="message"
                            class="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2"
                            >Message</label
                        >
                        <textarea
                            id="message"
                            bind:value={message}
                            rows="4"
                            class="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    <!-- Honeypot Field (Hidden from users, catches bots) -->
                    <input
                        type="checkbox"
                        name="botcheck"
                        bind:checked={botcheck}
                        style="display: none;"
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        class="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-white hover:opacity-90 transition-opacity disabled:opacity-50 flex justify-center items-center gap-2"
                    >
                        {#if isSubmitting}
                            <span
                                class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                            ></span>
                            Sending...
                        {:else}
                            Send Message <Send size={18} />
                        {/if}
                    </button>

                    {#if submitStatus === "success"}
                        <p class="text-green-500 text-center text-sm">
                            Message sent successfully!
                        </p>
                    {:else if submitStatus === "error"}
                        <p class="text-red-500 text-center text-sm">
                            Failed to send message. Please try again.
                        </p>
                    {/if}
                </div>
            </form>
        </div>
    </div>
</section>
