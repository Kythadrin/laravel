import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import * as path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: true,
        port: 5174,
        strictPort: true,
        hmr: {
            host: 'localhost',
            protocol: 'ws',
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./resources/js/app"),
        },
    },
});
