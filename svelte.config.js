import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

 
/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        // change this in case you move your github pages path
		paths: {
            base: process.env.NODE_ENV == "production" ? "" : "",
        }
    }
};
 
export default config;