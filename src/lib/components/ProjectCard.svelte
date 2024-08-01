<script lang="ts">
    import ShowMore from "./ShowMore.svelte";
    import GitHub from "./icons/GitHub.svelte";
    import Youtube from "./icons/Youtube.svelte";

    export let title: string;
    export let src: string | undefined = undefined;
    export let devSet: string[][] = [];
    export let demo: string | undefined = undefined;
    export let repo: string | undefined = undefined;
</script>

<div class="card card-compact glass max-w-lg shadow-xl ">
    {#if src}
        <figure><img class="w-full" {src} alt={title}/></figure>
    {/if}
    <div class="card-body">
        <h4 class="card-title">
            {title}
        </h4>
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
            {#if demo}
                <a href={demo} target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><Youtube/> Demo</a>
            {/if}
            {#if repo}
                <a href={repo} target="_blank" rel="noopener noreferrer" class="btn btn-neutral"><GitHub/> GitHub</a>
            {/if}
            <slot name="footer"/>
        </div>
    </div>
</div>