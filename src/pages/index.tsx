import React, {lazy, useEffect} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {RouterNames} from "shared/enums/RouterNames";
import {InstitutePage} from "./Institute/InstitutePage";
import {SuperiorsPage} from "./Institute/Superiors/SuperiorsPage";
import {HistoricalPage} from "./Institute/Historical/HistoricalPage";
import ContactPage from "./Contacts/ContactPage";
import FacultyPage from "./Faculty/FacultyPage";
import DepartmentPage from "./Department/DepartmentPage";
import UnitPage from "./Unit/UnitPage";
import EntrancePage from "./Entrance/EntrancePage";
import StudyPage from "./Study/StudyPage";
import {NewsPage} from "./News/NewsPage";
import SciencePage from "./Science/SciencePage";
import {WhyPage} from "./Institute/Why/WhyPage";
import PublicInfoPage from "./Institute/PublicInfo/PublicInfoPage";
import {HeroesPage} from "./Heroes/HeroesPage";

const HomePage = lazy(() => import("./Home/HomePage"));



export const Routing = () => {



    return (
        <Routes>
            <Route path={RouterNames.INSTITUTE} element={<InstitutePage/>}/>
            <Route path={RouterNames.CHIEFS} element={<SuperiorsPage/>}/>
            <Route path={RouterNames.HISTORY} element={<HistoricalPage/>}/>

            <Route path={RouterNames.HOME} element={<HomePage/>}/>
            <Route path={RouterNames.CONTACTS} element={<ContactPage/>}/>
            <Route path={RouterNames.ENTRANTS} element={<EntrancePage/>}/>
            <Route path={RouterNames.STUDY} element={<StudyPage/>}/>
            <Route path={RouterNames.NEWS} element={<NewsPage/>}/>
            <Route path={RouterNames.SCIENCE} element={<SciencePage/>}/>
            <Route path={RouterNames.WHY_MITIT} element={<WhyPage/>}/>
            <Route path={RouterNames.PUBLIC_INFO} element={<PublicInfoPage/>}/>
            <Route path={RouterNames.HEROES} element={<HeroesPage/>}/>

            <Route path={RouterNames.FACULTY + "/:id"} element={<FacultyPage/>}/>
            <Route path={RouterNames.DEPARTMENT + "/:id"} element={<DepartmentPage/>}/>
            <Route path={RouterNames.UNIT + "/:id"} element={<UnitPage/>}/>

            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
};

