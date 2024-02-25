<script lang="ts">
    // imports
    import Logo from "$lib/components/Logo.svelte";
    import { base } from '$app/paths';
</script>
<div class="navbar bg-base-300 {$$props.class}">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
                <li>
                    <a href="{base}#projects">Projects 🔨</a>
                    <ul>
                        <li><a href="{base}#web-apps">Web Apps</a></li>
                        <li><a href="{base}#unity-development">Unity Development</a></li>
                        <li><a href="{base}#console-apps">Console Apps</a></li>
                    </ul>
                </li>
                <li><a href="{base}#experience">Experience 💼</a></li>
                <li><a href="{base}#education">Education 🤓</a></li>
                <li>
                    <label class="swap place-content-start">
                        <input type="checkbox" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"/>
                        <div class="swap-on">Dark 🌚</div>
                        <div class="swap-off">Light 🌞</div>
                    </label>
                </li>
            </ul>
        </div>
        <a class="btn btn-ghost p-2" href="{base}#home">
            <Logo/>
        </a>
    </div>
    <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li>
                <label class="swap">
                    <input type="checkbox" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"/>
                    <div class="swap-on">Dark 🌚</div>
                    <div class="swap-off">Light 🌞</div>
                </label>
            </li>
            <li><a href="{base}#projects">Projects 🔨</a></li> 
            <li><a href="{base}#experience">Experience 💼</a></li>
            <li><a href="{base}#education">Education 🤓</a></li>
        </ul>
    </div>
</div>