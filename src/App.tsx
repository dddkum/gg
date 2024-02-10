import {Suspense} from 'react';
import './styles/index.scss'
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/About/AboutPage.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={() => toggleTheme()}>TOGGLE THEME</button>
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