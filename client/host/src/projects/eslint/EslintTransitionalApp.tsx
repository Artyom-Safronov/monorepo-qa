import { lazy, Suspense } from 'react';

const EslintTransitionalAppService = lazy(
	// @ts-ignore
	async () => import('eslint-transitional/transitional-app'),
);

export const EslintTransitionalApp = () => {
	return (
		<Suspense fallback="loading...">
			<EslintTransitionalAppService />
		</Suspense>
	);
};
