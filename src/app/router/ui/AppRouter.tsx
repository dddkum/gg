import {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routesConfig} from "shared/config/routesConfig/routesConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>LOADING</div>}>
            <div className="page-wrapper">
                <Routes>
                    {Object.values(routesConfig).map(({element, path}) => (
                        <Route
                            key={path}
                            element={element}
                            path={path}
                        />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
};

export default AppRouter;