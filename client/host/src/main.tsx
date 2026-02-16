import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './Layout';
import { EslintModernApp } from './projects/eslint/EslintModernApp';
import { Home } from './Home';
import './App.css';
import { EslintTransitionalApp } from './projects/eslint/EslintTransitionalApp';
import { EslintLegacyApp } from './projects/eslint/EslintLegacyApp';
import { EslintAlexKarelinApp } from './projects/eslint/EslintAlexKarelinApp';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="projects">
						  <Route path="eslint">
                <Route path="modern" element={<EslintModernApp />} />
                <Route path="transitional" element={<EslintTransitionalApp />} />
                <Route path="legacy" element={<EslintLegacyApp />} />
                <Route path="alex-karelin" element={<EslintAlexKarelinApp />} />
              </Route>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>,
);
