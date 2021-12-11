import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Generations } from './pages/generations';
import { PokemonList } from './pages/list';

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/gens" element={<Generations />} />
               <Route path='/list/:idGen' element={<PokemonList />} />
            </Routes>
        </BrowserRouter>
    );
}