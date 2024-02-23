<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import TypeWriter from "$lib/components/TypeWriter.svelte";
    import { Github, Linkedin } from "svelte-bootstrap-icons";
</script>

<div class="flex flex-col h-screen">
    <Navbar class="flex-none"/>
    <div class="flex-1 bg-no-repeat bg-cover bg-bottom" style="background-image: url(test.gif);">
        <div class="text-neutral-content p-10 h-full w-full flex justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-screen-lg">
                <div class="flex justify-center items-center">
                    <div class="avatar size-44 sm:size-48 md:size-56 relative">
                        <div class="absolute glowing z-[-1] centered"/>
                        <div class="rounded-full ring-8 ring-primary ring-offset-base-100 ring-offset-8">
                            <img src="yousef.png" alt="Yousef Suleiman"/>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center md:items-center">
                    <div class="flex flex-col text-2xl min-h-52">
                        <div class="flex-1 mb-3">
                            <strong>
                                Hi, I'm Yousef.
                            </strong>
                            <p>
                                I'm a Computer Science major at Illinois Institute of Technology and I make 
                                <TypeWriter words={["web apps.", "video games.", "animations.", "console apps."]}/>
                            </p>
                        </div>
                        <div class="flex-none text-center">
                            <a href="https://github.com/yojoecapital/" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-secondary"><Github/> Github</a>
                            <a href="https://www.linkedin.com/in/yousef-suleiman-4ba75a242/" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-accent"><Linkedin/> Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    @keyframes colorChange {
        0% {
            box-shadow: 0 0 140px 90px oklch(var(--p));
        }
        25% {
            box-shadow: 0 0 140px 80px oklch(var(--s));
        }
        50% {
            box-shadow: 0 0 120px 90px oklch(var(--a));
        }
        75% {
            box-shadow: 0 0 130px 80px oklch(var(--in));
        }
        100% {
            box-shadow: 0 0 140px 90px oklch(var(--p));
        }
    }

    .glowing {
      animation: colorChange 5s infinite;
    }
    .centered {
        @apply absolute -translate-y-2/4 -translate-x-2/4 left-2/4 top-2/4;
    }
</style>