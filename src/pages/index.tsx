import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {RouterNames} from "shared/enums/RouterNames";
import InstitutePage from "./Institute/InstitutePage";
import HomePage from "./Home/HomePage";
import NewsPage from "./News/NewsPage";
import UniversalPage from "./UniversalPage/UniversalPage";
import NewsDetailedPage from "./NewsDetailed/NewsDetailedPage";
import WinsPage from "./Wins/WinsPage";


export const Routing = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME.to} element={<HomePage/>}/>
            <Route path={RouterNames.INSTITUTE.to} element={<InstitutePage/>}/>
            <Route path={RouterNames.NEWS.to} element={<NewsPage/>}/>
            <Route path={RouterNames.NEWS.to + "/:id"} element={<NewsDetailedPage/>}/>
            <Route path={RouterNames.OUR_WINS.to} element={<WinsPage/>}/>

            <Route path={"/page/:name"} element={<UniversalPage/>}/>

            <Route path={RouterNames.NOT_FOUND.to} element={<div>404</div>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
};

