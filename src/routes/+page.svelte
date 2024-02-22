<script lang="ts">
    import TypeWriter from "$lib/components/TypeWriter.svelte";
    import { Github, Linkedin } from "svelte-bootstrap-icons";
</script>

<div class="hero h-full">
    <div class="hero-overlay bg-opacity-0"></div>
    <div class="hero-content text-neutral-content">
        <div class="max-w-md">
            <div class="text-center">
                <div class="avatar">
                    <div class=" w-40 rounded-full ring ring-primary ring-offset-base-100">
                        <img src="yousef.png" alt="Yousef Suleiman"/>
                    </div>
                </div>
            </div>
            <h1 class="mb-3"><strong class="text-5xl mb-3">Hi, I'm Yousef 👋</strong></h1>
            <p class="text-3xl mb-6">
                I'm a Computer Science major at Illinois Institute of Technology and I make 
                <TypeWriter words={["web apps.", "video games.", "animations.", "console apps."]}/>
            </p>
            <div class="text-center">
                <button class="btn btn-primary mx-1"><Github/> GitHub</button>
                <button class="btn btn-primary mx-1"><Linkedin/> Linkedin</button>
            </div>
        </div>
    </div>
</div>