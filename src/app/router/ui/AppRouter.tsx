import {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routesConfig} from "shared/config/routesConfig/routesConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>LOADING</div>}>
            <Routes>
                {Object.values(routesConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        element={element}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;