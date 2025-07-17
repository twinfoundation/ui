import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [],
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'UIComponentsReact',
			fileName: 'index'
		}
	}
}); 