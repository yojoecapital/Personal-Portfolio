<script lang="ts">
    export let theme: boolean;
    const lightUri = "images/mountain-light.gif";
    const darkUri = "images/mountain-dark.gif";
</script>

<div 
    class="flex-1 overflow-y-auto scroll-smooth bg-cover bg-top bg-no-repeat"
    style="background-image: url({theme ? darkUri : lightUri}); image-rendering: pixelated;"
>
    <slot/>
</div>