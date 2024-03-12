<script lang="ts">
    import TypeWriter from "$lib/components/TypeWriter.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import Header from "$lib/components/Header.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import { base } from '$app/paths';
    import GitHub from "$lib/components/icons/GitHub.svelte";
    import LinkedIn from "$lib/components/icons/LinkedIn.svelte";
    import Link from "$lib/components/icons/Link.svelte";
    import { getThemeStore, type ThemeStore } from "$lib/stores/theme";
    import { onMount } from "svelte";
    import Skill from "$lib/components/Skill.svelte";
    
    let theme: ThemeStore;
    onMount(() => {
        theme = getThemeStore();
    });
</script>

<div id="home" class="min-h-full flex flex-col bg-pattern bg-base-200">
    <div class="flex-1 flex flex-col items-center gap-10 p-2">
        <div class="flex-none flex">
            <div 
                class="bg-contain bg-center bg-no-repeat flex justify-center items-center lg:size-96 sm:size-80 size-64"
                style="background-image: url({base}/bg/world-{$theme ? "dark" : "light"}.png); image-rendering: pixelated;"    
            >
                <div 
                    class="bg-contain bg-center bg-no-repeat size-[55%] rounded-full ring-8 ring-primary ring-offset-8 ring-offset-base-100"
                    style="background-image: url({base}/yousef.png); image-rendering: auto;"    
                />
            </div>
        </div> 
        <div>
            <ul class="menu menu-horizontal bg-base-300 rounded-box">
                <li>
                    <a href="https://github.com/yojoecapital" target="_blank" rel="noopener noreferrer">
                        <GitHub/> <span class="sm:block hidden">GitHub</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/yousef-suleiman-4ba75a242" target="_blank" rel="noopener noreferrer">
                        <LinkedIn/> <span class="sm:block hidden">LinkedIn</span>
                    </a>
                </li>
                <li><a href="{base}/yousef-suleiman-resume.pdf" target="_blank" rel="noopener noreferrer"><Link/> Résumé</a></li>
            </ul>
        </div>
        <div class="flex-1 h-full gap-3">
            <div class="md:text-2xl text-xl max-w-2xl">
                <strong>Hi, I'm Yousef.</strong>
                <p>
                    I'm a Computer Science major at Illinois Institute of Technology and I make 
                    <TypeWriter words={["web apps.", "video games.", "animations.", "console apps."]}/>
                </p>
            </div>
        </div>
    </div>
    <div class="flex-none">
        <img class="sm:w-full" src="bg/animation.gif" alt="Animation" style="image-rendering: pixelated;"/>
    </div>
</div>
<div class="flex flex-col items-center gap-5 p-2 mb-80" style="image-rendering: auto;">
    <Header id="projects">Projects 🔨</Header>
    <h3 id="web-apps" class="text-xl sm:text-2xl">Web Apps 💻</h3>
    <ProjectCard 
        title="Quran Dojo" src="images/quran-dojo.jpg" devSet={[[".NET", "C#"]]}
        demo="https://youtu.be/-ffMoF1leB8"
    >
        Quran Dojo is a web application I built for my Quran memorization class using ASP.NET MVC and C#.
        Teachers can design memorization plans for their students. 
        Plans are created with the goal of increasing and/or maintaining pages per day milestones. 
        The application will automatically generate daily tasks that the teacher can assign to their students and later follow up on.
    </ProjectCard>
    <ProjectCard 
        title="PokeScanner" src="images/pokescanner.gif" devSet={[["Django", "TensorFlow", "Python"], ["React", "JavaScript"]]} 
        repo="https://github.com/yojoecapital/pokescanner"
    >
        PokéScanner is a web application that my 
        <a href="https://github.com/yojoecapital/PokeScanner?tab=readme-ov-file#team-members" target="_blank" rel="noopener noreferrer" class="link">team</a> 
        and I developed during our 
        <a href="https://www.iit.edu/academics/active-learning/ipro" target="_blank" rel="noopener noreferrer" class="link">IPRO-497 Global Product Development </a> 
        class.
        It can be used to upload or take a photo any generation 1 Pokémon. 
        PokéScanner will identify the the Pokémon in the image and provide its Pokédex information.
    </ProjectCard>
    <h3 id="unity-development" class="text-xl sm:text-2xl">Unity Development 🎮</h3>
    <ProjectCard 
        title="Jen" src="images/jen.gif" devSet={[["Unity", "C#"]]}
        demo="https://youtu.be/c89q3Sv4Ilk"
    >
        <p>
            Jen is a turn-based strategy game I developed using Unity and C#. 
            Set on a grid-based board, players command units made up of Jenga-like blocks. 
            Players can also engage in diplomatic actions such as trade or armistice. 
            The goal is to be the last remaining player on the board.
            I plan to make Jen available to the public, but before its release, 
            I intend to train an AI model capable of playing against human opponents.
        </p>
        <svelte:fragment slot="footer">
            <a href="{base}/jen-user-manual.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-neutral"><Link/> User Manual</a>
        </svelte:fragment>
    </ProjectCard>
    <ProjectCard 
        title="Cornerfalls Combat" src="images/cornerfalls-combat.gif" devSet={[["Unity", "C#"]]} 
        demo="https://youtu.be/zr5MMaFu_Po"
        repo="https://github.com/yojoecapital/Cornerfalls-Combat"
    >
        Cornerfalls Combat is a brawler I developed using Unity and C#. 
        The player engages in sword fighting, focusing on parrying and attacking at precise angles. 
        The player must also watch out for the line of fire from the enemies standing in the background. 
        This combat system is a proof of concept that I may expand upon in future projects.
    </ProjectCard>
    <h3 id="console-apps" class="text-xl sm:text-2xl">Console Apps 📟</h3>
    <ProjectCard title="Macro Polo" src="images/macro-polo.gif" devSet={[[".NET Core", "Windows API", "C#"]]}
        repo="https://github.com/yojoecapital/MacroPolo"
    >
        Macro Polo is a program made for Windows Systems that used Win32 keyboard hooks to allow users to create and 
        manage keyboard macros and perform text substitutions.
    </ProjectCard>
    <ProjectCard 
        title="Arabize" src="images/arabize.jpg" devSet={[[".NET Core", "Windows API", "C#"]]}
        repo="https://github.com/yojoecapital/Arabize"
    >
        Arabize is a CLI for Windows Systems that translates Arabic-transliterated letters into Arabic Unicode characters and copies to clipboard.
    </ProjectCard>
    <Header id="skills">Skills 🧠</Header>
    <div class="card card-compact max-w-lg glass border-0 shadow-xl">
        <div class="card-body">
            <p class="text-center">
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" text="C#"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" text="C"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" text="Java"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" text="Python"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" text="JavaScript"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" text="TypeScript"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" text="T-SQL"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" text="SQLite"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" text=".NET"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" text=".NET Core"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" text="React"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" text="SvelteKit"/>
                <Skill src="{base}/ef-core.svg" text="EF Core"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" text="Prisma"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" text="TensorFlow"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" text="PyTorch"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" text="HTML"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" text="CSS"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" text="JQuery"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" text="tailwindcss"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" text="Linux"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" text="Git"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" text="Unity"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg" text="LaTeX"/>
                <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" text="Blender" href="https://www.blender.org"/>
                <Skill src="{base}/moho.svg" text="Moho" href="https://moho.lostmarble.com"/>
            </p>
        </div>
    </div>
    <Header id="experience">Experience 💼</Header>
    <Timeline events={[
        {
            when: "Jun 2023 - present",
            title: "DevOps Internship - DataServ",
            description: `As a DevOps intern, I mainly deal with backend development. 
            Some of the tasks I am working on include streamlining T-SQL database operations by managing triggers,
            executing unit tests, and conducting post-promotion validations to ensure the reliability of implemented solutions.`
        },
        {
            when: "Jun - Jul 2022 & Dec - Feb 2023",
            title: "Business Technology Internship - IAA",
            description: `As a Business Technology intern, I worked on web development using ASP.NET MVC, C#, and T-SQL.
            I developed a REST API to populate internal client metric reports.`
        }
    ]}/>
    <Header id="education">Education 🤓</Header>
    <div class="card card-compact max-w-lg glass border-0 shadow-xl">
        <div class="card-body">
            <a href="https://www.iit.edu" target="_blank" rel="noopener noreferrer">
                <img class="w-40" src="iit.svg" alt="Illinois Tech">
            </a>
            <span class="text-xl font-semibold">
                M.A.S. in Artificial Intelligence
                <br/>
                B.S. in Computer Science
            </span>
            <span>
                Graduating in May 2024
                <br/>
                GPA: 3.896
            </span>
            <div>
                <ul class="list-disc list-inside">
                    <li>Dean's List 2021, 2022, 2023</li>
                    <li>Early Acceptance to Illinois Tech's Accelerated Master's Program</li>
                </ul>
            </div>
        </div>
    </div>
    <Header id="contact">Contact ☎️</Header>
    <div class="card card-compact max-w-lg glass border-0 shadow-xl">
        <div class="card-body">
            <p>
                Please contact me directly at <a href="mailto:yousefsuleiman10@gmail.com" target="_blank" rel="noopener noreferrer" class="link">yousefsuleiman10@gmail.com</a>
                or via <a href="https://www.linkedin.com/in/yousef-suleiman-4ba75a242" target="_blank" rel="noopener noreferrer" class="link">LinkedIn</a>.
            </p>
        </div>
    </div>
</div>

<style>
    .bg-pattern {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='96' viewBox='0 0 60 96'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 10a6 6 0 0 1 12 0v12a6 6 0 0 1-6 6 6 6 0 0 0-6 6 6 6 0 0 1-12 0 6 6 0 0 0-6-6 6 6 0 0 1-6-6V10a6 6 0 1 1 12 0 6 6 0 0 0 12 0zm24 78a6 6 0 0 1-6-6 6 6 0 0 0-6-6 6 6 0 0 1-6-6V58a6 6 0 1 1 12 0 6 6 0 0 0 6 6v24zM0 88V64a6 6 0 0 0 6-6 6 6 0 0 1 12 0v12a6 6 0 0 1-6 6 6 6 0 0 0-6 6 6 6 0 0 1-6 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");    
    }
</style>