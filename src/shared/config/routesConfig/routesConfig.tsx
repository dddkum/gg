import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/About'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutesPath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPath.about,
        element: <AboutPage/>
    }
}
