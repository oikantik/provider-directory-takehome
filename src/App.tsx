import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './screens/Home';
import { Profile } from './screens/Profile';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:id" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
