import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Manga from '../pages/manga'
import Adicionar from '../pages/adicionar'
export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/manga' element={<Manga />} />
                <Route path='/adicionar' element={<Adicionar />} />
            </Routes>
        </BrowserRouter>
    )
}