// Entrance of project

// React dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// React root component
import App from './App';

// Render root component to a dom node whose id is root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
