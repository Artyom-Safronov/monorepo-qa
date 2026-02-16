import { lazy, Suspense } from 'react';

const EslintAlexKarelinAppService = lazy(
	// @ts-ignore
	async () => import('eslint-alex-karelin/alex-karelin-app'),
);

export const EslintAlexKarelinApp = () => {
	return (
		<Suspense fallback="loading...">
			<EslintAlexKarelinAppService />
		</Suspense>
	);
};
