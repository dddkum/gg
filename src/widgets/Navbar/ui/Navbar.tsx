import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to='/' className={cls.mainLink}>Главная страница</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to='/about'>Обо мне</AppLink>
            </div>
        </div>
    )
}
