import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Link to='/' className={cls.mainLink}>Главная страница</Link>
                <Link to='/about'>Обо мне</Link>
            </div>
        </div>
    );
};
