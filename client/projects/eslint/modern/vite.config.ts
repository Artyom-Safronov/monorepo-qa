import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { writeFileSync } from 'fs';
import { defineConfig, loadEnv } from 'vite';
// @ts-ignore
import { dependencies } from './package.json';

export default defineConfig(({ mode }) => {
	const selfEnv = loadEnv(mode, process.cwd());
	return {
		server: {
			fs: {
				allow: ['.', '../shared'],
			},
			proxy: {
				'/api/v1/projects': {
					target: 'http://127.0.0.1:8080', // The address of your backend server
					changeOrigin: true, // Needed for virtual hosted sites
					rewrite: (path) => path.replace(/^\/api/, ''), // Remove the /api prefix from the URL sent to the backend
				},
			},
		},
		build: {
			target: 'chrome89',
		},
		plugins: [
			{
				name: 'generate-environment',
				options: function () {
					console.info('selfEnv', selfEnv);
					writeFileSync('./src/environment.ts', `export default ${JSON.stringify(selfEnv, null, 2)};`);
				},
			},
			federation({
				filename: 'remoteEntry.js',
				name: 'eslint-modern',
				exposes: {
					'./modern-app': './src/App.tsx',
				},
				remotes: {},
				shared: {
					react: {
						requiredVersion: dependencies.react,
						singleton: true,
					},
					'react-dom': {
						requiredVersion: dependencies['react-dom'],
						singleton: true,
					},
					'react-router': {
						requiredVersion: dependencies['react-router'],
						singleton: true,
					},
					'@emotion/react': {
						singleton: true,
					},
					'@mui/material': {
						singleton: true,
					},
					'@tanstack/react-query': {
						singleton: true,
					},
				},
			}),
			react(),
		],
	};
});
