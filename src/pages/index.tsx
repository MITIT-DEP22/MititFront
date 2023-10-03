import {lazy} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {RouterNames} from "../shared/enums/RouterNames";
import HomePage from "./Home/HomePage";

const TestPage = lazy(() => import("./test/TestPage"));

export const Routing = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME} element={<HomePage/>}/>
            <Route path="/test" element={<TestPage/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
};

