import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-ignore
import { dependencies } from './package.json';

export default defineConfig(() => ({
	server: { fs: { allow: ['.', '../shared', '../common'] } },
	build: {
		target: 'chrome89',
	},
	plugins: [
		federation({
			name: 'host',
			remotes: {
				"eslint-modern": {
					type: 'module',
					name: 'eslint-modern',
					entry: 'http://localhost:4174/remoteEntry.js',
					entryGlobalName: 'remote',
					shareScope: 'default',
				},
        "eslint-transitional": {
          type: 'module',
          name: 'eslint-transitional',
          entry: 'http://localhost:4175/remoteEntry.js',
          entryGlobalName: 'remote',
          shareScope: 'default',
        },
			},
			exposes: {},
			filename: 'remoteEntry.js',
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
}));
