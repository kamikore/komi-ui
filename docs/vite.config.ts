import { defineConfig } from 'vite'
import requireTransform from 'vite-plugin-require-transform';


export default defineConfig({
    build: {
        minify: false,
    },
    plugins: [
        requireTransform({
            fileRegex: /.js$|.ts$|.tsx$/
        }),
    ],
});
