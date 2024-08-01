<script lang="ts">
    import { onDestroy } from "svelte";

    export const cursorOn = " \u2503";
    export const cursorOff = " \u00A0";
    export const timeout = 100;
    export let words: string[];

    let cursor = cursorOn;
    let count = 0;
    let active = true;
    let text = "";
    function getCursor() {
        if (count > 2) {
            count = 0;
            if (cursor == cursorOn) 
                cursor = cursorOff;
            else cursor = cursorOn;
        } else count++;
        return cursor;
    }
    function delay() {
        return new Promise((resolve) => setTimeout(resolve, timeout));
    }
    async function animate(word: string) {
        for (let i = 0; i <= word.length; i++) {
            await delay();
            text = word.slice(0, i) + getCursor();
        } for (let _ = word.length * 3; _ >= 0; _--) {
            await delay();
            text = word + getCursor();
        } for (let i = word.length; i >= 0; i--) {
            await delay();
            text = word.slice(0, i) + getCursor();
        }
    }
    async function start() {
        while (active) {
            for (const word of words) {
                await animate(word);
                if (!active) return;
            }
        }
    }
    start();

    // unset active flag to break loop
    onDestroy(() => {
		active = false;
	});
</script>

{text}