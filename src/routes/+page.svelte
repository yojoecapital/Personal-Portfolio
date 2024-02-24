<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import TypeWriter from "$lib/components/TypeWriter.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import { Github, Linkedin, Youtube } from "svelte-bootstrap-icons";
  import Header from "$lib/components/Header.svelte";
</script>

<Navbar class="fixed top-0 z-50"/>
<div class="h-screen bg-no-repeat bg-cover bg-bottom" style="background-image: url(animation.gif);">
    <div class="text-neutral-content p-10 h-full w-full flex justify-center bg-base-100 bg-opacity-50 z-30">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-screen-lg">
            <div class="flex justify-center items-center">
                <div class="avatar size-44 sm:size-48 md:size-56">
                    <div class="glowing z-10"/>
                    <div class="rounded-full ring-8 ring-primary ring-offset-base-100 ring-offset-8 z-20">
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
<div class="flex-none bg-base-200 flex flex-col items-center gap-5 p-5">
    <Header id="projects" symbol="🔨">Projects</Header>
    <h3 id="web-apps" class="text-xl sm:text-2xl">Web Apps 💻</h3>
    <ProjectCard title="Quran Dojo" src="images/quran-dojo.jpg" devSet={[[".NET", "C#"]]}>
        Quran Dojo is a web application I built for my Quran memorization class using ASP.NET MVC and C#.
        Teachers can design memorization plans for their students. 
        Plans are created with the goal of increasing and/or maintaining pages per day milestones. 
        The application will automatically generate daily tasks that the teacher can assign to their students and later follow up on.
        <svelte:fragment slot="footer">
            <a target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-disabled"><Youtube/> Demo</a>
            <a target="_blank" rel="noopener noreferrer" class="btn btn-neutral btn-disabled"><Github/> GitHub</a>
        </svelte:fragment>
    </ProjectCard>
    <ProjectCard title="PokeScanner" src="images/pokescanner.gif" devSet={[["Django", "TensorFlow", "Keras", "Python"], ["React", "JavaScript"]]}>
        PokéScanner is a web application that my 
        <a href="https://github.com/yojoecapital/PokeScanner?tab=readme-ov-file#team-members" target="_blank" rel="noopener noreferrer" class="link link-primary">team</a> 
        and I developed during our 
        <a href="https://www.iit.edu/academics/active-learning/ipro" target="_blank" rel="noopener noreferrer" class="link link-primary">IPRO-497 Global Product Development </a> 
        class.
        It can be used to upload or take a photo any generation 1 Pokémon. 
        PokéScanner will identify the the Pokémon in the image and provide its Pokédex information.
        <svelte:fragment slot="footer">
            <a href="https://github.com/yojoecapital/pokescanner" target="_blank" rel="noopener noreferrer" class="btn btn-neutral"><Github/> GitHub</a>
        </svelte:fragment>
    </ProjectCard>
    <h3 id="unity-development" class="text-xl sm:text-2xl">Unity Development 🎮</h3>
    <ProjectCard title="Jen" src="images/jen.gif" devSet={[["Unity", "C#"]]}>
        <p>
            Jen is a turn-based strategy game I developed using Unity and C#. 
            Set on a grid-based board, players command units made up of Jenga-like blocks. 
            Players can also engage in diplomatic actions such as trade or armistice. 
            The goal is to be the last remaining player on the board.
            I plan to make Jen available to the public, but before its release, 
            I intend to train an AI model capable of playing against human opponents.
        </p>
        <svelte:fragment slot="footer">
            <a target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-disabled"><Youtube/> Demo</a>
        </svelte:fragment>
    </ProjectCard>
    <ProjectCard title="Cornerfalls Combat" src="images/cornerfalls-combat.gif" devSet={[["Unity", "C#"]]}>
        Cornerfalls Combat is a brawler I developed using Unity and C#. 
        The player engages in sword fighting, focusing on parrying and attacking at precise angles. 
        The player must also watch out for the line of fire from the enemies standing in the background. 
        This combat system is a proof of concept that I may expand upon in future projects.
        <svelte:fragment slot="footer">
            <a href="https://youtu.be/zr5MMaFu_Po" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><Youtube/> Demo</a>
            <a href="https://github.com/yojoecapital/Cornerfalls-Combat" target="_blank" rel="noopener noreferrer" class="btn btn-neutral"><Github/> GitHub</a>
        </svelte:fragment>
    </ProjectCard>
    <h3 id="console-apps" class="text-xl sm:text-2xl">Console Apps 📟</h3>
    <ProjectCard title="Macro Polo" src="images/macro-polo.gif" devSet={[[".NET Core", "Windows API", "C#"]]}>
        Macro Polo is a program made for Windows Systems that used Win32 keyboard hooks to allow users to create and 
        manage keyboard macros and perform text substitutions.
        <svelte:fragment slot="footer">
            <a href="https://github.com/yojoecapital/MacroPolo" target="_blank" rel="noopener noreferrer" class="btn btn-neutral"><Github/> GitHub</a>
        </svelte:fragment>
    </ProjectCard>
    <ProjectCard title="Arabize" src="images/arabize.jpg" devSet={[[".NET Core", "Windows API", "C#"]]}>
        Arabize is a CLI for Windows Systems that translates Arabic-transliterated letters into Arabic Unicode characters and copies to clipboard.
        <svelte:fragment slot="footer">
            <a href="https://github.com/yojoecapital/Arabize" target="_blank" rel="noopener noreferrer" class="btn btn-neutral"><Github/> GitHub</a>
        </svelte:fragment>
    </ProjectCard>
</div>

<style>
    @keyframes shadowChange {
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
        animation: shadowChange 5s infinite;
        @apply absolute -translate-y-2/4 -translate-x-2/4 left-2/4 top-2/4;
    }
</style>