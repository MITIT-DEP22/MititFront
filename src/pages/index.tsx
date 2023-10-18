import React, {lazy} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {RouterNames} from "shared/enums/RouterNames";
import ContactPage from "./Contacts/ContactPage";
import EntrancePage from "./old/Entrance/EntrancePage";
import EducationPage from "./old/Education/EducationPage";
import SciencePage from "./old/Science/SciencePage";
import InstitutePage from "./Institute/InstitutePage";
import SuperiorsPage from "./old/Superiors/SuperiorsPage";
import HistoricalPage from "./Institute/Historical/HistoricalPage";
import WhyPage from "./Institute/Why/WhyPage";
import PublicInfoPage from "./old/PublicInfo/PublicInfoPage";
import HeroesPage from "./old/Heroes/HeroesPage";
import HomePage from "./Home/HomePage";
import NewsPage from "./News/NewsPage";
import FacultyPage from "./old/Faculty/FacultyPage";
import DepartmentPage from "./Department/DepartmentPage";
import UnitPage from "./Unit/UnitPage";
import UniversalPage from "./UniversalPage/UniversalPage";

// const InstitutePage = lazy(() => import("./Institute/InstitutePage"));
// const SuperiorsPage = lazy(() => import("./Institute/Superiors/SuperiorsPage"));
// const HistoricalPage = lazy(() => import("./Institute/Historical/HistoricalPage"));
//
// const ContactPage = lazy(() => import("./Contacts/ContactPage"))
// const EntrancePage = lazy(() => import("./Entrance/EntrancePage"))
// const EducationPage = lazy(() => import("./Education/EducationPage"))
// const NewsPage = lazy(() => import("./News/NewsPage"))
// const SciencePage = lazy(() => import("./Science/SciencePage"))
// const WhyPage = lazy(() => import("./Institute/Why/WhyPage"))
// const PublicInfoPage = lazy(() => import("./Institute/PublicInfo/PublicInfoPage"))
// const HeroesPage = lazy(() => import("./Institute/Heroes/HeroesPage"))
// const FacultyPage = lazy(() => import("./Faculty/FacultyPage"))
// const DepartmentPage = lazy(() => import("./Department/DepartmentPage"))
// const UnitPage = lazy(() => import("./Unit/UnitPage"))
// const HomePage = lazy(() => import("./Home/HomePage"));


export const Routing = () => {
    return (
        <Routes>

            <Route path={RouterNames.HOME.to} element={<HomePage/>}/>
            <Route path={RouterNames.INSTITUTE.to} element={<InstitutePage/>}/>
            <Route path={RouterNames.NEWS.to} element={<NewsPage/>}/>

            <Route path={"/page/:name"} element={<UniversalPage/>}/>
            {/*<Route path={RouterNames.ENTRANTS} element={<EntrancePage/>}/>*/}
            {/*<Route path={RouterNames.STUDY} element={<EducationPage/>}/>*/}
            {/*<Route path={RouterNames.SCIENCE} element={<SciencePage/>}/>*/}
            {/*<Route path={RouterNames.CHIEFS} element={<SuperiorsPage/>}/>*/}
            {/*<Route path={RouterNames.HISTORY} element={<HistoricalPage/>}/>*/}
            {/*<Route path={RouterNames.WHY_MITIT} element={<WhyPage/>}/>*/}
            {/*<Route path={RouterNames.PUBLIC_INFO} element={<PublicInfoPage/>}/>*/}
            {/*<Route path={RouterNames.HEROES} element={<HeroesPage/>}/>*/}
            {/*<Route path={RouterNames.FACULTY + "/:id"} element={<FacultyPage/>}/>*/}
            {/*<Route path={RouterNames.DEPARTMENT + "/:id"} element={<DepartmentPage/>}/>*/}
            {/*<Route path={RouterNames.UNIT + "/:id"} element={<UnitPage/>}/>*/}

            <Route path={RouterNames.NOT_FOUND.to} element={<div>404</div>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
};

