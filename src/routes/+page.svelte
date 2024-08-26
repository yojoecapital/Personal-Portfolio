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
    import World from "$lib/components/backgrounds/World.svelte";
    import animation from "$lib/assets/gif/animation.gif";
    import yousef from "$lib/assets/webp/yousef.webp";
    import sahibAlQuran from "$lib/assets/webp/sahib-al-quran.webp"
    import pokescanner from "$lib/assets/webp/pokescanner.webp"
    import jen from "$lib/assets/webp/jen.webp"
    import cornerfallsCombat from "$lib/assets/webp/cornerfalls-combat.webp"
    import efCore from "$lib/assets/svg/ef-core.svg";
    import moho from "$lib/assets/svg/moho.svg";
    import iit from "$lib/assets/svg/iit.svg";
    
    let theme: ThemeStore;
    onMount(() => {
        theme = getThemeStore();
    });
</script>

<div id="home" class="min-h-full flex flex-col bg-pattern bg-base-200">
    <div class="flex-1 flex flex-col items-center gap-10 p-2">
        <div class="flex-none flex">
            <World theme={$theme}>
                <div 
                    class="bg-contain bg-center bg-no-repeat size-[55%] rounded-full ring-8 ring-primary ring-offset-8 ring-offset-base-100"
                    style="background-image: url({yousef}); image-rendering: auto;"    
                />            
            </World>
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
                    I'm a Computer Science graduate from Illinois Institute of Technology and I make 
                    <TypeWriter words={["web apps.", "video games.", "animations.", "cool things."]}/>
                </p>
            </div>
        </div>
    </div>
    <div class="flex-none">
        <img class="sm:w-full" src={animation} alt="Animation" style="image-rendering: pixelated;"/>
    </div>
</div>
<div class="flex flex-col items-center gap-5 p-2 mb-80" style="image-rendering: auto;">
    <Header id="projects">Projects 🔨</Header>
    <h3 id="web-apps" class="text-xl sm:text-2xl">Web Apps 💻</h3>
    <ProjectCard 
        title="Sahib Al-Quran Website" src={sahibAlQuran} devSet={[["TypeScript", "SvelteKit", "MongoDB"], ["Prisma", "Google Cloud"]]}
        demo="https://www.youtube.com/watch?v=nqFYqX55xdk&list=PL2PMs4BR7zXwDWsyc_0Tv1W9nOrd2VDqd&index=1"
    >
        The Sahib Al-Quran website is a project I've dedicated two years to developing, aimed at supporting teachers and students in their Quranic studies. 
        Initially created with .NET and recently rebuilt using SvelteKit, the app enhances the learning experience by tracking progress categories of Memorization, Attach, and Review. 
        It also automates goal-setting and task assignments, helping students stay organized and achieve their Quranic learning goals efficiently.
        <svelte:fragment slot="footer">
            <a href="https://quran-dojo.web.app" target="_blank" rel="noopener noreferrer" class="btn btn-neutral"><Link/> Website</a>
        </svelte:fragment>
    </ProjectCard>
    <ProjectCard 
        title="PokeScanner" src={pokescanner} devSet={[["Django", "TensorFlow", "Python"], ["React", "JavaScript"]]} 
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
        title="Jen" src={jen} devSet={[["Unity", "C#"]]}
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
        title="Cornerfalls Combat" src={cornerfallsCombat} devSet={[["Unity", "C#"]]} 
        demo="https://youtu.be/zr5MMaFu_Po"
        repo="https://github.com/yojoecapital/Cornerfalls-Combat"
    >
        Cornerfalls Combat is a brawler I developed using Unity and C#. 
        The player engages in sword fighting, focusing on parrying and attacking at precise angles. 
        The player must also watch out for the line of fire from the enemies standing in the background. 
        This combat system is a proof of concept that I may expand upon in future projects.
    </ProjectCard>
    <Header id="skills">Skills 🧠</Header>
    <div class="card card-compact max-w-lg glass border-0 shadow-xl">
        <div class="card-body flex flex-row flex-wrap gap-1">
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
            <Skill src={efCore} text="EF Core"/>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" text="Prisma"/>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" text="TensorFlow"/>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" text="PyTorch"/>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" text="HTML"/>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" text="CSS"/>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" text="JQuery"/>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" text="Tailwind CSS"/>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" text="Linux"/>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" text="Bash"/>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" text="Git"/>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" text="Unity"/>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg" text="LaTeX"/>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" text="Blender" href="https://www.blender.org"/>
            <Skill src={moho} text="Moho" href="https://moho.lostmarble.com"/>
        </div>
    </div>
    <Header id="experience">Experience 💼</Header>
    <Timeline events={[
        {
            when: "Jun 2023 - present",
            title: "DevOps Internship - DataServ",
            description: `As a DevOps intern at DataServ, I implemented new import solutions for 22 clients, improving efficiency by updating shell scripts to transfer files to AWS S3 and adjusting job scheduler parameters to use a new API endpoint. I also wrote Python scripts to generate dummy data, which simplified testing and verification for these solutions. Additionally, I consolidated SQL triggers and added indexes to key tables, resulting in up to a 50% reduction in wait times, according to the Database Performance Analyzer (DPA). I also migrated client jobs to the JAMS scheduler, enhancing job scheduling reliability and performance.`
        },
        {
            when: "Jun - Jul 2022 & Dec - Feb 2023",
            title: "Business Technology Internship - IAA",
            description: `As a Business Technology Intern at IAA, I implemented a REST API in ASP.NET MVC to efficiently populate internal client metric reports. I also conducted QA testing for the business rule engine on vehicle title and registration forms, ensuring everything met company standards. Additionally, I led a team of 3 interns to create a marketing animation, which significantly boosted our team’s collaboration.`
        }
    ]}/>
    <Header id="education">Education 🤓</Header>
    <div class="card card-compact max-w-lg glass border-0 shadow-xl">
        <div class="card-body">
            <a href="https://www.iit.edu" target="_blank" rel="noopener noreferrer">
                <img class="w-40" src={iit} alt="Illinois Tech">
            </a>
            <h3 class="text-xl font-semibold">
                M.A.S. in Artificial Intelligence
            </h3>
            <p>
                <span class="badge badge-outline">August 2022 - May 2024</span>
                <span class="badge badge-outline">GPA: 3.90</span>
            </p>
            <h3 class="text-xl font-semibold">
                B.S. in Computer Science
            </h3>
            <p>
                <span class="badge badge-outline">August 2020 - May 2024</span>
                <span class="badge badge-outline">GPA: 3.85</span>
            </p>
            <h3 class="text-xl font-semibold">
                Achievements
            </h3>
            <ul class="list-disc list-inside">
                <li>Summa Cum Laude Graduate</li>
                <li>Dean's List 2021, 2022, 2023, 2024</li>
                <li>Early Acceptance to Illinois Tech's Accelerated Master's Program</li>
            </ul>
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