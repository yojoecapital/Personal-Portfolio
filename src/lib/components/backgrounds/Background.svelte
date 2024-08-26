<script lang="ts">
    import darkSrc from "$lib/assets/webp/mountain-dark.webp";
    import lightSrc from "$lib/assets/webp/mountain-light.webp";

    export let theme: boolean;
</script>

<div 
    class="flex-1 overflow-y-auto scroll-smooth bg-cover bg-top bg-no-repeat"
    style="background-image: url({theme ? darkSrc : lightSrc}); image-rendering: pixelated;"
>
    <slot/>
</div>