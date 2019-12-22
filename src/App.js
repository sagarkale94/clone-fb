import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterContainer from './router/RouterContainer';

function App() {
    return (
        <BrowserRouter>
            <RouterContainer />
        </BrowserRouter>
    );
}

export default App;
