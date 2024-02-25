<script lang="ts">
    import { getThemeStore, type ThemeStore } from "$lib/stores/theme";
    import { onMount } from "svelte";
    
    let theme: ThemeStore;
    onMount(() => {
        theme = getThemeStore();
    });
</script>

<label class="swap place-content-start {$$props.class}">
    <input type="checkbox" class="theme-controller" value="dark" checked={$theme} on:click={theme.toggle}/>
    <div class="swap-on">Dark 🌚</div>
    <div class="swap-off">Light 🌞</div>
</label>