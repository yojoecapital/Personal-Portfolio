<script lang="ts">
    import TypeWriter from "$lib/components/TypeWriter.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import Header from "$lib/components/Header.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import { base } from '$app/paths';
    import GitHub from "$lib/components/icons/GitHub.svelte";
    import LinkedIn from "$lib/components/icons/LinkedIn.svelte";
    import Link from "$lib/components/icons/Link.svelte";
    import Youtube from "$lib/components/icons/Youtube.svelte";
</script>

<div id="home" class="min-h-full flex flex-col bg-base-200">
    <div class="flex-1 flex justify-center items-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-screen-lg h-full md:h-auto m-5">
            <div class="flex justify-center items-start md:items-center">
                <div class="max-w-96 bg-contain bg-center bg-no-repeat world-bg">
                    <div class="avatar scale-[55%]">
                        <div class="rounded-full ring-8 ring-primary ring-offset-base-100 ring-offset-8"><img src="yousef.png" alt="Yousef Suleiman"/></div>
                    </div>
                </div>
            </div> 
            <div class="flex max-h-lvh md:h-auto md:items-center">
                <div class="text-xl md:text-2xl">
                    <strong>
                        Hi, I'm Yousef.
                    </strong>
                    <p>
                        I'm a Computer Science major at Illinois Institute of Technology and I make 
                        <TypeWriter words={["web apps.", "video games.", "animations.", "console apps."]}/>
                    </p>
                    <div class="mt-3">
                        <a href="https://github.com/yojoecapital" target="_blank" rel="noopener noreferrer" class="btn btn-neutral mb-2"><GitHub/></a>
                        <a href="https://www.linkedin.com/in/yousef-suleiman-4ba75a242" target="_blank" rel="noopener noreferrer" class="btn btn-neutral mb-2"><LinkedIn/></a>
                        <a href="{base}/yousef_suleiman_resume.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-neutral mb-2"><Link/> Resume</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-none">
        <img class="w-full" src="bg/animation.gif" alt="Animation"/>
    </div>
</div>
<div class="flex flex-col items-center gap-5 p-5 mb-80">
    <Header id="projects">Projects 🔨</Header>
    <h3 id="web-apps" class="text-xl sm:text-2xl">Web Apps 💻</h3>
    <ProjectCard title="Quran Dojo" src="images/quran-dojo.jpg" devSet={[[".NET", "C#"]]}>
        Quran Dojo is a web application I built for my Quran memorization class using ASP.NET MVC and C#.
        Teachers can design memorization plans for their students. 
        Plans are created with the goal of increasing and/or maintaining pages per day milestones. 
        The application will automatically generate daily tasks that the teacher can assign to their students and later follow up on.
    </ProjectCard>
    <ProjectCard title="PokeScanner" src="images/pokescanner.gif" devSet={[["Django", "TensorFlow", "Keras", "Python"], ["React", "JavaScript"]]} 
        repo="https://github.com/yojoecapital/pokescanner"
    >
        PokéScanner is a web application that my 
        <a href="https://github.com/yojoecapital/PokeScanner?tab=readme-ov-file#team-members" target="_blank" rel="noopener noreferrer" class="link link-primary">team</a> 
        and I developed during our 
        <a href="https://www.iit.edu/academics/active-learning/ipro" target="_blank" rel="noopener noreferrer" class="link link-primary">IPRO-497 Global Product Development </a> 
        class.
        It can be used to upload or take a photo any generation 1 Pokémon. 
        PokéScanner will identify the the Pokémon in the image and provide its Pokédex information.
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
    </ProjectCard>
    <ProjectCard title="Cornerfalls Combat" src="images/cornerfalls-combat.gif" devSet={[["Unity", "C#"]]} 
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
    <ProjectCard title="Arabize" src="images/arabize.jpg" devSet={[[".NET Core", "Windows API", "C#"]]}
        repo="https://github.com/yojoecapital/Arabize"
    >
        Arabize is a CLI for Windows Systems that translates Arabic-transliterated letters into Arabic Unicode characters and copies to clipboard.
    </ProjectCard>
    <Header id="experience">Experience 💼</Header>
    <Timeline events={[
        {
            when: "June 2023 - Present",
            title: "DevOps Summer Internship - DataServ",
            description: `As a DevOps intern, I mainly deal with backend development. 
            Some of the projects I worked on include streamlining T-SQL database operations by managing triggers,
            executing unit tests, and conducting post-promotion validations to ensure the reliability of implemented solutions.`
        },
        {
            when: "June - July 2022 & Dec - Feb 2024",
            title: "Business Technology Internship - IAA ",
            description: `As a Business Technology intern, I worked on web developed using ASP.NET MVC, C#, and T-SQL.
            I developed a REST API to populate internal client reports.`
        }
    ]}/>
    <Header id="education">Education 🤓</Header>
    <div class="card card-compact max-w-lg bg-slate-500 text-white border-0 shadow-xl">
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
                GPA: 3.84
            </span>
            <div>
                <ul class="list-disc list-inside">
                    <li>Dean's List 2021, 2022, 2023</li>
                    <li>Early Acceptance to Illinois Tech's Accelerated Master's Program</li>
                </ul>
            </div>
        </div>
    </div>
</div> 