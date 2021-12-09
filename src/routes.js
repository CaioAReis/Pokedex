import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Generations } from './pages/generations';

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/gens" element={<Generations />} />
            </Routes>
        </BrowserRouter>
    );
}