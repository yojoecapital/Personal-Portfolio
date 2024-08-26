<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Background from "$lib/components/backgrounds/Background.svelte";
    import { getThemeStore, type ThemeStore } from "$lib/stores/theme";
    import { onMount } from "svelte";
    
    let theme: ThemeStore;
    onMount(() => {
        theme = getThemeStore();
    });
</script>

<div class="flex flex-col h-screen" data-theme={$theme ? "dark" : "light"}>
    <Navbar class="flex-none"/>
    <Background theme={$theme}>
        <slot/>
    </Background>
</div>