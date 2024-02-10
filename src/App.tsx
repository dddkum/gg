import React from 'react';
import './index.scss'
import {Link, Outlet, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/About/AboutPage";
import Counter from "./components/Counter";

const App = () => {
    return (
        <div className="app">
            <Link to='/'>Главная страница</Link>
            <Link to='/about'>Обо мне</Link>
            <Link to='/counter'>Счетчик</Link>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/counter' element={<Counter/>}/>
            </Routes>
            <Outlet/>
        </div>
    );
};

export default App;