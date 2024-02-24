<script lang="ts">
    // imports
    import ShowMore from "./ShowMore.svelte";

    // props
    export let title: string;
    export let src: string | undefined = undefined;
    export let devSet: string[][] = [];
</script>

<div class="card card-compact max-w-lg bg-base-100 shadow-xl ">
    {#if src}
        <figure><img class="w-full" {src} alt={title}/></figure>
    {/if}
    <div class="card-body">
        <h2 class="card-title">
            {title}
        </h2>
        {#each devSet as set}
            <div class="card-actions justify-end">
                {#each set as tool}
                    <div class="badge badge-outline">{tool}</div> 
                {/each}
            </div>
        {/each}
        <ShowMore class="grid gap-2">
            <slot/>
        </ShowMore>
        <div class="card-actions">
            <slot name="footer"/>
        </div>
    </div>
</div>