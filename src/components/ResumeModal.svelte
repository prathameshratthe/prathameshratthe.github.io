<script lang="ts">
    import { isResumeModalOpen } from "../lib/store";
    import { FileText, Image, X } from "lucide-svelte";
    import { fade, scale } from "svelte/transition";

    function close() {
        isResumeModalOpen.set(false);
    }

    function download(type: "with-photo" | "no-photo") {
        const link = document.createElement("a");
        link.href =
            type === "with-photo"
                ? "/assets/PrathameshRatthe_Resume_I.pdf"
                : "/assets/PrathameshRatthe_Resume.pdf";
        link.download =
            type === "with-photo"
                ? "PrathameshRatthe_Resume_With_Photo.pdf"
                : "PrathameshRatthe_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        close();
    }
</script>

{#if $isResumeModalOpen}
    <div
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm"
        transition:fade
    >
        <div
            class="relative w-full max-w-md bg-dark border border-white/10 rounded-2xl shadow-2xl p-8"
            transition:scale
        >
            <button
                on:click={close}
                class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
                <X size={24} />
            </button>

            <h2 class="text-2xl font-heading font-bold text-white mb-2">
                Select Resume
            </h2>
            <p class="text-gray-400 mb-8">
                Choose which version of the resume you'd like to download.
            </p>

            <div class="grid gap-4">
                <button
                    on:click={() => download("with-photo")}
                    class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group text-left"
                >
                    <div
                        class="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform"
                    >
                        <Image size={24} />
                    </div>
                    <div>
                        <h3 class="font-bold text-white">With Photo</h3>
                        <p class="text-sm text-gray-400">
                            Includes profile picture
                        </p>
                    </div>
                </button>

                <button
                    on:click={() => download("no-photo")}
                    class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group text-left"
                >
                    <div
                        class="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:scale-110 transition-transform"
                    >
                        <FileText size={24} />
                    </div>
                    <div>
                        <h3 class="font-bold text-white">Standard</h3>
                        <p class="text-sm text-gray-400">
                            Text only, ATS friendly
                        </p>
                    </div>
                </button>
            </div>
        </div>
    </div>
{/if}
