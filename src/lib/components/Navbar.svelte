<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    import { List } from "svelte-bootstrap-icons";
    import { base } from '$app/paths';
</script>

<div class="navbar bg-neutral text-neutral-content px-5 py-3 {$$props.class}">
    <div class="flex-1">
      <a class="btn btn-ghost p-2" href="{base}/"><Logo/></a>
    </div>
    <div class="flex-none sm:hidden">
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost p-1"><List width="100%" height="100%"/></div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52 text-lg">
                <li><a href="{base}/#about">about me 🙂</a></li>
                <li><a href="{base}/#projects">projects 🔨</a></li>
                <li><a href="{base}/resume">curriculum vitae 📃</a></li>
            </ul>
        </div>
    </div>
    <div class="flex-none hidden sm:block">
        <ul class="menu menu-horizontal px-1 text-lg">
            <li><a href="{base}/#about">about me 🙂</a></li>
            <li><a href="{base}/#projects">projects 🔨</a></li>
            <li><a href="{base}/resume">curriculum vitae 📃</a></li>
        </ul>
    </div>
</div>