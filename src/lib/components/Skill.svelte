<script lang="ts">
    export let src: string;
    export let text: string;
    export let href: string | undefined = undefined;
</script>

<div class="inline-block {$$props.class} mb-2 w-fit">
    <img class="h-10 w-full mb-2" {src} alt={text} />
    {#if href}
        <a {href} target="_blank" rel="noopener noreferrer" class="w-fit badge badge-outline link">{text}</a>
    {:else}
        <div class="w-fit badge badge-outline">{text}</div>
    {/if}
</div>