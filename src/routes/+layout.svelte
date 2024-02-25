<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import { onMount } from "svelte";
    import { themeChange } from "theme-change"

    onMount(() => {
        themeChange(false)
    })
</script>

<div class="flex flex-col h-screen">
    <Navbar class="flex-none"/>
    <div class="flex-1 overflow-y-auto scroll-smooth bg-cover bg-top bg-no-repeat sky-bg">
        <slot/>
    </div>
</div>