<script lang="ts">
    export let id: string;
</script>

<div>
    <div class="w-full flex justify-center"><div class="h-20 w-1 rounded-full bg-base-content my-5"/></div>
    <h2 {id} class="text-4xl sm:text-5xl text-center"><slot/></h2>
</div>