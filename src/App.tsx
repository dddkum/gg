import React from 'react';
import Counter from "./components/Counter";
import './index.scss'
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/About/AboutPage";

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/counter' element={<Counter/>}/>
            </Routes>
        </div>
    );
};

export default App;