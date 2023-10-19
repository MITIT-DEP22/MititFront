import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {RouterNames} from "shared/enums/RouterNames";
import InstitutePage from "./Institute/InstitutePage";
import HomePage from "./Home/HomePage";
import NewsPage from "./News/NewsPage";
import UniversalPage from "./UniversalPage/UniversalPage";


export const Routing = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME.to} element={<HomePage/>}/>
            <Route path={RouterNames.INSTITUTE.to} element={<InstitutePage/>}/>
            <Route path={RouterNames.NEWS.to} element={<NewsPage/>}/>

            <Route path={"/page/:name"} element={<UniversalPage/>}/>

            <Route path={RouterNames.NOT_FOUND.to} element={<div>404</div>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
};

