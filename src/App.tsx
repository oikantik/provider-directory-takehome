import React from 'react';
import { Home } from './screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
