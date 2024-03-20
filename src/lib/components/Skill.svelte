<script lang="ts">
    export let src: string;
    export let text: string;
    export let href: string | undefined = undefined;
</script>

<div class="inline-block {$$props.class ?? ""} mb-2 w-fit">
    <div class="flex flex-col justify-center items-center gap-2">
        <img class="size-10" {src} alt={text} />
        {#if href}
            <a {href} target="_blank" rel="noopener noreferrer" class="w-fit badge badge-outline link">{text}</a>
        {:else}
            <div class="badge badge-outline">{text}</div>
        {/if}
    </div>
</div>