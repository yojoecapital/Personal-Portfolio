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

<Background theme={$theme}>
    <Navbar class="sticky top-0 z-10"/>
    <slot/>
</Background>