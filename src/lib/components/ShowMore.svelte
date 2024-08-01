<script lang="ts">
    export let maxClass = "max-h-16 md:max-h-32";

    let showMore = false;
    function toggleShowMore() {
        showMore = !showMore;
    }
</script>

<div class={$$props.class ?? ""}>
    <div class="{showMore ? "" : `${maxClass} truncate`}">
        <slot/>
    </div>
    <button class="w-full text-right link" on:click={toggleShowMore}>Show {showMore ? 'Less' : 'More'}</button>
</div>