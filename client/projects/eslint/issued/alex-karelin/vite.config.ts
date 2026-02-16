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
				allow: ['.', '../../shared', '../../common'],
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
				name: 'eslint-alex-karelin',
				exposes: {
					'./alex-karelin-app': './src/App.tsx',
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
					'react-router-dom': {
						requiredVersion: dependencies['react-router-dom'],
						singleton: true,
					},
				},
			}),
			react(),
		],
	};
});
