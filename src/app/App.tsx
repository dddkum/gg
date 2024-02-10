import {Suspense} from 'react';
import './styles/index.scss'
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/About";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={() => toggleTheme()}>TOGGLE THEME</button>
            <Link to='/'>Главная страница</Link>
            <Link to='/about'>Обо мне</Link>
            <Suspense fallback={<div>LOADING</div>}>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </Suspense>
            <Outlet/>
        </div>
    );
};

export default App;