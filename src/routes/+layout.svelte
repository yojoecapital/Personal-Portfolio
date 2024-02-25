<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import { getThemeStore, type ThemeStore } from "$lib/stores/theme";
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    
    let theme: ThemeStore;
    onMount(() => {
        theme = getThemeStore();
    });
</script>

<div class="flex flex-col h-screen">
    <Navbar class="flex-none"/>
    <div 
        class="flex-1 overflow-y-auto scroll-smooth bg-cover bg-top bg-no-repeat"
        style="background-image: url({base}/bg/mountain-{$theme ? "dark" : "light"}.gif); image-rendering: pixelated;"
    >
        <slot/>
    </div>
</div>