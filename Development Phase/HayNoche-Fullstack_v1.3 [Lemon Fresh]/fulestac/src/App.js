import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bares from "./pages/Bares";
import Categorias from "./pages/Categorias";
import Restaurants from "./pages/Restaurants";
import Events from "./pages/Events";
import Index from "./pages/Index"
import Musica from "./pages/Musica";
import Teatros from "./pages/Teatro";
import SpecificPage from "./pages/SpecificPage";
import Everything from "./pages/Everything";
import {useState} from "react";
import Culturales from "./pages/Culturales";


function App () {
    const [width, setWindowWidth] = useState(0);
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }
        return (
            <BrowserRouter>
                <Routes>
                    <Route index element={<Index/>}/>
                    <Route path='Categorias' element={<Categorias/>}/>
                    <Route path='/Restaurants' element={<Restaurants/>}/>
                    <Route path='/Culturales' element={<Culturales/>}/>
                    <Route path='/Bares' element={<Bares/>}/>
                    <Route path='/Teatro' element={<Teatros/>}/>
                    <Route path='/Musica' element={<Musica/>}/>
                    <Route path='/Events' element={<Events/>}/>
                    <Route path='/Everything' element={<Everything/>}/>
                    <Route path='/SpecificPage' element={<SpecificPage/>}/>
                </Routes>
            </BrowserRouter>
        );
};
export default App;

