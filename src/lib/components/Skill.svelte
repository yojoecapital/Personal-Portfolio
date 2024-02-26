<script lang="ts">
    export let src: string;
    export let text: string;
</script>

<div class="inline-block {$$props.class} mb-2">
    <img class="h-10 w-full mb-2" {src} alt={text} />
    <div class="w-full badge badge-outline">{text}</div> 
</div>