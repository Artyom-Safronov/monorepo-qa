import { lazy, Suspense } from 'react';

const EslintLegacyAppService = lazy(
	// @ts-ignore
	async () => import('eslint-legacy/legacy-app'),
);

export const EslintLegacyApp = () => {
	return (
		<Suspense fallback="loading...">
			<EslintLegacyAppService />
		</Suspense>
	);
};
