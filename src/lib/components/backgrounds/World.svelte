<script lang="ts">
    import darkSrc from "$lib/assets/webp/world-dark.webp";
    import lightSrc from "$lib/assets/webp/world-light.webp";
    export let theme: boolean;
</script>
<div 
    class="bg-contain bg-center bg-no-repeat flex justify-center items-center lg:size-96 sm:size-80 size-64"
    style="background-image: url({theme ? darkSrc : lightSrc}); image-rendering: pixelated;"    
>
    <slot/>
</div>