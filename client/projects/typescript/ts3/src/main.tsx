// React 17: explicit React import required, ReactDOM.render() API.
// In React 18 (ts4, ts5) this becomes createRoot().render().
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
