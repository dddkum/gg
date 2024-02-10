import {Suspense} from 'react';
import './index.scss'
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/About/AboutPage.lazy";

const App = () => {
    return (
        <div className="app">
            <Link to='/'>Главная страница</Link>
            <Link to='/about'>Обо мне</Link>
            <Suspense fallback={<div>LOADING</div>}>
            <Routes>
                    <Route path='/' element={<MainPageLazy/>}/>
                    <Route path='/about' element={<AboutPageLazy/>}/>
            </Routes>
            </Suspense>
            <Outlet/>
        </div>
    );
};

export default App;