<script lang="ts">
    import darkSrc from "$lib/assets/webp/mountain-dark.webp";
    import lightSrc from "$lib/assets/webp/mountain-light.webp";

    export let theme: boolean;
</script>

<div data-theme={theme ? "dark" : "light"} class="bg-transparent">
    <div 
        class="bg-cover bg-top bg-no-repeat bg-fixed fixed w-screen h-screen -z-50 bg-base-100"
        style="background-image: url({theme ? darkSrc : lightSrc}); image-rendering: pixelated;"
    />
    <slot/>
</div>