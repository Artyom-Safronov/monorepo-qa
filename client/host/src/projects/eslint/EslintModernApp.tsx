import { lazy, Suspense } from 'react';

const EslintModernAppService = lazy(
	// @ts-ignore
	async () => import('eslint-modern/modern-app'),
);

export const EslintModernApp = () => {
	return (
		<Suspense fallback="loading...">
			<EslintModernAppService />
		</Suspense>
	);
};
