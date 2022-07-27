import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

export default {
	kit: {
		adapter: adapter({}),

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			}
		}
	}
};
