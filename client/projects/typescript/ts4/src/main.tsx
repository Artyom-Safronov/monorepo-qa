// React 18: createRoot() API.
// In React 17 (ts3 project) this was ReactDOM.render().
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
