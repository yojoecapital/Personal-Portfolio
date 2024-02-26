<script lang="ts">
    export let events: {
        when: string,
        title: string,
        description: string
    }[];
</script>

<div class="card card-compact max-w-lg glass border-0 shadow-xl">
    <div class="card-body">
        <ol class="relative border-s border-base-content">                  
            {#each events as event, i}
                <li class="{i == events.length - 1 ? "" : "mb-10"} ms-4">
                    <div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-base-content bg-base-content"/>
                    <time class="mb-1 text-sm font-normal leading-none font-mono italic">
                        {event.when}
                    </time>
                    <h3 class="text-lg font-semibold">
                        {event.title}
                    </h3>
                    <p class="mb-4 text-base font-normal">
                        {event.description}
                    </p>
                </li>
            {/each}
        </ol>
    </div>
</div>