<script lang="ts">
    export let id: string;
    export let symbol: string;
</script>

<h2 {id} class="text-4xl sm:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
    <div class="w-full flex justify-center"><div class="h-20 w-1 rounded-full bg-base-content my-5"/></div>
    <slot/>
    <span class="text-base-content">{symbol}</span>
</h2>