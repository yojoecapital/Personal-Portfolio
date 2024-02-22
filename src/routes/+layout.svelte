<script lang="ts">
    import "../app.css";
    import Logo from "$lib/components/Logo.svelte";
    import { List } from "svelte-bootstrap-icons";
    import NavList from "$lib/components/NavList.svelte";
    import { base } from '$app/paths';
</script>

<div class="navbar bg-neutral text-neutral-content px-5 py-3">
    <div class="flex-1">
      <a class="btn btn-ghost p-2" href="{base}/"><Logo/></a>
    </div>
    <div class="flex-none sm:hidden">
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost p-1"><List width="100%" height="100%"/></div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52 text-lg">
                <NavList/>
            </ul>
        </div>
    </div>
    <div class="flex-none hidden sm:block">
        <ul class="menu menu-horizontal px-1 text-lg">
            <NavList/>
        </ul>
    </div>
</div>

<slot />
<!-- <div class="container py-10 px-5 sm:px-20 lg:px-40"></div> -->