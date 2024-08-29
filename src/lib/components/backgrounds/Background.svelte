<script lang="ts">
    import darkSrc from "$lib/assets/webp/mountain-dark.webp";
    import lightSrc from "$lib/assets/webp/mountain-light.webp";

    export let theme: boolean;
</script>

<div 
    class="bg-cover bg-top bg-no-repeat bg-fixed" data-theme={theme ? "dark" : "light"}
    style="background-image: url({theme ? darkSrc : lightSrc}); image-rendering: pixelated;"
>
    <slot/>
</div>