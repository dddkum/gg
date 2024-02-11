import './styles/index.scss'
import {Link, Outlet} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/router";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={() => toggleTheme()}>TOGGLE THEME</button>
            <Link to='/'>Главная страница</Link>
            <Link to='/about'>Обо мне</Link>
            <AppRouter/>
            <Outlet/>
        </div>
    );
};

export default App;